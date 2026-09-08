import { z } from "zod";

export const inquiryChannelSchema = z.enum(["email", "telegram"]);

export const inquirySchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Укажите имя")
      .max(80, "Имя слишком длинное"),
    channel: inquiryChannelSchema,
    contact: z.string().trim().min(3, "Укажите контакт").max(120, "Контакт слишком длинный"),
    message: z
      .string()
      .trim()
      .min(10, "Опишите задачу чуть подробнее")
      .max(1000, "Сообщение слишком длинное"),
  })
  .superRefine((value, ctx) => {
    if (value.channel === "email") {
      const email = z.string().email().safeParse(value.contact);
      if (!email.success) {
        ctx.addIssue({
          code: "custom",
          path: ["contact"],
          message: "Некорректный email",
        });
      }
    }

    if (value.channel === "telegram") {
      const handle = value.contact.replace(/^@/, "");
      if (!/^[a-zA-Z0-9_]{5,32}$/.test(handle)) {
        ctx.addIssue({
          code: "custom",
          path: ["contact"],
          message: "Укажите корректный Telegram",
        });
      }
    }
  });

export type InquiryInput = z.infer<typeof inquirySchema>;

export const githubUserSchema = z.object({
  login: z.string(),
  name: z.string().nullable(),
  html_url: z.string().url(),
  public_repos: z.number().int().nonnegative(),
});
