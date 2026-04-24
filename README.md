# hamzaelessawy.com

Personal site, built with Next.js 14 (App Router) and deployed on Vercel.

## Local development

```bash
npm install
npm run dev
```

Opens at http://localhost:3000

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to vercel.com → Add New Project → pick this repo → Deploy
3. In Project Settings → Domains, add `hamzaelessawy.com` and `www.hamzaelessawy.com`
4. Vercel will give you two DNS records. Add them in Namecheap (Domain List → Manage → Advanced DNS)
5. Wait for DNS propagation (usually 5–30 minutes)

## Project structure

```
app/
  layout.tsx       # Shared nav + footer across all pages
  globals.css      # All design tokens and styles
  page.tsx         # Homepage
  work/page.tsx    # Work index (placeholder)
  resume/page.tsx  # Resume (placeholder)
public/
  hamza-cypress.jpg  # Homepage portrait
```

## Editing the homepage

All copy lives in `app/page.tsx`. All design tokens live at the top of `app/globals.css` under `:root`.

## Accent color

The terracotta accent is defined in one place: `--accent: #B8543A` in `app/globals.css`. Change it there and it propagates everywhere.
