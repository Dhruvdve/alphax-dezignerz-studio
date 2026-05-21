# Portfolio files — what to add and exact names

Put files inside your project folder:

`C:\Users\intel\alphax-dezignerz-studio\public\portfolio\`

The website loads them automatically when the **base name matches exactly** (case-sensitive on some hosts).

**JPG or PNG:** You can mix formats. Use the same base name — e.g. `sm-post-1.jpg` *or* `sm-post-1.png` (not both needed). The site tries `.jpg` first, then `.png`.

---

## Export sizes (before you rename)

| Type | Pixel size | Ratio | Format |
|------|------------|-------|--------|
| Social post, carousel, flyer | **1080 × 1440** | 3:4 | JPG or WEBP |
| Reel / UGC ad | **1080 × 1920** | 9:16 | **MP4** (H.264) |
| Logo / brand board | **1080 × 1080** | 1:1 | JPG or PNG |
| Homepage showreel | **1080 × 1920** | 9:16 | **MP4** |

**Videos:** MP4 only (not YouTube links). Keep files under ~30 MB each for fast loading if possible.

**Images:** JPG or PNG (mix is fine). JPG is smaller for photos; PNG is best for logos with transparency. WEBP is not auto-detected yet.

---

## Folder 1 — Images (thumbnails / posters)

**Path:** `public/portfolio/images/`

### Static content — 10 posts (1080×1440)

| # | Save file as |
|---|----------------|
| 1 | `sm-post-1.jpg` |
| 2 | `sm-post-2.jpg` |
| 3 | `sm-post-3.jpg` |
| 4 | `sm-post-4.jpg` |
| 5 | `sm-post-5.jpg` |
| 6 | `sm-post-6.jpg` |
| 7 | `sm-post-7.jpg` |
| 8 | `sm-post-8.jpg` |
| 9 | `sm-post-9.jpg` |
| 10 | `sm-post-10.jpg` |

### Educational guides — 8 carousels (1080×1440 — use cover slide)

| # | Save file as |
|---|----------------|
| 1 | `sm-carousel-1.jpg` |
| 2 | `sm-carousel-2.jpg` |
| 3 | `sm-carousel-3.jpg` |
| 4 | `sm-carousel-4.jpg` |
| 5 | `sm-carousel-5.jpg` |
| 6 | `sm-carousel-6.jpg` |
| 7 | `sm-carousel-7.jpg` |
| 8 | `sm-carousel-8.jpg` |

### Identity design — 6 logos (1080×1080)

**Two images per logo:** normal view + hover view (e.g. logo mark vs. brand board / mockup).

| # | Default (not hovering) | On hover |
|---|------------------------|----------|
| 1 | `logo-1.jpg` | `logo-1-hover.jpg` |
| 2 | `logo-2.jpg` | `logo-2-hover.jpg` |
| 3 | `logo-3.jpg` | `logo-3-hover.jpg` |
| 4 | `logo-4.jpg` | `logo-4-hover.jpg` |
| 5 | `logo-5.jpg` | `logo-5-hover.jpg` |
| 6 | `logo-6.jpg` | `logo-6-hover.jpg` |

### Marketing assets — 10 flyers (1080×1440)

| # | Save file as |
|---|----------------|
| 1 | `flyer-1.jpg` |
| 2 | `flyer-2.jpg` |
| 3 | `flyer-3.jpg` |
| 4 | `flyer-4.jpg` |
| 5 | `flyer-5.jpg` |
| 6 | `flyer-6.jpg` |
| 7 | `flyer-7.jpg` |
| 8 | `flyer-8.jpg` |
| 9 | `flyer-9.jpg` |
| 10 | `flyer-10.jpg` |

### Reel posters — 12 thumbnails (1080×1920 still frame)

Used as the cover image before play. Same size as reel frame.

| # | Save file as |
|---|----------------|
| 1 | `reel-1.jpg` |
| 2 | `reel-2.jpg` |
| 3 | `reel-3.jpg` |
| 4 | `reel-4.jpg` |
| 5 | `reel-5.jpg` |
| 6 | `reel-6.jpg` |
| 7 | `reel-7.jpg` |
| 8 | `reel-8.jpg` |
| 9 | `reel-9.jpg` |
| 10 | `reel-10.jpg` |
| 11 | `reel-11.jpg` |
| 12 | `reel-12.jpg` |

**Images subtotal: 52 files** in `public/portfolio/images/` (46 + 6 logo hover images)

---

## Folder 3 — Logo case study pages (process / rejected / final)

When someone **clicks a logo** on the portfolio, they open a dedicated page, e.g.  
`/portfolio/logo/logo-1`

**Path:** `public/portfolio/logos/{logo-id}/`

Replace `{logo-id}` with `logo-1` … `logo-6`.

| File | What to show on the case study page |
|------|-------------------------------------|
| `reject-1.jpg` or `.png` | First rejected concept |
| `reject-2.jpg` or `.png` | Second rejected concept |
| `reject-3.jpg` or `.png` | Third (only if you use 3 rejects — logo-2, 4, 5, 6 use 2) |
| `final.jpg` or `.png` | Approved logo mark |
| `applied.jpg` or `.png` | Brand in use (mockup / board — can match grid hover) |

**Example for Tripsdoc (logo 1):**

```
public/portfolio/logos/logo-1/
  reject-1.jpg
  reject-2.jpg
  reject-3.jpg
  final.jpg
  applied.jpg
```

**Story text** (what each concept meant, why rejected, final meaning): edit  
`src/content/logo-case-studies.ts`

**Sizes:** 1080×1080 for rejects and final; applied can be **1080×1350** or wider mockup.

| Logo ID | Case study URL |
|---------|----------------|
| logo-1 | `/portfolio/logo/logo-1` |
| logo-2 | `/portfolio/logo/logo-2` |
| logo-3 | `/portfolio/logo/logo-3` |
| logo-4 | `/portfolio/logo/logo-4` |
| logo-5 | `/portfolio/logo/logo-5` |
| logo-6 | `/portfolio/logo/logo-6` |

---

## Folder 2 — Videos (play on website)

**Path:** `public/portfolio/videos/`

| Purpose | Save file as |
|---------|----------------|
| Homepage “Motion & reels” player | `showreel.mp4` |
| Portfolio reel 1 | `reel-1.mp4` |
| Portfolio reel 2 | `reel-2.mp4` |
| Portfolio reel 3 | `reel-3.mp4` |
| Portfolio reel 4 | `reel-4.mp4` |
| Portfolio reel 5 | `reel-5.mp4` |
| Portfolio reel 6 | `reel-6.mp4` |
| Portfolio reel 7 | `reel-7.mp4` |
| Portfolio reel 8 | `reel-8.mp4` |
| Portfolio reel 9 | `reel-9.mp4` |
| Portfolio reel 10 | `reel-10.mp4` |
| Portfolio reel 11 | `reel-11.mp4` |
| Portfolio reel 12 | `reel-12.mp4` |

**Videos subtotal: 13 MP4 files** in `public/portfolio/videos/`

---

## Quick start (minimum to look “real”)

If you are not ready with all 59 files, add these first:

1. `videos/showreel.mp4` — homepage reel  
2. `videos/reel-1.mp4` … `reel-3.mp4` — three portfolio reels  
3. `images/sm-post-1.jpg` … `sm-post-3.jpg` — three posts  
4. `images/logo-1.jpg` — one logo  

The rest can use placeholders until you upload more.

---

## After copying files

1. Open terminal in the project folder:
   ```powershell
   cd C:\Users\intel\alphax-dezignerz-studio
   ```
2. Restart the site:
   ```powershell
   npm run dev
   ```
3. Open http://localhost:3000/portfolio and hard-refresh (Ctrl+Shift+R).

---

## Optional later (not required for portfolio grid)

| File | Where | Use |
|------|--------|-----|
| `favicon.ico` | `public/` | Browser tab icon |
| `og-image.jpg` | `public/` | Link preview when sharing site |
| Client names | `src/content/portfolio.ts` | Change “Tripsdoc”, etc. to your real client names |

---

## Total checklist

| Category | Count |
|----------|-------|
| Post images | 10 |
| Carousel images | 8 |
| Logo images (default) | 6 |
| Logo images (hover) | 6 |
| Flyer images | 10 |
| Reel poster images | 12 |
| Reel + showreel videos | 13 |
| **Total** | **65 files** |

Names must match **exactly** (e.g. `sm-post-1.jpg` not `sm post 1.jpg`).
