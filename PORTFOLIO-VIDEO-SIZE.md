# Portfolio videos and GitHub

GitHub **blocks any file over 100 MB**.

## Your issue

`public/portfolio/videos/reel-6.mp4` is **~146 MB** → push fails.

## Fix (choose one)

### A) Deploy now (recommended)

1. Double-click **`FIX-PUSH.bat`**
2. Push succeeds **without** `reel-6.mp4`
3. On the live site, reel 6 uses the demo fallback until you add a smaller file

### B) Compress reel-6 and include it

1. Compress at https://www.freeconvert.com/video-compressor (target **under 95 MB**)
2. Replace `public/portfolio/videos/reel-6.mp4`
3. Remove `public/portfolio/videos/reel-6.mp4` from `.gitignore`
4. Run **`GO-LIVE.bat`** again

### C) Compress all reels (best for speed)

Keep each `reel-X.mp4` **under 20–40 MB** (720p, H.264). Faster site + easy GitHub push.

## After FIX-PUSH

Vercel deploy: https://vercel.com/sales-7733s-projects/alphax-dezignerz-studio-v2/deployments

Live site: https://www.alphaxdezignerzstudio.com
