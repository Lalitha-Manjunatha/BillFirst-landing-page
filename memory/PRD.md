# BillFirst — Sona Landing Page PRD

## Original problem statement
"well i have given a project to make a landing webpage so make it with given guidelines which actually attracts people and use the same video of sona money coach okay"
User supplied: BillFirst-Sona-Brand-Guidelines.md + BillFirst_Sona_Coin_Sprite.mp4.
User choices: full marketing page (hero, features, pricing, FAQ, footer); sections = Features + How it works + Testimonials + FAQ + Footer; waitlist emails saved to DB with success toast. Design bar: Awwwards-level, kinetic hero with masked line reveal, numbered manifesto chapters, slow editorial marquee, framer-motion reveals, lenis smooth scroll, parallax hero.

## Architecture
- Frontend: React (CRA/craco), Tailwind, framer-motion 11, lenis, sonner, lucide-react. Components in /app/frontend/src/components/*.jsx.
- Backend: FastAPI (/app/backend/server.py), routes under /api. MongoDB via MONGO_URL/DB_NAME env.
- Assets: /app/frontend/public/assets/sona-coin-sprite.mp4 (H.264, brand video) + sona-poster.jpg (extracted poster frame).
- Brand tokens mapped in tailwind.config.js + index.css (Space Grotesk display, Plus Jakarta Sans body, tabular lining numerals, glass utilities, grain overlay).

## User personas
- Young Indian professional juggling EMIs/bills who hates spreadsheets and shame-based finance apps.
- Design-conscious visitor evaluating the brand's craft.

## Core requirements (static)
- Dark cinematic palette (#120802 base, yellow→orange glow), no pure black/white fills, no green "good" signals.
- Sona video loop in hero; Glow Meter as canonical component; glass panels with tint overlay; cheeky coach-not-judge voice.
- Waitlist capture persisted to MongoDB with duplicate handling + toast feedback.

## Implemented (2026-08-17)
- Kinetic hero: masked line-by-line headline reveal, Sona video in clipped spotlight frame with glass COIN SPRITE card + GLOW 82 meter, parallax on scroll, email waitlist form.
- Slow editorial marquee strip (brand statements).
- Bento features grid (AI coach, Glow Meter, bill radar, confession call, celebrations, stats).
- Numbered manifesto chapters 01–03 (how it works) with alternating layout.
- Testimonials (3 glass cards), Pricing (Chillar ₹0 / Sona Plus ₹149 featured / Khazana ₹349), FAQ accordion, footer with giant outlined wordmark + second waitlist form.
- Backend: POST /api/waitlist (EmailStr validation, lowercase dedupe), GET /api/waitlist/count.
- Verified: curl join/duplicate/count; screenshots of hero, features, manifesto, pricing, FAQ open state, footer; end-to-end form → toast test passed. Video paused in headless test browser only (Playwright lacks H.264) — poster frame covers it; plays in real browsers.

## Backlog / next tasks
- P0: none blocking.
- P1: real invite emails on waitlist join (Resend); live waitlist counter on hero; mobile nav menu.
- P2: Sona state demos on page (over-limit crawl video), OG/meta image, i18n (Hindi), blog/changelog section.

## Test credentials
None — no auth on this app.
