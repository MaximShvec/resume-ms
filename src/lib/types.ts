export type ContactKind = "phone" | "email" | "telegram";

export type ContactChannel =
  | {
      kind: "phone";
      label: "M";
      value: string;
      href: `tel:${string}`;
    }
  | {
      kind: "email";
      label: "E";
      value: string;
      href: `mailto:${string}`;
    }
  | {
      kind: "telegram";
      label: "TG";
      value: string;
      href: `https://${string}`;
    };

export type SkillGroup = {
  title: string;
  items: string;
};

export type ExperienceRole = {
  title: string;
  place: string;
  summary: string;
  highlights: string[];
};

export type Project = {
  href: string;
  host: string;
  description: string;
};

export type Reason = {
  title: string;
  text: string;
};

export type Award = {
  title: string;
  meta: string;
  text: string;
};

export type GithubProfile = {
  login: string;
  name: string | null;
  htmlUrl: string;
  publicRepos: number;
};

export type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

export function isApiOk<T>(result: ApiResult<T>): result is { ok: true; data: T } {
  return result.ok;
}
