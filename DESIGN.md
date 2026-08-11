# Design Brief — Portfolio 2026

**Owner:** Daniel · **Type:** Personal portfolio (experience, projects, hobbies, Medium-fed blog)
**Stack:** Next.js (App Router) + Tailwind CSS, deployed on Vercel

## 1. Direction in one sentence

A **warm, editorial, professional** portfolio — closer to a well-typeset personal magazine than a SaaS landing page. Confident serif headlines, generous cream/paper backgrounds, one or two saturated accent colors used sparingly, and enough restraint to read as credible to recruiters and clients, not "designer showing off."

## 2. Reference sites

| Site | What to borrow |
|---|---|
| [jessicahische.is](https://jessicahische.is) | **Primary influence.** Cream/paper background (`#FAFAF8`), deep forest green + warm pink + amber accents, serif display headlines (Mercury-style) paired with a clean grotesk (Whitney-style) for body/UI text. Playful-but-professional copy tone. |
| [pratibhajoshi.com](https://www.pratibhajoshi.com/) | Simple nav (Home/About/Experiments/Contact), single strong accent color (hot pink) on a white base, short confident bio statement up top, logo/mentions strip for credibility. |
| [robin-noguier.com](https://robin-noguier.com/about/) | Full-bleed, one-idea-per-screen sectioning; a display font doing all the personality work while body text stays a plain grotesk; a single loud accent (red) used only for interactive/CTA moments. |
| [eleveight.studio](https://www.eleveight.studio/) | Big, confident type-as-hero (oversized statement headline), tidy card-based "benefits/services" grids, counter/stat animations — useful for the Projects and Experience sections, not the overall palette (too neon/agency for "professional & polished"). |

Net: use Hische's palette and warmth as the base, Pratibha's restraint and simple nav as structure, Robin's one-accent-color discipline for interactivity, Eleveight's confident type-as-hero and card grids for the Projects/Experience sections.

## 3. Color palette

Warm, paper-based neutrals + a small accent set — pick **one** accent as primary, keep the rest as secondary/tag colors so it doesn't get busy.

```
Background (paper):   #FAF9F6   (warm off-white, not pure white)
Surface/card:         #FFFFFF
Ink (primary text):   #1C1C1A   (near-black, warm not cold)
Ink muted (body):     #4A4A46
Border/hairline:      #E5E3DC

Primary accent:        #0B4F3F   (deep forest green — for links, active states, key headlines)
Secondary accent:      #D97757   (warm terracotta/amber — CTAs, hover, tags)
Tertiary accent:       #E8A0B4   (dusty pink — used sparingly: badges, hobby section, illustrations)
```

- Dark mode (optional, not required for v1): invert to `#15150F` background, `#F2F0E9` text, keep the green/terracotta accents but slightly desaturated.
- Rule: **max two accent colors visible per screen.** Green for structure/links, terracotta for action/emphasis. Pink reserved for the Hobbies page or small decorative moments.

## 4. Typography

- **Display/headline font:** a warm, editorial serif with personality — e.g. **Fraunces**, **Source Serif 4**, or **Newsreader** (all free on Google Fonts, similar spirit to Hische's Mercury). Used for H1/H2, pull quotes, and the homepage hero statement.
- **Body/UI font:** a clean, neutral grotesk — e.g. **Inter**, **General Sans**, or **Public Sans**. Used for nav, body copy, buttons, captions.
- Pairing rule: serif is for *voice* (headlines, statements about who you are), grotesk is for *function* (navigation, project metadata, dates, tags).
- Scale: oversized hero headline (Eleveight-style confidence, e.g. `clamp(2.5rem, 6vw, 5rem)`), generous line-height on body copy (1.6–1.7), wide letter-spacing on small caps/labels (nav, tags, section eyebrows).

## 5. Layout & structure

- **Homepage:** short, confident bio statement as hero (Pratibha-style — one or two sentences, not a wall of text), followed by a "selected projects" card grid, then a brief experience/credibility strip (logos or company names), then a blog/hobbies teaser.
- **Nav:** simple horizontal text nav (Home / About / Projects / Hobbies / Blog / Contact), no hamburger on desktop, warm background carries through — no hard white bar.
- **Projects page/detail:** card grid on the index (image/thumbnail + title + tags + one-line summary), generous single-column editorial layout on detail pages with a serif headline, pull-quote-style callouts for key outcomes.
- **Blog page:** card grid of Medium excerpts (title, snippet, date, thumbnail) linking out — per CLAUDE.md, excerpts only, no full-post rendering.
- **Footer:** simple, warm, personal — email, social links, maybe a small serif closing line (Hische does this well with "Let's Make Something").
- **Whitespace:** generous section padding (min 96–120px vertical between major sections on desktop), let the paper background breathe.

## 6. Motion & interaction

- Subtle, not flashy: fade/slide-up on scroll for section entrances, gentle hover states (underline grow, slight color shift to terracotta) on links and cards.
- Optional: animated counters for experience stats (years, projects shipped) like Eleveight — only if it doesn't feel like an agency pitch.
- No full-screen audio/video takeover (that's Robin Noguier's signature move — too experimental for "professional & polished").

## 7. Imagery & illustration

- Warm, natural photography if using personal photos (not corporate stock).
- Project thumbnails: consistent aspect ratio, soft rounded corners (8–12px), subtle border using the hairline color, no harsh drop shadows.
- If adding decorative elements, favor simple line-drawn or hand-lettered accents (nod to Hische) over generic icon sets.

## 8. Tone of voice (copy)

Professional & polished, but warm — first-person, short sentences, confident without being boastful. Think Pratibha's bio line: *"I'm a Product Designer at Google. I enjoy creating user-centric, delightful, human experiences."* Same economy for Daniel's version.
