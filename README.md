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
- **Google Analytics 4** loads only when `NEXT_PUBLIC_GA_ID` (e.g. `G-XXXXXXX`) is set in Vercel → Settings → Environment Variables. Redeploy after adding it.
- Custom GA4 events: `guide_download` (params `guide`, `placement`) and `audit_cta_click` (param `source_page`), sent by `components/TrackedLink.tsx`.

## Notes

Contact currently uses `contact@halaone.io`. Update LinkedIn in `components/Footer.tsx` when the company page is live.
