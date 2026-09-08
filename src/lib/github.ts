import { githubUserSchema } from "@/lib/schemas";
import type { ApiResult, GithubProfile } from "@/lib/types";

const GITHUB_USER = "MaximShvec";

export const githubKeys = {
  profile: ["github", GITHUB_USER] as const,
};

export function toGithubProfile(input: unknown): GithubProfile {
  const user = githubUserSchema.parse(input);
  return {
    login: user.login,
    name: user.name,
    htmlUrl: user.html_url,
    publicRepos: user.public_repos,
  };
}

export async function getGithubProfile(): Promise<GithubProfile | null> {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USER}`, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "resume-ms",
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return null;
    }

    return toGithubProfile(await response.json());
  } catch {
    return null;
  }
}

export async function fetchGithubProfile(): Promise<GithubProfile> {
  const response = await fetch("/api/github", { method: "GET" });
  const payload = (await response.json()) as ApiResult<GithubProfile>;

  if (!payload.ok) {
    throw new Error(payload.error);
  }

  return payload.data;
}
