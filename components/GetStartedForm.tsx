"use client";

import { FormEvent, useState } from "react";
import { company } from "@/lib/company";

export function GetStartedForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const company_ = String(data.get("company") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const locations = String(data.get("locations") || "");
    const assetTypes = String(data.get("assetTypes") || "");
    const lookingFor = String(data.get("lookingFor") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Get Started with HalaOne — ${company_ || name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company_}\nEmail: ${email}\nPhone: ${phone}\n` +
        `Number of locations: ${locations}\nAsset types: ${assetTypes}\n` +
        `Looking for: ${lookingFor}\n\n${message}`,
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
      <p className="hint">
        Submitting opens your email client to {company.email}. If nothing opens,
        write us directly. We use this to scope your environment—not to run a
        sales sequence.
      </p>
      <button className="btn btn-primary" type="submit">
        Submit Request
      </button>
      {sent ? (
        <p className="hint" role="status">
          If your mail client did not open, email {company.email} directly.
        </p>
      ) : null}
    </form>
  );
}
