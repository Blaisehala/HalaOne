"use client";

import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";
import type { ComponentProps } from "react";

type TrackedLinkProps = ComponentProps<"a"> & {
  href: string;
  /** GA4 event name, e.g. "file_download" or "audit_cta_click". */
  event: string;
  /** Extra GA4 event parameters. */
  params?: Record<string, string>;
};

/**
 * A link that also reports a GA4 event when clicked.
 * Internal routes use next/link; files and external URLs use a plain <a>.
 * If GA is not configured, the click behaves like a normal link.
 */
export function TrackedLink({ href, event, params, onClick, ...rest }: TrackedLinkProps) {
  const handleClick: ComponentProps<"a">["onClick"] = (e) => {
    if (typeof window !== "undefined" && "dataLayer" in window) {
      sendGAEvent("event", event, { link_url: href, ...params });
    }
    onClick?.(e);
  };

  const isRoute = href.startsWith("/") && !rest.download && !/\.[a-z0-9]+$/i.test(href);
  if (isRoute) {
    return <Link href={href} onClick={handleClick} {...rest} />;
  }
  return <a href={href} onClick={handleClick} {...rest} />;
}
