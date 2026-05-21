# Fix domain DNS — go live on alphaxdezignerzstudio.com

Your site works on Vercel. DNS still points to **Squarespace** (old site).

## Copy these records into Squarespace / Google Domains DNS

| Type | Host / Name | Value |
|------|-------------|--------|
| **CNAME** | `www` | `6b0cbdfca164993d.vercel-dns-017.com` |
| **A** | `@` | `216.198.79.1` |

## Delete these OLD records (Squarespace)

| Type | Host | Old value (remove) |
|------|------|---------------------|
| CNAME | `www` | `ext-sq.squarespace.com` |
| A | `@` | `198.49.23.144`, `198.185.159.144`, `198.185.159.145`, `198.49.23.145` |

## Where to click (Squarespace)

1. https://account.squarespace.com/domains
2. Click **alphaxdezignerzstudio.com**
3. **DNS Settings** or **DNS records**
4. Edit / delete old rows, add new rows above
5. Save

## After saving

1. Wait 15–60 minutes
2. Vercel → Project → **Settings → Domains** → **Refresh**
3. Status should become **Valid Configuration**
4. Open https://www.alphaxdezignerzstudio.com

## Already live (no custom domain yet)

https://alphax-dezignerz-studio-v2.vercel.app
