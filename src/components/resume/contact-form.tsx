"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { TextLink } from "@/components/ui/text-link";
import { profile } from "@/lib/resume";
import { inquirySchema, type InquiryInput } from "@/lib/schemas";
import type { ApiResult } from "@/lib/types";

type InquiryResponse = ApiResult<{ mailto: string }>;

export function ContactForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [mailto, setMailto] = useState<string | null>(null);

  const form = useForm<InquiryInput>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      channel: "email",
      contact: "",
      message: "",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setServerError(null);
    setMailto(null);

    const response = await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const payload = (await response.json()) as InquiryResponse;

    if (!payload.ok) {
      setServerError(payload.error);
      return;
    }

    setMailto(payload.data.mailto);
    form.reset();
  });

  return (
    <form className="mt-6 grid gap-4" onSubmit={onSubmit} noValidate>
      <Field id="name" label="Имя" error={form.formState.errors.name?.message}>
        <Input
          id="name"
          autoComplete="name"
          aria-invalid={Boolean(form.formState.errors.name)}
          {...form.register("name")}
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-[10rem_1fr]">
        <Field id="channel" label="Канал" error={form.formState.errors.channel?.message}>
          <Select id="channel" {...form.register("channel")}>
            <option value="email">Email</option>
            <option value="telegram">Telegram</option>
          </Select>
        </Field>
        <Field id="contact" label="Контакт" error={form.formState.errors.contact?.message}>
          <Input
            id="contact"
            autoComplete="email"
            aria-invalid={Boolean(form.formState.errors.contact)}
            {...form.register("contact")}
          />
        </Field>
      </div>

      <Field id="message" label="Сообщение" error={form.formState.errors.message?.message}>
        <Textarea
          id="message"
          aria-invalid={Boolean(form.formState.errors.message)}
          {...form.register("message")}
        />
      </Field>

      {serverError ? (
        <p role="alert" className="text-sm text-red-700">
          {serverError}
        </p>
      ) : null}

      {mailto ? (
        <p className="text-sm text-muted">
          Форма проверена. Откройте{" "}
          <TextLink href={mailto}>письмо</TextLink> или напишите в Telegram{" "}
          <TextLink href={`https://t.me/${profile.telegram}`} external>
            @{profile.telegram}
          </TextLink>
          .
        </p>
      ) : null}

      <div>
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Проверяю…" : "Отправить"}
        </Button>
      </div>
    </form>
  );
}
