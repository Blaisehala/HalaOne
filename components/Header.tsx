"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

const serviceLinks = [
  { href: "/services/audit", label: "Audit" },
  { href: "/services/lifecycle", label: "Lifecycle" },
  { href: "/services/managed-program", label: "Managed Program" },
];

const links = [
  { href: "/industries/property-management", label: "Industries" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/get-started", label: "Contact" },
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
          <div className="nav-item">
            <button className="nav-dropdown-trigger" type="button" aria-haspopup="true">
              Services
            </button>
            <div className="nav-dropdown-menu">
              {serviceLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="btn btn-primary" href="/get-started">
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
        <p className="nav-sub-label">Services</p>
        {serviceLinks.map((link) => (
          <Link
            key={link.href}
            className="nav-sub"
            href={link.href}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link className="btn btn-primary" href="/get-started" onClick={() => setOpen(false)}>
          Request an Asset Audit
        </Link>
      </nav>
    </header>
  );
}
