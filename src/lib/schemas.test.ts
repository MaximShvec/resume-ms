import { describe, expect, it } from "vitest";
import { inquirySchema, githubUserSchema } from "@/lib/schemas";
import { toGithubProfile } from "@/lib/github";

describe("inquirySchema", () => {
  it("принимает корректную заявку по email", () => {
    const result = inquirySchema.safeParse({
      name: "Анна",
      channel: "email",
      contact: "anna@example.com",
      message: "Нужна вёрстка лендинга по Figma",
    });

    expect(result.success).toBe(true);
  });

  it("отклоняет короткий telegram", () => {
    const result = inquirySchema.safeParse({
      name: "Анна",
      channel: "telegram",
      contact: "@ab",
      message: "Нужна вёрстка лендинга по Figma",
    });

    expect(result.success).toBe(false);
  });
});

describe("githubUserSchema", () => {
  it("отбрасывает лишние поля API и собирает профиль", () => {
    const profile = toGithubProfile({
      login: "MaximShvec",
      name: "Maxim",
      html_url: "https://github.com/MaximShvec",
      public_repos: 4,
      extra: "ignore-me",
    });

    expect(profile).toEqual({
      login: "MaximShvec",
      name: "Maxim",
      htmlUrl: "https://github.com/MaximShvec",
      publicRepos: 4,
    });
    expect(githubUserSchema.safeParse({ login: "x" }).success).toBe(false);
  });
});
