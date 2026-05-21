# AlphaX Dezignerz Studio — marketing site

Premium Next.js + Tailwind marketing site for **AlphaX Dezignerz Studio** (travel-agency design). Ready to deploy on [Vercel](https://vercel.com).

## Local development

```bash
cd alphax-dezignerz-studio
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment variables (contact form)

The contact form posts to `/api/contact`, which sends email through [Resend](https://resend.com).

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | For email send | Resend API key |
| `RESEND_FROM_EMAIL` | Recommended in production | Verified sender, e.g. `AlphaX Studio <mail@yourdomain.com>` |
| `NEXT_PUBLIC_CALENDLY_URL` | Optional | Calendly or Google Calendar booking URL for “Book a 15-min Discovery Call” |

If `RESEND_API_KEY` is missing, the API returns **503** and the UI shows the error message (use WhatsApp as a fallback).

## Deploy on Vercel

1. Push this folder as a Git repository (or connect the monorepo with **Root Directory** = `alphax-dezignerz-studio`).
2. Import the project in Vercel and set the environment variables above.
3. Add your custom domain **alphaxdezignerzstudio.com** under **Project → Settings → Domains** and update DNS at your registrar per Vercel’s instructions.

## Content updates

- Business copy, stats, marquee clients: [`src/content/site.ts`](src/content/site.ts)
- Homepage “experience” blocks (hero pills, bento, process, FAQ, reel embed): [`src/content/experience.ts`](src/content/experience.ts)
- Services & pricing: [`src/content/services.ts`](src/content/services.ts)
- Portfolio tiles & categories (supports **Unsplash URLs**, **`public/` images**, optional **YouTube** play buttons): [`src/content/portfolio.ts`](src/content/portfolio.ts)
- Testimonials: [`src/content/testimonials.ts`](src/content/testimonials.ts)
- Client logos (marquee): add PNGs under `public/clients/` — see filenames in [`src/content/site.ts`](src/content/site.ts)
- Lead magnet + newsletter APIs: `/api/lead-magnet`, `/api/newsletter` (same Resend env vars)

Replace gradient placeholders with real images by adding files under `public/portfolio/` and extending the portfolio item model when you are ready.

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — run production build locally
- `npm run lint` — ESLint
