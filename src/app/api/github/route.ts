import { getGithubProfile } from "@/lib/github";
import type { ApiResult, GithubProfile } from "@/lib/types";

export const revalidate = 3600;

export async function GET() {
  const profile = await getGithubProfile();

  if (!profile) {
    const body: ApiResult<GithubProfile> = {
      ok: false,
      error: "Не удалось получить профиль GitHub",
    };
    return Response.json(body, { status: 502 });
  }

  const body: ApiResult<GithubProfile> = { ok: true, data: profile };
  return Response.json(body);
}
