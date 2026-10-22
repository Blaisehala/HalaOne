"use client";

import { FormEvent, useState } from "react";
import { company } from "@/lib/company";
import { hasFormBackend, submitForm, trackLead } from "@/lib/forms";

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

export function GetStartedForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const company_ = String(data.get("company") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const locations = String(data.get("locations") || "");
    const assetTypes = String(data.get("assetTypes") || "");
    const lookingFor = String(data.get("lookingFor") || "");
    const message = String(data.get("message") || "");

    const subjectText = `Get Started with HalaOne — ${company_ || name}`;

    if (hasFormBackend) {
      setStatus("sending");
      const result = await submitForm(
        subjectText,
        {
          Name: name,
          Company: company_,
          Email: email,
          Phone: phone,
          "Number of locations": locations,
          "Asset types": assetTypes,
          "Looking for": lookingFor,
          Message: message,
        },
        String(data.get("botcheck") || ""),
      );
      if (result.ok) {
        trackLead("get-started");
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
      return;
    }

    const subject = encodeURIComponent(subjectText);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company_}\nEmail: ${email}\nPhone: ${phone}\n` +
        `Number of locations: ${locations}\nAsset types: ${assetTypes}\n` +
        `Looking for: ${lookingFor}\n\n${message}`,
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
        Company
        <input name="company" type="text" autoComplete="organization" required />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" autoComplete="tel" />
      </label>
      <label>
        Number of locations
        <input name="locations" type="text" inputMode="numeric" required />
      </label>
      <label>
        Approximate asset types
        <select name="assetTypes" defaultValue="" required>
          <option value="" disabled>
            Select one
          </option>
          <option value="IT endpoints">IT endpoints</option>
          <option value="Network & Wi-Fi">Network &amp; Wi-Fi</option>
          <option value="Access & cameras">Access &amp; cameras</option>
          <option value="Mixed">Mixed</option>
        </select>
      </label>
      <label>
        What are you looking for?
        <select name="lookingFor" defaultValue="" required>
          <option value="" disabled>
            Select one
          </option>
          <option value="One-time audit">One-time audit</option>
          <option value="Ongoing tracking">Ongoing tracking</option>
          <option value="Managed program">Managed program</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </label>
      <label>
        Message (optional)
        <textarea name="message" />
      </label>
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="sr-only" />
      <p className="hint">
        {hasFormBackend
          ? `Your request goes straight to ${company.email}. `
          : `Submitting opens your email client to ${company.email}. If nothing opens, write us directly. `}
        We use this to scope your environment—not to run a sales sequence.
      </p>
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Submit Request"}
      </button>
      {status === "sent" ? (
        <p className="hint" role="status">
          Thanks—your request is in. We&rsquo;ll reply from {company.email}.
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
