# Your Vercel site is OLD — fix in 5 minutes

**Why:** Vercel builds from GitHub. GitHub still has an **old upload**. Your **new** site is only on your PC (`C:\Users\intel\alphax-dezignerz-studio`).

---

## Fastest fix (double-click)

1. Go to folder: `C:\Users\intel\alphax-dezignerz-studio`
2. Double-click **`UPLOAD-NEW-SITE.bat`**
3. Sign in to GitHub if asked (browser or token)
4. When it says **SUCCESS**, go to Vercel (below)

---

## Then fix Vercel (important)

1. [vercel.com/dashboard](https://vercel.com/dashboard) → your **alphax-dezignerz-studio** project
2. **Settings** → **General** → **Root Directory**
3. Set to **`.`** (empty / repository root) — **NOT** `alphax-dezignerz-studio` subfolder
4. Save
5. **Deployments** → ⋮ on latest → **Redeploy**

Wait 2–3 minutes, open the site with **Ctrl+F5** (hard refresh).

---

## How to know the NEW site is live

You should see:

- FAQ: **all 4 answers visible** (not collapsed)
- Testimonials: **4 cards** (Predestinations, Tripsdoc, Holiday Enroute, Book and Explore)
- Hero: **Book a 15-min Discovery Call** button
- Sections: **How we work**, **Why AlphaX vs alternatives**

---

## If `.bat` push fails — upload on GitHub website

1. Open [github.com/Dhruvdve/alphax-dezignerz-studio](https://github.com/Dhruvdve/alphax-dezignerz-studio)
2. Delete the nested folder **`alphax-dezignerz-studio`** (old duplicate) if it exists
3. **Add file → Upload files**
4. From your PC folder `C:\Users\intel\alphax-dezignerz-studio`, drag:
   - `src` folder
   - `public` folder
   - `package.json`, `package-lock.json`
   - `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`, etc.
5. **Do NOT upload** `node_modules` or `.next`
6. Commit → Vercel redeploys automatically

---

## Still old after redeploy?

- Hard refresh: **Ctrl + Shift + R**
- Try incognito window
- Check Vercel deployment commit message mentions "Deploy new site"
