import { ResumeView } from "@/components/resume/resume-view";
import { getGithubProfile } from "@/lib/github";

export const revalidate = 3600;

export default async function HomePage() {
  const githubProfile = await getGithubProfile();

  return <ResumeView githubProfile={githubProfile} />;
}
