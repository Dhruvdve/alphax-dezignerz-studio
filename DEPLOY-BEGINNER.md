# Deploy this website (beginner checklist)

You do not need to be a developer. Follow the steps **in order**. Each step uses free tools.

If anything fails, copy the **red error text** and ask in chat.

---

## Step 0 — Install two programs (one time)

1. **Node.js** (runs the website on your PC):  
   https://nodejs.org — download the **LTS** version, install with defaults.

2. **Git** (uploads code to GitHub):  
   https://git-scm.com/download/win — install with defaults.

Close and reopen **Cursor** (or your terminal) after installing.

---

## Step 1 — Open the project folder

In Cursor: **File → Open Folder** → select the folder:

`alphax-dezignerz-studio`

(This folder contains `package.json`.)

---

## Step 2 — Test the site on your computer

Open the **terminal** in Cursor (`` Ctrl+` ``) and paste:

```bash
npm install
npm run dev
```

Then open **http://localhost:3000** in your browser.

- To stop the server: click the terminal and press **Ctrl + C**.

To check that it will build for production:

```bash
npm run build
```

If `npm run build` shows **Error**, copy the full error before deploying.

---

## Step 3 — Put the code on GitHub (needed for Vercel)

1. Create a free GitHub account: https://github.com/signup  
2. Click **New repository** (any name, e.g. `alphax-website`).  
3. Keep it **Private** or **Public** (your choice). **Do not** add README / .gitignore (repo can be empty).

Copy the repository URL GitHub shows (looks like `https://github.com/YOURNAME/alphax-website.git`).

In the terminal **inside** `alphax-dezignerz-studio`, paste (replace the URL with yours):

```bash
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/YOURNAME/alphax-website.git
git push -u origin main
```

If GitHub asks you to log in, use the **browser login** or **personal access token** GitHub suggests (this is normal on Windows).

---

## Step 4 — Deploy on Vercel (hosting)

1. Go to https://vercel.com and sign up with **GitHub** (easiest).  
2. **Add New… → Project** → **Import** your `alphax-website` repository.  
3. Vercel should detect **Next.js**. Click **Deploy** (defaults are OK).

After ~1–2 minutes you get a link like `https://alphax-website-xxx.vercel.app` — that is your **live site**.

---

## Step 5 — Connect your domain `alphaxdezignerzstudio.com`

1. In Vercel: your project → **Settings → Domains**.  
2. Add: `alphaxdezignerzstudio.com` (and optionally `www.alphaxdezignerzstudio.com`).  
3. Vercel will show **DNS records** (often **A** and **CNAME**).

Go to the website where you **bought the domain** (GoDaddy, Namecheap, Hostinger, Google Domains, etc.):

- Find **DNS** / **Manage DNS** / **Advanced DNS**
- Add exactly the records Vercel shows
- Wait **15 minutes to 48 hours** for DNS to update (often under 1 hour)

When it works, `https://alphaxdezignerzstudio.com` opens your Vercel site.

---

## Step 6 — Contact form email (Resend) — optional but recommended

Without this step, the form may show **“Email is not configured”** — WhatsApp still works.

1. Create account: https://resend.com  
2. Create an **API Key**.  
3. In Vercel: **Project → Settings → Environment Variables** add:

| Name | Value |
|------|--------|
| `RESEND_API_KEY` | (paste your API key) |
| `RESEND_FROM_EMAIL` | A sender Resend approves (see Resend docs). In production you will use your own domain email after domain verification in Resend. |

4. Click **Redeploy** (Deployments → … on latest → Redeploy).

---

## Quick “who does what”

| Task | Who does it |
|------|-------------|
| Install Node/Git | You (one time) |
| `npm install` / `npm run dev` | You (on your PC) |
| Create GitHub repo + `git push` | You (one time) |
| Click Deploy on Vercel | You (few clicks) |
| Add DNS records at domain seller | You (copy/paste from Vercel) |
| Resend API key in Vercel | You |

Nobody else should know your **Vercel / GitHub / domain / Resend passwords**. If someone offers to “do it all” for you, be careful — only use someone you trust with account access.

---

## After it is live

- Change text and prices in `src/content/` files.  
- Replace portfolio placeholders in `src/content/portfolio.ts` and add images under `public/portfolio/` when ready.
