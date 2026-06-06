# High Dive Rum Shelf Guide

A mobile-first, QR-accessible single-page web guide to every bottle on the rum shelf at
**High Dive · 1400 N. 3rd Street · Harrisburg, PA 17102**.

---

## Quick Start (Local Preview)

Open `index.html` directly in any modern browser — no server required.

```
File > Open File > index.html
```

Or from the terminal:

```bash
open index.html           # macOS
start index.html          # Windows
xdg-open index.html       # Linux
```

The site uses hash-based navigation (`#landing`, `#category/slug`, `#rum/slug`),
so all routing works without a web server.

> **Note:** The custom fonts (Abril Fatface + Raleway) load from Google Fonts CDN
> and require an internet connection to display. If viewed offline, the site falls back
> to Georgia and system-ui — fully readable, just without the display fonts.

---

## File Map

| File | Purpose |
|---|---|
| `index.html` | HTML shell — header, `<main id="app">`, footer, back-to-top button |
| `styles.css` | All visual design — palette, typography, layout, responsive breakpoints |
| `script.js` | Router, page renderers (landing/category/rum), search/filter, back-to-top |
| `data.js` | All 44 rums and 7 categories as the `RUM_DATA` constant |
| `README.md` | This file |

---

## Navigation Structure

The app is a hash-based SPA — no page reloads, no server needed.

| URL hash | View rendered |
|---|---|
| `#landing` or `#` | Landing page: hero, category grid, searchable rum list |
| `#category/<slug>` | Category page: description + rum cards for that category |
| `#rum/<slug>` | Rum detail page: full description, flavor tags, best-for, related rums |

Example slugs:

- `#category/jamaican-funk-pot-still-rum`
- `#rum/smith-cross-jamaica`
- `#rum/goslings-black-seal`

---

## Content Summary

**44 bottles across 7 categories:**

| Category | Bottles | Slug |
|---|---|---|
| White & Light Mixing Rum | 6 | `white-light-mixing-rum` |
| Spanish-Style Aged Rum | 6 | `spanish-style-aged-rum` |
| Jamaican Funk & Pot-Still Rum | 7 | `jamaican-funk-pot-still-rum` |
| Demerara / Guyana Rum | 5 | `demerara-guyana-rum` |
| Dark, Navy & Overproof Blends | 7 | `dark-navy-overproof-blends` |
| Cane-Juice Spirits | 9 | `cane-juice-spirits` |
| Flavored, Spiced & Rum Liqueurs | 4 | `flavored-spiced-rum-liqueurs` |
| **Total** | **44** | |

---

## QR Code / Deployment

To deploy for QR code access:

1. Upload all four files to any static host — GitHub Pages, Netlify, Cloudflare Pages, or
   a subdirectory on an existing server.
2. Point the QR code to the root URL (e.g. `https://highdive717.com/rum-guide/`).
3. The `#landing` hash is the default view.

For GitHub Pages:

```bash
gh repo create high-dive-rum-guide --public
git init && git add . && git commit -m "Initial build"
git push -u origin main
# Enable Pages under Settings > Pages > Deploy from main branch
```

---

## Validation Checklist

- [ ] All 44 rums present in `RUM_DATA.rums` (check: `RUM_DATA.rums.length === 44`)
- [ ] All 7 categories present in `RUM_DATA.categories` (check: `RUM_DATA.categories.length === 7`)
- [ ] Category slug totals match (6+6+7+5+7+9+4 = 44)
- [ ] Every rum has a unique slug
- [ ] Every category page loads via `#category/<slug>`
- [ ] Every rum detail page loads via `#rum/<slug>`
- [ ] Back navigation (breadcrumb and ← button) returns to correct parent
- [ ] Search by name, flavor tag, and origin works in real-time
- [ ] Category filter dropdown correctly isolates each category
- [ ] Clearing search restores all 44 items
- [ ] Back-to-top button appears after scrolling and smoothly returns to top
- [ ] Mobile layout: single-column on narrow viewports
- [ ] Desktop layout: 3-column category grid, 2-column rum detail
- [ ] Fonts fall back gracefully when offline
- [ ] Footer shows correct bar address, phone, hours

---

## Color Palette Reference

| Variable | Hex | Usage |
|---|---|---|
| `--green-deep` | `#0F362E` | Hero backgrounds, header |
| `--accent` | `#FE7A15` | CTA buttons, links, category borders |
| `--cream` | `#F1EADC` | Page background, card backgrounds |
| `--navy` | `#35465C` | Footer |
| `--cat-white` | `#1A85A0` | White & Light Mixing |
| `--cat-spanish` | `#B87333` | Spanish-Style Aged |
| `--cat-jamaican` | `#2E7D32` | Jamaican Funk |
| `--cat-demerara` | `#7B5E3A` | Demerara / Guyana |
| `--cat-dark` | `#455A64` | Dark, Navy & Overproof |
| `--cat-cane` | `#558B2F` | Cane-Juice Spirits |
| `--cat-flavored` | `#AD1457` | Flavored, Spiced & Liqueurs |

---

*Built for High Dive, Camp Hill / Harrisburg PA · cpaweatherlab.com toolchain*
