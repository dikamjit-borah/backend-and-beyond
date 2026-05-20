---
title: Backend & Beyond — Visual Redesign
date: 2026-05-17
status: approved
---

# Visual Redesign: Reversed Ink — Deep Indigo

## Overview

Ground-up visual rebuild of the Backend & Beyond single-page Gatsby site. The current design is a generic dark-mode tech agency aesthetic (black bg, blue gradient, floating pill nav). The new direction is **Reversed Ink — Deep Indigo**: a warm cream base with deep indigo as the dominant dark, vermillion-orange as the accent, BOOWIE as the primary display font, and brutalist editorial layout principles throughout.

**No black or any shade of neutral black/gray is permitted anywhere.** All "dark" elements use `#2D0A6B` (deep indigo) or its tints.

---

## Design System

### Color Tokens (CSS custom properties in `global.css`)

```css
--cream:      #FAF8F4;   /* Primary background */
--cream-alt:  #F0EBE3;   /* Alternate section bg (about, footer) */
--ink:        #2D0A6B;   /* Primary dark — replaces all black */
--ink-mid:    #4A1E8C;   /* Hover / secondary dark states */
--ink-light:  #7B56B5;   /* Borders, subtle dividers */
--accent:     #E85D00;   /* Primary accent — orange */
--accent-lt:  #FF7A2F;   /* Hover/lighter accent */
--text-main:  #1A0845;   /* Body text (very dark indigo) */
--text-sub:   #7B68A8;   /* Secondary / muted text */
```

### Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Logo / Hero H1 / Major display | BOOWIE (local) | normal | Already in project at `src/fonts/BOOWIE.ttf` |
| Sub-headings / Stats / Labels | Epilogue (Google Fonts) | 900 | Replace Neutraface for display use |
| Body / UI copy / Nav links | Barlow (Google Fonts) | 400, 600, 700 | Replace Neutraface for body use |

Load Epilogue + Barlow via Google Fonts CDN in `gatsby-browser.js` or `global.css`. Neutraface remains available but is deprioritised.

### Layout Principles

- Sharp corners everywhere — no border-radius on structural elements (buttons, bands, input underlines). Small radii (4–6px) only for minor decorative chips.
- 2px indigo rules as section dividers (not full-width gray lines).
- `max-width: 1400px`, centered, `px-4 sm:px-6 md:px-16 lg:px-24`.
- Alternate section backgrounds: cream → cream-alt → indigo (band) → cream → indigo (band) → cream-alt.

---

## Section Specifications

### 1. Navigation (`Layout.js`)

**Background:** `--cream`  
**Bottom border:** `2px solid var(--ink)`  
**Position:** Fixed top, full width

- **Logo:** BOOWIE font, `--ink` color, `&` character in `--accent` color
- **Nav links:** Barlow 600, uppercase, letter-spacing 0.12em, `--text-sub` default → `--ink` active
- **Active indicator:** 2px `--accent` underline below active link (replacing the animated pill)
- **CTA button:** `background: var(--ink)`, `color: var(--cream)`, sharp corners (no border-radius), Barlow 700 uppercase
- **Mobile menu:** Same cream bg, indigo borders, no frosted glass / no black overlay
- **Pill indicator:** Remove the current animated sliding white pill. Replace with the 2px orange underline on active item.

### 2. Hero Section (`HeroSection.js` + `hero/` components)

**Background:** `--cream`  
**Min-height:** 100vh

**Background animation (replaces StarField):**  
Floating geometric fragments rendered on a `<canvas>` or as positioned `<div>` elements — triangles, thin rings, short line segments, small dots — all in `--ink` at ~6–8% opacity and `--accent` at ~10% opacity. Each shape:
- Drifts slowly (translateY ±12px over 14–20s, ease-in-out infinite)
- Some rings rotate continuously (30s linear)
- Dots pulse (scale 1→1.3, opacity 0.4→0.7, 4–6s)
- All shapes positioned in the right half of the viewport so they don't obstruct the left-aligned copy
- On mobile: reduce to 4–5 shapes max, smaller sizes

**HeroBadge:** Replace current dark pill. New treatment: `--accent` color text, Barlow 700 uppercase, letter-spacing 0.2em, preceded by a 24px `--accent` horizontal rule. No background/border.

**HeroHeading:** BOOWIE font, `color: var(--ink)`, large (clamp 40px→72px). The final "typewriter word" (e.g. "Autonomous Systems") renders in `--accent`. Remove the blue gradient text-clip.

**HeroDescription:** Barlow 400, `--text-sub`, max-width 420px.

**CTAButton:** Two buttons in a row:
1. Primary: `background: var(--ink)`, `color: var(--cream)`, Barlow 700 uppercase, sharp corners, `padding: 12px 28px`. Hover: `background: var(--ink-mid)`.
2. Secondary: Text-only "See Our Work →", Barlow 600, `--text-sub`, arrow in `--accent`.

**TrustedBySection:** Convert to a full-width indigo marquee band at the bottom of the hero. Cream text at low opacity, `--accent` separator dots (✦). Scrolls continuously. Content: service keywords (AI Agents, Smart Software, Data Intelligence, etc.). Remove the current "Trusted by" logo grid.

### 3. About Section (`AboutSection.js` + `about/` components)

**Background:** `--cream-alt`  
**Top border:** `2px solid` with indigo at 15% opacity

**Layout:** Two-column (existing md:flex-row), left 40% / right 60%.

**Left column:**
- Large Epilogue 900 section number "01" in `--ink` at 6% opacity (decorative)
- `AboutBadge`: Barlow 700 uppercase, `--accent`, with leading horizontal rule (same style as HeroBadge)
- `AboutHeading`: BOOWIE font, `--ink`, ~32–36px
- `AboutImage`: Keep existing image, add subtle indigo overlay at 8% on hover

**Right column:**
- `AboutContent`: Barlow 400, `--text-sub`, line-height 1.7
- `AboutStats`: Three stat items, each with a 2px `--ink` top border, Epilogue 900 number in `--ink`, Barlow label in `--text-sub`

### 4. Services Section (`ServicesSection.js` + `services/` components)

**Background:** `--ink` (full-bleed indigo band)  
**Text:** `--cream` and `--cream` at various opacities

**ServicesLabel:** Remove current floating label. Use inline section tag (Barlow 700, `--accent`, uppercase, with leading rule).

**ServicesHeading:** BOOWIE font, `--cream`, large.

**ServicesList:** Redesign as horizontal ruled rows:
- Each service: flex row with `[number] [title] [→]`
- Number: Epilogue 900, `--accent` at 60% opacity, small
- Title: Epilogue 900, `--cream`, ~18–20px
- Arrow: `--cream` at 20% opacity
- Separator: `1px solid rgba(--cream, 0.1)` top border
- Hover: title transitions to `--accent`, row shifts right 24px (keep existing x-translate animation), background sweep in `--ink-mid`
- Remove the current `ServicesDescription` and `ServicesImage` right column — the full width goes to the list

### 5. Portfolio Section (`PortfolioSection.js` + `portfolio/` components)

**Background:** `--cream`  
**Keep:** Existing full-bleed carousel mechanism, slide animations, auto-advance timer, keyboard/swipe logic.

**Visual changes only:**
- `PortfolioHeader`: Change section label to Barlow 700 uppercase `--text-sub`; progress dots to indigo/orange (active dot wider, `--accent` color)
- `PortfolioContent`: Project title in BOOWIE `--ink`; category label in Barlow `--accent`; description in Barlow `--text-sub`
- `PortfolioNavigation`: Sharp square buttons (remove border-radius), `--ink` border + color, hover fill `--ink` with `--cream` arrow
- `PortfolioGradients`: Replace current dark overlay with cream-side gradient (`--cream` → transparent) so left content stays readable on any image

### 6. Contact Section (`ContactSection.js` + `contact/` components)

**Background:** `--ink` (second full-bleed indigo band)

**ContactHeading:** BOOWIE font, `--cream`, large — e.g. "Let's Build Something Great."

**ContactLabel / tag:** Same Barlow 700 uppercase `--accent` style with leading rule.

**ContactLeftSide:** Heading + description (`--cream` at 40% opacity) + contact info links in `--cream` at 60%, each prefixed with `→` in `--accent`.

**ContactForm:**
- Input fields: transparent bg, no border except `1px solid rgba(--cream, 0.2)` bottom border only, Barlow body text `--cream`, placeholder at 30% opacity
- No box borders/backgrounds on inputs
- Submit button: `background: var(--accent)`, `color: var(--cream)`, Barlow 700 uppercase, sharp corners
- Success/error states: use `--accent-lt` for success text, light red tint for error

### 7. Footer (`Footer.js`)

**Background:** `--cream-alt`  
**Top border:** `2px solid var(--ink)`

- Logo: BOOWIE, `--ink`
- Description text: Barlow, `--text-sub`
- Social icons: `--text-sub` default, `--accent` hover
- Nav/Legal links: Barlow, `--text-sub` default, `--accent` hover
- Column titles: Barlow 700 uppercase, `--ink`, letter-spacing 0.15em
- Copyright: Barlow, `--text-sub`

---

## Animation System

### Scroll Reveals (all sections except Hero)
- Trigger: Intersection Observer, `once: true`, `-100px` margin (existing pattern — keep)
- Animation: `opacity: 0 → 1` + `translateY(20px → 0)`, duration 0.6s, `ease-out`
- Stagger: 0.15s per child element
- Library: Framer Motion (existing — keep all existing animation infrastructure)

### Hero Geometric Animation
- Implementation: Positioned `<div>` elements (no canvas needed)
- Shapes: 8–10 elements — 2 triangles (CSS border trick), 2 rings (border-radius 50% + border), 3 lines (thin rectangles rotated), 2–3 dots
- Colors: `--ink` at 6–8% opacity, `--accent` at 10–12% opacity
- Animations: CSS keyframes (drift, spin, pulse) — no JS needed
- Mobile: Reduce to 4 shapes, keep right-half positioning

### Hover States
- Service rows: `translateX(24px)`, `color → var(--accent)`, duration 0.3s ease
- Portfolio nav buttons: background fill from bottom, 0.2s ease
- CTA buttons: `background → var(--ink-mid)` or `background → var(--accent-lt)`, 0.2s ease
- All interactive elements: `transition: all 0.2s ease` minimum

### Hero Marquee
- CSS `@keyframes marquee` on a doubled string, `18s linear infinite`
- Pauses on `hover` via `animation-play-state: paused`

---

## File Change Manifest

Every file that affects visuals must be updated:

| File | Changes |
|---|---|
| `src/styles/global.css` | Add CSS custom properties, Google Fonts import, marquee keyframe, geometric shape keyframes, remove carousel classes (or keep if still used) |
| `tailwind.config.js` | Add `ink`, `cream`, `accent` color tokens; add Epilogue + Barlow to fontFamily |
| `src/components/Layout.js` | Nav: cream bg, indigo border, remove pill, add orange underline indicator, update mobile menu |
| `src/components/HeroSection.js` | Wire up new geometric animation component |
| `src/components/hero/StarField.js` | Replace with `GeometricField.js` — floating shapes |
| `src/components/hero/HeroBadge.js` | New treatment: rule + uppercase text |
| `src/components/hero/HeroHeading.js` | BOOWIE font, indigo color, accent typewriter word |
| `src/components/hero/HeroDescription.js` | Barlow, `--text-sub` |
| `src/components/hero/CTAButton.js` | Indigo bg, sharp, + secondary text link |
| `src/components/hero/TypewriterText.js` | Typewriter word color → `--accent`; keep all logic |
| `src/components/hero/TrustedBySection.js` | Replace content with scrolling marquee band (indigo bg, cream text, `--accent` separators) |
| `src/components/AboutSection.js` | Cream-alt bg, indigo top rule |
| `src/components/about/AboutBadge.js` | Rule + uppercase accent text |
| `src/components/about/AboutHeading.js` | BOOWIE font, indigo |
| `src/components/about/AboutStats.js` | Epilogue numbers, indigo top border per stat |
| `src/components/about/AboutContent.js` | Barlow body, `--text-sub` |
| `src/components/about/AboutImage.js` | Keep image, add indigo hover overlay |
| `src/components/ServicesSection.js` | Indigo bg |
| `src/components/services/ServicesHeading.js` | BOOWIE, cream |
| `src/components/services/ServicesLabel.js` | Inline tag style |
| `src/components/services/ServicesList.js` | Ruled rows layout, hover orange |
| `src/components/services/ServicesDescription.js` | Remove from `ServicesSection.js` JSX (do not delete the file) |
| `src/components/services/ServicesImage.js` | Remove from `ServicesSection.js` JSX (do not delete the file) |
| `src/components/PortfolioSection.js` | Keep logic, update section bg |
| `src/components/portfolio/PortfolioHeader.js` | Indigo/orange progress dots, Barlow label |
| `src/components/portfolio/PortfolioContent.js` | BOOWIE title, `--ink`, `--text-sub` desc |
| `src/components/portfolio/PortfolioNavigation.js` | Sharp square buttons, indigo/cream |
| `src/components/portfolio/PortfolioGradients.js` | Cream-side gradient overlay |
| `src/components/ContactSection.js` | Indigo bg |
| `src/components/contact/ContactHeading.js` | BOOWIE, cream |
| `src/components/contact/ContactLabel.js` | Inline tag style |
| `src/components/contact/ContactLeftSide.js` | Cream text, accent info items |
| `src/components/contact/ContactForm.js` | Bottom-border inputs, orange submit |
| `src/components/Footer.js` | Cream-alt bg, indigo top border, accent hover links |

---

## Constraints & Non-Goals

- **No black anywhere.** `#000`, `#111`, `#1a1a1a`, neutral grays — all forbidden. Use `--ink` or `--text-main` instead.
- **No git commits** during implementation.
- **Keep all existing animation logic** (Framer Motion scroll reveals, portfolio carousel, TypewriterText) — only visual styles change.
- **Keep Formspree integration** in ContactForm untouched.
- **Keep BOOWIE + Neutraface** local font files. Add Epilogue + Barlow via CDN.
- Do not restructure component file hierarchy — edit files in place.
- `src/pages/404.js` and `src/pages/privacy-policy.js` inherit nav/footer updates via `Layout.js` and `Footer.js` automatically — no direct edits needed unless they contain inline styles that conflict.
