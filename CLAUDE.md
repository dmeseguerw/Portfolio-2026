# CLAUDE.md

This file gives Claude Code persistent context about this project. Keep it updated as decisions change — it's read at the start of every session.

## Project Overview

A personal portfolio web app showcasing experience, projects, hobbies, and blog writing. Blog content is **not stored in this repo** — it's fetched live from Medium.

- **Owner:** Daniel Meseguer Wong
- **Root folder:** `C:\Users\danie\Documents\Github\Portfolio-2026`
- **Status:** Built — foundation, i18n, dark mode, all pages, and real content are in place. Not yet deployed.

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript, Turbopack by default)
- **Styling:** Tailwind CSS v4 (CSS-first config via `@theme` in `globals.css`, no `tailwind.config.ts`)
- **Deployment target:** Vercel
- **Package manager:** npm
- **Content source for blog:** Medium (via RSS feed, not a local CMS) — `@dmeseguerw1599`
- **Analytics:** Vercel Analytics (`@vercel/analytics`)
- **i18n:** English/Spanish via `app/[locale]/...` routing, no library (see i18n section below)
- **Dark mode:** `next-themes`, class-based, toggle in nav
- **Content format:** Projects are Markdown with frontmatter (`gray-matter` + `remark`); experience/education/skills/hobbies/home copy are typed `.ts` files under `/content` with `{ en, es }` fields for prose
- **Visual design:** Sourced from a claude.ai/design mockup (`portfolio-design` project) — colors, typography (Fraunces + Inter), and layout patterns translated into Tailwind tokens

### New dependencies (added beyond create-next-app defaults)

- `gray-matter`, `remark`, `remark-html` — parse Markdown project files with frontmatter
- `rss-parser` — parse the Medium RSS feed
- `clsx`, `tailwind-merge` — the `cn()` helper
- `next-themes` — SSR-safe dark mode (avoids flash-of-wrong-theme, handles persistence)
- `@vercel/analytics` — Vercel Analytics
- `resend` — sends contact form submissions as email (server-side, from `app/api/contact/route.ts`); owner-chosen provider with a usable free tier

## Folder Structure (actual)

```
/app
  page.tsx?                    → none — proxy.ts redirects "/" to "/{locale}" instead
  /[locale]
    layout.tsx                 → true root layout: <html lang>, ThemeProvider, Nav, Footer, <Analytics/>
    globals.css                → Tailwind v4 tokens (colors, fonts) + dark mode variant
    /(site)
      page.tsx                 → Home
      /about/page.tsx
      /projects/page.tsx
      /projects/[slug]/page.tsx
      /hobbies/page.tsx
      /blog/page.tsx           → excerpt cards pulled from Medium, each links out to medium.com
      /contact/page.tsx        → contact form, POSTs to /api/contact
  /api
    /contact/route.ts          → Route Handler: validates input, honeypot spam check, sends email via Resend
/components
  /ui                          → Button, Card, Badge, Container, ThemeToggle, LocaleSwitcher
  /layout                      → Nav.tsx, Footer.tsx
  /sections                    → ProjectCard, BlogCard, ContactForm
  /providers                   → ThemeProvider.tsx (wraps next-themes)
/content
  /projects/*.md               → locale-suffixed, e.g. hrv-digital-twin.en.md / .es.md
  home.ts, about.ts, experience.ts, education.ts, skills.ts,
  activities.ts, hobbies.ts, side-projects.ts
                                → typed data with { en, es } fields for prose
/lib
  markdown.ts                  → gray-matter + remark parsing: getAllProjects(locale), getProjectBySlug(slug, locale)
  medium.ts                    → getMediumPosts(): Promise<BlogPost[]>, fails soft to []
  i18n.ts                      → Locale type, locales list, getDictionary(locale)
  utils.ts                     → cn() via clsx + tailwind-merge
/dictionaries
  en.json, es.json             → short UI microcopy only (nav, buttons, labels) — NOT prose content
proxy.ts                       → Next.js 16 renamed middleware.ts → proxy.ts; redirects unprefixed paths to /en or /es
```

No `app/api/medium/route.ts` — the Blog page calls `lib/medium.ts` directly as a Server Component with `export const revalidate = 3600`.

## Conventions

- **Components:** Server Components by default. Only mark `"use client"` when the component needs interactivity, state, or browser APIs (ThemeToggle, LocaleSwitcher, ContactForm).
- **Naming:** `kebab-case` for route folders/files, `PascalCase` for component files and exports.
- **Styling:** Tailwind utility classes in JSX; design tokens are CSS variables (`--background`, `--foreground`, `--primary`, `--accent`, `--secondary`, `--border`, `--muted`, `--surface`) defined in `app/[locale]/globals.css` and exposed to Tailwind via `@theme inline`. Use a `cn()` helper (clsx + tailwind-merge) for conditional classes.
- **Data:** Structured content lives in typed `.ts` files under `/content` (long-form prose forked `{ en, es }`); project write-ups are Markdown with frontmatter under `/content/projects`.
- **Imports:** Use the `@/` path alias instead of relative `../../../` chains.
- **Next.js 16:** middleware is renamed `proxy.ts` (function name `proxy`, not `middleware`); `params`/`searchParams` are async everywhere.

## i18n

- No i18n library (`next-intl` etc. would be overkill for 6 pages / 2 locales).
- `lib/i18n.ts` exports `Locale`, `locales`, `getDictionary(locale)` (dynamic import of the right dictionary JSON).
- `dictionaries/{en,es}.json` hold **short UI strings only** — nav labels, button text, section headers, form labels.
- Long-form prose (bio, hero copy, experience descriptions, project write-ups) is locale-forked at the content level: `.ts` files use `{ en: string, es: string }` per field; Markdown project files are locale-suffixed (`slug.en.md` / `slug.es.md`).
- `proxy.ts` redirects unprefixed paths to `/en` or `/es` based on `Accept-Language`.
- `components/ui/LocaleSwitcher.tsx` swaps the locale segment while preserving the current path.

## Design Tokens

Sourced from the `portfolio-design` claude.ai/design project (mockup pages: Home, About, Projects, ProjectDetail, Hobbies, Blog, Contact):

- **Colors:** background `#FAF9F6` (cream) / `#14140F` (dark), foreground `#1C1C1A` / `#F1F0EA`, primary (deep green) `#0B4F3F` / `#3FA98A`, accent (terracotta) `#D97757` / `#E38F6E`, secondary (dusty pink, hobbies) `#E8A0B4`, border `#E5E3DC` / `#34332C`, muted text `#4A4A46` / `#B0AFA6`
- **Fonts:** Fraunces (serif, headings — via `next/font/google`) + Inter (sans, body)
- **Radii:** 6px buttons/inputs, 10px cards/images, pill for tags/badges
- The dark-mode palette is a derived complement — the mockup itself was light-only.

## CI/CD

- **GitHub Actions** (`.github/workflows/ci.yml`) runs PR quality gates only: `npm run lint`, `npm run typecheck`, `npm run build`, on every pull request targeting `main` and on every push to `main`. Node 22, `npm ci` for installs, npm cache enabled via `actions/setup-node`.
- No test runner is scaffolded (no Vitest/Jest) — intentionally skipped until the owner decides to add one.
- **No branch protection rules on `main`** — left open on purpose so PRs can merge without required status checks. CI still runs and reports pass/fail on PRs, it's just not a hard gate.
- **Deploys are handled by Vercel's native Git integration, not GitHub Actions.** As of this writing, the GitHub repo (`github.com/dmeseguerw/Portfolio-2026`) is **not yet connected** to the Vercel project (`portfolio-2026`) — this has to be done manually in the Vercel dashboard (Project → Settings → Git → connect to the GitHub repo), since it can't be scripted via API/CLI in a non-interactive session. One preview URL already exists from a manual MCP-tool deploy that predates Git integration. Once connected: every PR gets an automatic preview deployment, and merges to `main` auto-deploy to production.

## Medium Integration

- Fetch posts server-side from `https://medium.com/feed/@dmeseguerw1599` (RSS) inside `/lib/medium.ts`.
- Parsed with `rss-parser`, manually `fetch()`'d first so Next's data cache (`revalidate: 3600`) actually applies (rss-parser's own HTTP client bypasses Next's fetch cache).
- **Excerpts only.** `/blog` shows a card grid of excerpts (title, snippet, date); each card links out to the full post on `medium.com`. There is no `/blog/[slug]` detail page rendering full content — don't scrape or reproduce full post bodies.
- On fetch failure: caught, logged, returns `[]` — page renders a "no posts yet" empty state rather than breaking the build.

## Commands

```
npm run dev       # local dev server
npm run build     # production build
npm run lint      # eslint
npm run typecheck # tsc --noEmit
```

## Do's and Don'ts

- ✅ Keep pages as Server Components where possible for performance/SEO.
- ✅ Type everything — no `any` in `/lib` or `/content`.
- ✅ Treat this file as living documentation — update it when structure or stack decisions change.
- ❌ Don't store Medium post content directly in the repo — always fetch live (with caching).
- ❌ Don't add new dependencies without a quick note here on why.
- ❌ Don't put long-form prose in `/dictionaries` — those are UI microcopy only; prose belongs in `/content` as `{ en, es }`.

## Contact Form

- `components/sections/ContactForm.tsx` is a client component that POSTs JSON (`{ name, email, message, company }`) to `app/api/contact/route.ts`.
- The route validates input server-side (non-empty, name ≤100 chars, message ≤5000 chars, basic email regex), checks a hidden honeypot field (`company` — silently "succeeds" without sending if filled), then sends an email to `dmeseguerw1599@gmail.com` via the `resend` SDK, with `replyTo` set to the visitor's email.
- Requires `RESEND_API_KEY` in both `.env.local` (local dev) and the Vercel project's environment variables (production) — see `.env.example`. Without it, the route responds 500 rather than sending. Get a free-tier key at resend.com.
- The route's `from` address (`onboarding@resend.dev`) is Resend's default testing sender; swap it for a verified domain sender once one is set up in the Resend dashboard.

## Known gaps / follow-ups

- **Contact form needs `RESEND_API_KEY` configured to actually send.** The form and backend are wired up (see Contact Form section above) but won't deliver mail until the owner adds a Resend API key to Vercel's env vars (and `.env.local` for local testing).
- **No gallery/project images yet.** About page and project detail page use styled placeholder blocks where the mockup referenced real photos (`public/images/*.jpg` in the mockup) — swap in real images when available.

## Decisions Log

- **Medium username:** `dmeseguerw1599` → feed URL: `https://medium.com/feed/@dmeseguerw1599`
- **Blog rendering:** Excerpts only on `/blog` — link out to the full post on Medium. No full-content scraping/rendering.
- **Deployment target:** Vercel (confirmed).
- **Analytics:** Vercel Analytics (`@vercel/analytics`) — added `<Analytics />` in `app/[locale]/layout.tsx`.
- **Content format:** Markdown w/ frontmatter for projects (not typed `.ts`), to match the author's prior portfolio and suit longer write-ups.
- **i18n:** English/Spanish via `[locale]` routing, no library — added after reviewing the prior portfolio, which had the same.
- **Dark mode:** added via `next-themes`, matching the prior portfolio.
- **Contact page:** added (not in the original proposed structure) because the claude.ai/design mockup included one with real contact info.
- **Visual design:** pulled from an existing claude.ai/design mockup (`portfolio-design`, project ID `14d1197b-b8d8-4263-9a2a-8d13a550f381`) rather than generated via `/design-sync` (which turned out to push local component libraries *up* to claude.ai/design, not pull designs down — tokens/content were read directly via the `DesignSync` tool's `get_file` instead).
- **Contact form backend:** Resend (owner's choice) — Route Handler at `app/api/contact/route.ts` calls the Resend SDK server-side, so no CSP `connect-src` changes were needed (the client never talks to a third-party domain directly).
- **CI/CD split:** GitHub Actions handles PR quality gates (lint/typecheck/build) only; actual deployment is delegated entirely to Vercel's Git integration rather than a GitHub Actions deploy step, to avoid duplicating what Vercel already does better (preview URLs per PR, auto production deploys on merge). Branch protection deliberately left off `main` for now — the owner wants to keep merging frictionless while working solo.
