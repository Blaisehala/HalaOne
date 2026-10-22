"use client";

import { FormEvent, useEffect, useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { hasFormBackend, submitForm, trackLead } from "@/lib/forms";

type Props = {
  /** Path to the PDF in /public. */
  pdfHref: string;
  /** Short id used in analytics and the lead email, e.g. "php-vulnerability". */
  guide: string;
  /** Human title used in the lead email subject. */
  title: string;
};

const STORAGE_KEY = "halaone-guide-access";

function rememberAccess() {
  try {
    window.localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* storage blocked: the visitor just sees the form again next time */
  }
}

function hasAccess() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 4v11" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 20h14" />
    </svg>
  );
}

export function GuideDownloadForm({ pdfHref, guide, title }: Props) {
  const [unlocked, setUnlocked] = useState(!hasFormBackend);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  useEffect(() => {
    if (hasAccess()) setUnlocked(true);
  }, []);

  function trackDownload() {
    if ("dataLayer" in window) {
      sendGAEvent("event", "guide_download", { guide, link_url: pdfHref });
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setStatus("sending");
    const result = await submitForm(
      `Guide download: ${title}`,
      {
        Name: String(data.get("name") || ""),
        Email: String(data.get("email") || ""),
        Company: String(data.get("company") || ""),
        Guide: title,
      },
      String(data.get("botcheck") || ""),
    );
    if (!result.ok) {
      setStatus("error");
      return;
    }
    trackLead(`guide:${guide}`);
    rememberAccess();
    setUnlocked(true);
    setStatus("idle");
    // Start the download straight away; the button below stays as a fallback.
    trackDownload();
    const a = document.createElement("a");
    a.href = pdfHref;
    a.download = "";
    a.click();
  }

  if (unlocked) {
    return (
      <div className="guide-gate" id="get-the-pdf">
        <h2>Download this guide</h2>
        <p>The 2-page PDF version, ready to share with your team.</p>
        <p>
          <a className="btn btn-secondary" href={pdfHref} download onClick={trackDownload}>
            <DownloadIcon />
            Download the PDF
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="guide-gate" id="get-the-pdf">
      <h2>Get the PDF</h2>
      <p>Enter your details and the 2-page PDF downloads immediately.</p>
      <form className="form guide-form" onSubmit={onSubmit}>
        <label>
          Name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Work email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Company
          <input name="company" type="text" autoComplete="organization" required />
        </label>
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="sr-only"
        />
        <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Get the PDF"}
        </button>
        {status === "error" ? (
          <p className="hint" role="alert">
            That didn&rsquo;t go through.{" "}
            <a href={pdfHref} download onClick={trackDownload}>
              Download the PDF directly
            </a>
            .
          </p>
        ) : null}
        <p className="hint">
          We use your details only to follow up on this guide. No sales
          sequence, and we never sell your information.
        </p>
      </form>
    </div>
  );
}
