# Go live RIGHT NOW (with what is already on GitHub)

Your repo exists: **https://github.com/Dhruvdve/alphax-dezignerz-studio**

Last push: today. The working Next.js app is inside the **subfolder** `alphax-dezignerz-studio/` (not the repo root).

## Step 1 — Import on Vercel

1. Open [vercel.com/new](https://vercel.com/new)
2. Import **Dhruvdve/alphax-dezignerz-studio**
3. **Important:** set **Root Directory** → `alphax-dezignerz-studio`  
   (Click Edit next to Root Directory, type: `alphax-dezignerz-studio`)
4. Framework: Next.js (auto)
5. Add env vars (optional for launch):
   - `NEXT_PUBLIC_CALENDLY_URL` = your booking link
   - `RESEND_API_KEY` = when you want forms to work
6. Click **Deploy**

Your site URL will be something like: `https://alphax-dezignerz-studio.vercel.app`

## Step 2 — Custom domain (optional)

Vercel → Project → **Settings → Domains** → add `alphaxdezignerzstudio.com`

## What is NOT on GitHub yet

Your **latest** Cursor changes (FAQ fix, 4 testimonials, portfolio thumbnails, booking button, etc.) are only on your PC until you run `PUSH-TO-GITHUB.bat` from the folder that contains `src/`.

After push, Vercel redeploys automatically in ~2 minutes.

## If build fails on Vercel

- Confirm **Root Directory** = `alphax-dezignerz-studio`
- Open the failed deployment log and copy the red error into chat
