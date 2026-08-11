# Design refresh — change log

Ports the current **Claude Design** handoff (project `7a935dff…`) into the live
Next.js site. Everything below is what differs from `main` (the pre-redesign site).

## Background / context

- Earlier in 2026 a navy **+ champagne-gold** redesign was merged (PR #12) and then
  **reverted** (PR #14, `c984e88`), restoring the pre-redesign site that `main` is on today.
- The design team kept iterating in Claude Design and produced a **new, evolved
  design**: navy `#0A278D` + royal-blue `#2E74E0` + white, Roboto Condensed uppercase
  headlines. **The gold is gone.** New video-poster hero, spotlight grid, restructured
  sections, and a global "get the book" modal.
- This branch ports that new design **from the `.dc.html` source, 1:1**. It is opened as a
  **PR for review** (not merged), given the prior revert.

## Design system

| | Before (pre-redesign) | After (this PR) |
|---|---|---|
| Palette | navy `#0A278D` + Tailwind orange accents | navy `#0A278D` + royal-blue `#2E74E0` + on-navy `#8fa6ff`; **no gold** |
| Type | Roboto / Roboto Condensed / Poppins via `next/font` | same families via **Google Fonts `<link>`** (the design references literal family names); Copperplate stays a system fallback for the "Current Capital" lockup |
| Styling | Tailwind utilities + **DaisyUI** | **inline styles + one collected stylesheet** (`src/styles/design.css`) keyed on the design's `data-*` hooks; Tailwind kept for layout shell only; **DaisyUI plugin removed** |
| Fidelity approach | — | components carry the design's inline `style` strings verbatim via a `css()` helper (`src/components/site/dc.tsx`) so future re-syncs stay diffable |

## Routing

- **Removed** `/book` and `/portfolio` (not in the new design). Both now 404. The book is
  now surfaced through a global **BookModal** instead of a dedicated page.
- **Kept existing URLs** (restyled in place, no redirects needed): `/`, `/about`,
  `/media/news`, `/media/podcasts`, `/contact`, `/free-chapter`.
- Removed the already-off `/_workshop` and disabled `/calculators` routes (they only
  referenced now-deleted components).

## Global chrome (new, in `src/components/site/`)

- **Banner** — social bar (TikTok / Instagram / YouTube / LinkedIn).
- **SiteNav** — sticky nav (Home / About / News Articles / Podcasts / Contact + "Order The
  Book") with an animated mobile hamburger drawer. No Book/Portfolio links.
- **SiteFooter** — MAIN / MEDIA / GET IN TOUCH columns. "Book" opens the modal.
- **SectionHeader** — gradient page-title band.
- **BookModal** — global modal opened by any `data-book-modal` element (nav CTA, spotlight
  tile, hero/book buttons, footer "Book"). Purchase → BookBaby; "Download a Free Chapter" →
  `/free-chapter`. Escape / backdrop / ✕ to close, with body-scroll lock.
- **Shell** — root client wrapper (route-keyed remount + renders BookModal once).
- **PageShell** — Banner + SiteNav + content + SiteFooter wrapper.

## Per-page changes

- **Home** (`/`) — new **video-poster hero** ("Why did I write my book?" with play/pause,
  `<video>`/embed, scroll-away pause), **SpotlightGrid** (4 tiles around a center figure),
  Book feature, Current Capital, **Industry Recognition** (CoStar Power Broker 2025), 3
  About-Todd bio blocks, Podcast Appearances (→ `/media/podcasts`), Popular Articles (→
  `/media/news`).
- **About** (`/about`) — hero band + "Todd's Story" with a 7-milestone vertical timeline
  (1972 → 2022).
- **Podcasts** (`/media/podcasts`) — "Featured Appearances" (10 video cards) + "Audio
  Appearances" (4 list rows).
- **News** (`/media/news`) — 18 article cards (dates/authors), local + hotlinked thumbnails.
- **Contact** (`/contact`) — redesigned "Get in Touch" form. Still posts to the existing
  **Netlify** stub (`/forms/__contact.html`); adds an inline success state + honeypot.
- **Free Chapter** (`/free-chapter`) — redesigned standalone page. Still subscribes to the
  same **ConvertKit** form (`6146955`); now shows an inline success message instead of
  redirecting to the removed confirmation modal.
- **404** — rebuilt on the new chrome.

## Components removed

All old flat components under `src/components/*.js` (Navigation, Banner, Footer, Hero,
HeroVideo, Section, SectionHeader, BookSection, Article/ArticleSection, PodcastSection,
ContactSection, FreeChapterCTA, SignUpModal, Order, Reviews, Portfolio, Header, Dropdown,
Video, WorkshopCTA, AnnualCashFlow, CashOnCashReturn, BarChart, PieChart) and
`RootLayout.jsx`. Removed dead `src/styles/styles.css` (Swiper styles for the deleted
Portfolio). `SignUpModal`/`?cta=` confirmation flow is gone (replaced by inline form states).

## Assets

Added the design's image set to `public/images/` (provided by the site owner): hero art
(`hero-books-topdown`, `hero-video-poster`, `hero-books-wood`), spotlight tiles
(`tile-*`, `todd-spotlight`), `todds_building.jpg`, and the `podcasts/` (13) and `news/` (5)
thumbnail sets. Brand SVGs (logo, social, blobs) were refreshed to the design's copies.

## Known follow-ups / notes

- **DaisyUI dependency** left in `package.json` (dormant — plugin disabled) to avoid a
  lockfile mismatch on deploy; safe to prune in a follow-up `npm uninstall daisyui`.
- **Third-party hotlinks** kept as the design authored them: the About-bio background photos
  use `images.pexels.com`, the About hero uses a Wikimedia USF image, and several News/Home
  thumbnails hotlink publisher CDNs (TheRealDeal, Bisnow, etc.). Consider self-hosting later.
- **Images** use plain `<img>` (as in the design) rather than `next/image` — build emits
  non-blocking LCP warnings only.
- **Free Chapter** shipped desktop-only in the handoff; added minimal responsive stacking so
  mobile isn't broken.
