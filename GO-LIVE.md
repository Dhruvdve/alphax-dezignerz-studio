# Go live — AlphaX Dezignerz Studio

Fastest path: **Vercel** + your domain **alphaxdezignerzstudio.com**.

## 1. Verify build locally

```powershell
cd alphax-dezignerz-studio
npm install
npm run build
npm run start
```

Open http://localhost:3000 — click FAQ, portfolio thumbnails, WhatsApp, and booking link.

## 2. Push to GitHub

If this folder is not a repo yet:

```powershell
cd alphax-dezignerz-studio
git init
git add .
git commit -m "Launch AlphaX Dezignerz marketing site"
```

Create a new repo on GitHub (empty, no README), then:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/alphax-dezignerz-studio.git
git branch -M main
git push -u origin main
```

## 3. Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. **Import** the `alphax-dezignerz-studio` repository.
3. Framework: **Next.js** (auto-detected). Root directory: `.` (repo root).
4. **Environment variables** (Production + Preview):

| Name | Value |
|------|--------|
| `RESEND_API_KEY` | From [resend.com/api-keys](https://resend.com/api-keys) |
| `RESEND_FROM_EMAIL` | Verified sender, e.g. `AlphaX Studio <mail@alphaxdezignerzstudio.com>` |
| `NEXT_PUBLIC_CALENDLY_URL` | Your real Calendly or Google Calendar booking URL |

5. Click **Deploy**. First URL: `https://your-project.vercel.app`.

Forms work only after `RESEND_API_KEY` is set. The site still works without it (WhatsApp + Calendly CTAs).

## 4. Custom domain

In Vercel: **Project → Settings → Domains → Add** `alphaxdezignerzstudio.com` and `www.alphaxdezignerzstudio.com`.

At your domain registrar, add DNS as Vercel shows (usually):

- `A` → `76.76.21.21` (apex)
- `CNAME` `www` → `cname.vercel-dns.com`

SSL is automatic after DNS propagates (often 5–60 minutes).

## 5. Resend (email forms)

1. Add and verify your domain in Resend.
2. Use that domain in `RESEND_FROM_EMAIL`.
3. Redeploy if you change env vars.

## 6. Post-launch checklist

- [ ] Replace `public/clients/*.png` with real client logos (permission granted).
- [ ] Upload portfolio JPGs to `public/portfolio/images/` (see `PORTFOLIO-FILES.md`).
- [ ] Add your social preview image as `public/og-image.jpg` (1200×630 JPG you provide).
- [ ] Test WhatsApp CTA on mobile.
- [ ] Set `NEXT_PUBLIC_CALENDLY_URL` to your live booking link.
- [ ] **SEO:** Verify site in [Google Search Console](https://search.google.com/search-console), add `GOOGLE_SITE_VERIFICATION` in Vercel env, redeploy.
- [ ] **SEO:** Import site in [Bing Webmaster Tools](https://www.bing.com/webmasters), add `BING_SITE_VERIFICATION` if needed, enable IndexNow (key file is already on the site).
- [ ] **SEO:** Submit sitemap `https://alphaxdezignerzstudio.com/sitemap.xml` in GSC and Bing.
- [ ] **SEO:** After deploy, run `npm run seo:ping` to notify IndexNow.

## Deploy from CLI (optional)

```powershell
npm i -g vercel
cd alphax-dezignerz-studio
vercel login
vercel --prod
```

Follow prompts; add env vars in the Vercel dashboard afterward.
