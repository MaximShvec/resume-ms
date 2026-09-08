import { profile } from "@/lib/resume";
import { inquirySchema } from "@/lib/schemas";
import type { ApiResult } from "@/lib/types";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    const body: ApiResult<never> = { ok: false, error: "Некорректный JSON" };
    return Response.json(body, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(payload);

  if (!parsed.success) {
    const body: ApiResult<never> = {
      ok: false,
      error: parsed.error.issues[0]?.message ?? "Проверьте поля формы",
    };
    return Response.json(body, { status: 400 });
  }

  const { name, contact, message, channel } = parsed.data;
  const subject = encodeURIComponent(`Запрос с сайта резюме: ${name}`);
  const bodyText = encodeURIComponent(
    `${message}\n\nКонтакт (${channel}): ${contact}\nИмя: ${name}`,
  );

  const result: ApiResult<{ mailto: string }> = {
    ok: true,
    data: {
      mailto: `mailto:${profile.email}?subject=${subject}&body=${bodyText}`,
    },
  };

  return Response.json(result);
}
