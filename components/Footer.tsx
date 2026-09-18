import Link from "next/link";
import { company } from "@/lib/company";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Link className="brand" href="/">
              <Logo size={24} />
              <span>{company.name}</span>
            </Link>
            <p>{company.legalName}</p>
            <p>{company.tagline}</p>
          </div>
          <div className="footer-col">
            <h2>Contact</h2>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <p>{company.location}</p>
            <a href={company.url}>{company.domain}</a>
            <a href={company.linkedin} rel="noreferrer" target="_blank">
              LinkedIn
            </a>
          </div>
          <div className="footer-col">
            <h2>Services</h2>
            <Link href="/services/audit">Audit</Link>
            <Link href="/services/lifecycle">Lifecycle</Link>
            <Link href="/services/managed-program">Managed Program</Link>
          </div>
          <div className="footer-col">
            <h2>Site</h2>
            <Link href="/industries/property-management">Industries</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/about">About</Link>
            <Link href="/get-started">Contact</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          <nav aria-label="Legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
