"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#approach", label: "Approach" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="brand" href="/" aria-label="HalaOne home">
          <Logo />
          <span>HalaOne</span>
        </Link>
        <nav className="nav" aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="btn btn-primary" href="/contact">
          Request an Asset Audit
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path
              d={open ? "M4 4l10 10M14 4L4 14" : "M3 5h12M3 9h12M3 13h12"}
              stroke="currentColor"
              strokeWidth="1.6"
              fill="none"
            />
          </svg>
        </button>
      </div>
      <nav
        id="mobile-nav"
        className={`mobile-nav${open ? " open" : ""}`}
        aria-label="Mobile"
      >
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link className="btn btn-primary" href="/contact" onClick={() => setOpen(false)}>
          Request an Asset Audit
        </Link>
      </nav>
    </header>
  );
}
