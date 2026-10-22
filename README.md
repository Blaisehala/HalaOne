# HalaOne

Public website for **HalaOne LLC** — Technology Asset & Infrastructure Management.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Analytics

- **Vercel Web Analytics** is always on; enable it in the Vercel project's **Analytics** tab.
- **Google Analytics 4** (`G-3C95CHZ6WK`, set in `lib/company.ts`) loads in production builds. `NEXT_PUBLIC_GA_ID` overrides it if set.
- Custom GA4 events: `guide_download` (params `guide`, `placement`) and `audit_cta_click` (param `source_page`), sent by `components/TrackedLink.tsx`.

## Forms

Contact, Get Started and guide-download forms post to [Web3Forms](https://web3forms.com), which emails each submission to the address the access key was created for.

- Set the access key in `lib/company.ts` (`web3formsKey`) or as `NEXT_PUBLIC_WEB3FORMS_KEY`.
- With no key: Contact and Get Started fall back to `mailto:`, and guide PDFs download without a form.
- Successful submissions send the GA4 `generate_lead` event.

## Notes

Contact currently uses `contact@halaone.io`. Update LinkedIn in `components/Footer.tsx` when the company page is live.
