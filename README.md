<div align="center">

# Javas Wallet

**The self-custody companion to Javas Exchange — the stablecoin desk for Hong Kong.**

[![Live preview](https://img.shields.io/badge/preview-javas--wallet.vercel.app-25165b?style=flat-square)](https://javas-wallet.vercel.app)
[![Exchange web](https://img.shields.io/badge/exchange-web-e8585f?style=flat-square)](https://javas-exchange.vercel.app/dashboard.html)
[![Exchange mobile](https://img.shields.io/badge/exchange-mobile-f2c94c?style=flat-square)](https://javas-exchange-mobile.vercel.app)
![Frontend only](https://img.shields.io/badge/scope-frontend%20only-8e8791?style=flat-square)

</div>

---

## ■ Overview

Javas Wallet is a mobile-first wallet app built on the same design system as the Javas Exchange web and mobile apps: ledger-calm, institutional, Javas purple with a single coral accent. It's **frontend only**: every balance, address and transaction is sample data, and nothing is signed or broadcast.

## ■ Features

| Area | What it does |
|---|---|
| **Lock** | 6-digit PIN pad and Face ID button (any 6 digits unlock in preview) |
| **Wallet** | Total balance in HKD / USD / USDT, hide-balance toggle, allocation bar, asset list |
| **Send** | 3-step flow: asset and network → review → 2FA code. Whitelisted addresses only; second approver above HK$ 500,000 |
| **Receive** | Asset and network picker, deposit address, QR code, copy and share |
| **Swap** | Live quote, 0.12% VIP fee, balance checks, quote countdown |
| **Transfer** | Instant, free moves between the wallet and the Javas Exchange spot account |
| **Asset detail** | Holdings, 30-day price line, per-asset activity, deep link to trade |
| **Activity** | Filters by received / sent / swaps / pending, grouped by day, transaction detail sheet |
| **Settings** | Face ID, auto-lock, 2FA, approver, address book, currency, theme, language |

Light and dark themes follow the OS and can be switched in Settings.

## ■ Design system

The wallet uses the exchange's own design files, copied unchanged:

| File | Role |
|---|---|
| `brand.css` | Tokens: colours, type scale, spacing, radii, buttons, inputs |
| `app.css` | Shared components: section markers, tables, tags, list rows |
| `theme.js` | Light / dark / system theme handling |

> Keep these in sync with the exchange web app. Don't fork them; wallet-only styles live in `index.html`.

**Type:** Outfit and JetBrains Mono · **Icons:** Remix Icon · **Palette:** `#25165b` deep · `#e8585f` signal · `#f2c94c` flag

## ■ Run locally

No build step or dependencies.

```bash
python3 -m http.server 5178
```

Then open http://localhost:5178.

## ■ Project structure

```
.
├── index.html   # the whole app: screens, sheets, hash router, sample data
├── brand.css    # shared tokens (from the exchange)
├── app.css      # shared components (from the exchange)
└── theme.js     # theme switcher (from the exchange)
```

## ■ Wiring up the backend

Look for `ponytail:` comments in `index.html`. Sample data sits in `HOLD` (holdings), `TX` (transactions) and `BOOK` (whitelisted addresses). Replace these with API calls. Deposit addresses and QR codes are decorative placeholders and must come from the custody provider.

---

<div align="center"><sub>© Javas Exchange · Hong Kong · Preview build, not for production use</sub></div>
