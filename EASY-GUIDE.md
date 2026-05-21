# Easy guide (non‑coder friendly)

You can do almost everything in **two easy ways**. Pick what feels better.

---

## Way 1 — Easiest: use Cursor chat (recommended)

1. Open the folder **`alphax-dezignerz-studio`** in Cursor.
2. Open **Chat** (not the small inline box — the main chat is fine).
3. Type what you want in normal English, for example:
   - “Change the phone number to +91 XXXXX XXXXX”
   - “Change the hero tagline to: …”
   - “Replace the demo YouTube video with this link: …”
4. When the AI changes files, click **Accept** on the edits.
5. **Publish** (see “Publish changes” below).

You do **not** need to find the right file yourself if you use this way.

---

## Way 2 — Edit a few files yourself (when you know exactly what to change)

Only these files control most of the website words and media:

| What you want to change | Open this file |
|-------------------------|----------------|
| Business name, email, phone, WhatsApp, address, stats text | `src/content/site.ts` |
| Services and prices (₹) | `src/content/services.ts` |
| Portfolio pictures / YouTube buttons | `src/content/portfolio.ts` |
| Homepage pills, FAQ, process steps, reel video | `src/content/experience.ts` |
| Client quotes | `src/content/testimonials.ts` |

**Rule:** change only the text **inside the quote marks** `"like this"`.  
If you delete a comma `,` or a bracket `}` the site can break — when unsure, use **Way 1**.

### Adding your own images (simple)

1. Put image files in: **`public/portfolio/`**  
   Example file: `public/portfolio/my-post.jpg`
2. In `src/content/portfolio.ts`, on one item, add a line like:

```ts
imageSrc: "/portfolio/my-post.jpg",
```

(Keep the comma at the end of the line.)

---

## Publish changes (make the live site update)

**If Vercel is connected to GitHub** (most common):

1. In Cursor, open the **Terminal** at the bottom.
2. Make sure you are inside the project folder (you should see `alphax-dezignerz-studio` in the path).
3. Copy and paste these **three lines**, one block:

```bash
git add .
git commit -m "Update website"
git push
```

4. Wait **1–3 minutes**. Open your Vercel link or your domain — refresh the page (**Ctrl+F5**).

**If `git push` asks for login:** use GitHub’s instructions (browser login or “Personal Access Token”). That is normal on Windows.

**If you did NOT connect GitHub to Vercel:** you must deploy from the Vercel website each time (upload). Easier long‑term: connect GitHub once (see `DEPLOY-BEGINNER.md`).

---

## Quick checks when something looks wrong

| Problem | What to try |
|---------|-------------|
| Site shows old text | Hard refresh: **Ctrl+F5** |
| `git push` error | Copy the **full red message** into Cursor chat and ask for help |
| Contact form email fails | Vercel → **Environment Variables** → `RESEND_API_KEY` set? → **Redeploy** |
| Domain shows old Squarespace page | DNS still points to Squarespace — fix in **Cloudflare** / registrar using **Vercel → Domains** instructions |

---

## One‑sentence summary

**Tell Cursor what to change → Accept edits → run `git add .` → `git commit` → `git push` → wait for Vercel.**

For first‑time deploy from zero, follow **`DEPLOY-BEGINNER.md`**.
