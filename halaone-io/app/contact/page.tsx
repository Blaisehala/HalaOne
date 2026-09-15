import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with HalaOne about technology assets, infrastructure, and visibility.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="page">
      <div className="wrap">
        <p className="eyebrow">Contact</p>
        <h1>Start a conversation.</h1>
        <div className="prose">
          <p>
            Tell us about the technology environment you need to understand.
            We will reply to determine whether there is a useful next step—
            typically a focused discussion, not a product pitch.
          </p>
          <p>
            Email{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>
            {" · "}
            {company.location}
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
