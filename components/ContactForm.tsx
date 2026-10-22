"use client";

import { FormEvent, useState } from "react";
import { company } from "@/lib/company";
import { hasFormBackend, submitForm, trackLead } from "@/lib/forms";

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const organization = String(data.get("organization") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subjectText = `Conversation with HalaOne — ${organization || name}`;

    if (hasFormBackend) {
      setStatus("sending");
      const result = await submitForm(
        subjectText,
        { Name: name, Organization: organization, Email: email, Message: message },
        String(data.get("botcheck") || ""),
      );
      if (result.ok) {
        trackLead("contact");
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
      return;
    }

    const subject = encodeURIComponent(subjectText);
    const body = encodeURIComponent(
      `Name: ${name}\nOrganization: ${organization}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setStatus("mailto");
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>
        Name
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        Organization
        <input name="organization" type="text" autoComplete="organization" />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        What should we understand about your environment?
        <textarea name="message" required />
      </label>
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="sr-only" />
      <p className="hint">
        {hasFormBackend
          ? `Your message goes straight to ${company.email}. `
          : `Submitting opens your email client to ${company.email}. If nothing opens, write us directly. `}
        We use conversations to understand fit—not to run a sales sequence.
      </p>
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Request an Asset Audit"}
      </button>
      {status === "sent" ? (
        <p className="hint" role="status">
          Thanks—your message is in. We&rsquo;ll reply from {company.email}.
        </p>
      ) : null}
      {status === "mailto" ? (
        <p className="hint" role="status">
          If your mail client did not open, email {company.email} directly.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="hint" role="alert">
          That didn&rsquo;t go through. Please try again or email {company.email}{" "}
          directly.
        </p>
      ) : null}
    </form>
  );
}
