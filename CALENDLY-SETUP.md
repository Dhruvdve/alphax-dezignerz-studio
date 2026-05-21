# Connect your Calendly account

The site button **"Book a 30-min Discovery Call"** uses your real Calendly link when you set:

`NEXT_PUBLIC_CALENDLY_URL`

Until then, it opens **WhatsApp** (so visitors never see a 404).

---

## Step 1 — Get your link from Calendly

1. Log in: https://calendly.com/login  
2. Left menu → **Event types**  
3. Click your discovery call event (or **+ Create** → 15 minutes, e.g. "15-min Discovery Call")  
4. Click the event → **Share** (or ⋯ menu → Copy link)  
5. Copy the full URL. It looks like:

   ```
   https://calendly.com/YOUR-USERNAME/YOUR-EVENT-SLUG
   ```

   Example shapes (yours will differ):

   - `https://calendly.com/jane-doe/15min`
   - `https://calendly.com/acme-travel/discovery-call`

6. Open that URL in a **new browser tab** — it must show your booking page, **not** "Page not found".

---

## Step 2 — Local testing (your PC)

Create a file:

`C:\Users\intel\alphax-dezignerz-studio\.env.local`

Paste (use your real URL):

```env
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/YOUR-USERNAME/YOUR-EVENT-SLUG
```

Restart dev server:

```powershell
cd C:\Users\intel\alphax-dezignerz-studio
npm run dev
```

Click **Book a 15-min Discovery Call** → your Calendly page should open.

---

## Step 3 — Live site (Vercel)

1. https://vercel.com/sales-7733s-projects/alphax-dezignerz-studio-v2/settings/environment-variables  
2. **Add** → Name: `NEXT_PUBLIC_CALENDLY_URL`  
3. Value: same URL as above  
4. Environments: Production (and Preview if you want)  
5. **Save** → **Deployments** → **Redeploy** latest  

After redeploy, test on https://www.alphaxdezignerzstudio.com

---

## Common mistakes

| Problem | Fix |
|---------|-----|
| 404 on Calendly | Event deleted or wrong slug — copy link again from Event types |
| Still opens WhatsApp | Env var not set, or old broken URL still in Vercel — redeploy after save |
| `alphax-dezignerz/15min-discovery` | That path does not exist — use the link from **your** account only |

---

## Paste your link to the agent

Send your full Calendly event URL in chat and ask to wire it into the project + Vercel instructions.
