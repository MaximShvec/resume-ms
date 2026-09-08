"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchGithubProfile, githubKeys } from "@/lib/github";
import type { GithubProfile } from "@/lib/types";
import { TextLink } from "@/components/ui/text-link";

type GithubPresenceProps = {
  initialProfile: GithubProfile | null;
};

export function GithubPresence({ initialProfile }: GithubPresenceProps) {
  const query = useQuery({
    queryKey: githubKeys.profile,
    queryFn: fetchGithubProfile,
    initialData: initialProfile ?? undefined,
  });

  const profile = query.data;

  if (!profile) {
    return null;
  }

  return (
    <p className="mt-4 text-sm text-muted">
      GitHub{" "}
      <TextLink href={profile.htmlUrl} external>
        {profile.login}
      </TextLink>
      {` · ${profile.publicRepos} ${pluralRepos(profile.publicRepos)}`}
    </p>
  );
}

function pluralRepos(count: number) {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return "репозиторий";
  }

  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return "репозитория";
  }

  return "репозиториев";
}
