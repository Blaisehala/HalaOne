"use client";

import { FormEvent, useState } from "react";
import { company } from "@/lib/company";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const organization = String(data.get("organization") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Conversation with HalaOne — ${organization || name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nOrganization: ${organization}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
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
      <p className="hint">
        Submitting opens your email client to {company.email}. If nothing opens,
        write us directly. We use conversations to understand fit—not to run a
        sales sequence.
      </p>
      <button className="btn btn-primary" type="submit">
        Request an Asset Audit
      </button>
      {sent ? (
        <p className="hint" role="status">
          If your mail client did not open, email {company.email} directly.
        </p>
      ) : null}
    </form>
  );
}
