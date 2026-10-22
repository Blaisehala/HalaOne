import { company } from "@/lib/company";

/**
 * Web3Forms delivers each submission by email to the address the access key
 * was created for. The key is public by design (it can only send to that
 * address). Override with NEXT_PUBLIC_WEB3FORMS_KEY.
 */
export const formsKey =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || company.web3formsKey;

export const hasFormBackend = formsKey.length > 0;

export type SubmitResult = { ok: true } | { ok: false; error: string };

export async function submitForm(
  subject: string,
  fields: Record<string, string>,
  botcheck = "",
): Promise<SubmitResult> {
  if (!hasFormBackend) return { ok: false, error: "not-configured" };
  if (botcheck) return { ok: true }; // honeypot filled: silently drop bots

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: formsKey,
        subject,
        from_name: "HalaOne website",
        replyto: fields.Email ?? "",
        ...fields,
        Page: typeof window !== "undefined" ? window.location.pathname + window.location.search : "",
      }),
    });
    const json = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };
    if (res.ok && json.success) return { ok: true };
    return { ok: false, error: json.message || `HTTP ${res.status}` };
  } catch {
    return { ok: false, error: "network" };
  }
}

/** GA4 recommended lead event, sent only when gtag is on the page. */
export function trackLead(formName: string) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  w.gtag?.("event", "generate_lead", { form_name: formName });
}
