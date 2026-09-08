# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Agency Hub
**Generated:** 2026-09-08 08:41:55
**Category:** Logistics/Delivery
**Design Dials:** Variance 4/10 (Balanced / Modern) | Density 6/10 (Standard)

---

## Global Rules

### Color Palette

Brand source of truth. Do not introduce gold, cream, red, purple, or generic Tailwind rainbows.

| Role | Hex | Token | CSS Variable |
|------|-----|-------|--------------|
| Primary (Dark Navy) | `#003B5C` | `brand_navy` | `--color-primary` |
| On Primary | `#FFFFFF` | `brand_white` | `--color-on-primary` |
| Secondary (Teal) | `#0796B2` | `brand_teal` | `--color-secondary` |
| On Secondary | `#FFFFFF` | `brand_white` | `--color-on-secondary` |
| Accent / CTA (Orange) | `#F36C21` | `brand_orange` | `--color-accent` |
| On Accent / CTA | `#FFFFFF` | `brand_white` | `--color-on-accent` |
| Highlight (Cyan) | `#0BA9C1` | `brand_cyan` | `--color-highlight` |
| Background | `#FFFFFF` | `brand_white` | `--color-background` |
| Foreground | `#003B5C` | `brand_navy` | `--color-foreground` |
| Card | `#FFFFFF` | `brand_white` | `--color-card` |
| Card Foreground | `#003B5C` | `brand_navy` | `--color-card-foreground` |
| Muted | `#E8F6F8` | `brand_cream` | `--color-muted` |
| Muted Foreground | `#5C6773` | `slate_grey` | `--color-muted-foreground` |
| Border | `#99D7E3` | `brand_teal-200` | `--color-border` |
| Destructive | `#C3561A` | `brand_orange-600` | `--color-destructive` |
| On Destructive | `#FFFFFF` | `brand_white` | `--color-on-destructive` |
| Ring | `#0BA9C1` | `brand_cyan` | `--color-ring` |

**Usage**
- Navy: headers, dark sections, nav, footer, body headings
- Orange: primary CTAs, energy, logistics emphasis
- Teal: trust, links, secondary actions, banking emphasis
- Cyan: highlights, active nav, focus rings, hover glows
- White: page surfaces, text on navy/orange/teal
- Body copy on white: `slate_grey` (`#5C6773`) — 4.5:1 on white
- Do not use orange or teal for small body text on white

**Legacy class aliases (do not add new usages)**
- `brand_gold` → cyan highlight
- `brand_red` → teal
- `smart_blue` → orange
- `sapphire` → teal
- `regal_navy` / `prussian_blue` → navy

### Typography

- **Heading Font:** Instrument Sans
- **Body Font:** Instrument Sans
- **Mood:** corporate, trustworthy, accessible, readable, professional, clean
- **Source:** local files in `src/fonts/`

### Spacing Variables

*Density: 6/10 — Standard*

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: #F36C21;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #0796B2;
  border: 2px solid #0796B2;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
```

### Cards

```css
.card {
  background: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: #0BA9C1;
  outline: none;
  box-shadow: 0 0 0 3px #0BA9C120;
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## Style Guidelines

**Style:** Minimalism & Swiss Style

**Keywords:** Clean, simple, spacious, functional, white space, high contrast, geometric, sans-serif, grid-based, essential

**Best For:** Enterprise apps, dashboards, documentation sites, SaaS platforms, professional tools

**Key Effects:** Subtle hover (200-250ms), smooth transitions, sharp shadows if any, clear type hierarchy, fast loading

### Page Pattern

**Pattern Name:** Real-Time / Operations Landing

- **Conversion Strategy:** Offer a demo or sandbox and show trust signals. Label telemetry as live only when backed by a current source, with update time and stale state. Provide pause/hide or update-frequency controls for tickers and previews, stop offscreen/hidden work, support keyboard controls, and render a static final snapshot under reduced motion.
- **CTA Placement:** Primary CTA in nav + After metrics
- **Section Order:** Hero (product + live preview or status) > Key metrics/indicators > How it works > CTA (Start trial / Contact)

---

## Anti-Patterns (Do NOT Use)

- ❌ Static tracking
- ❌ No map integration
- ❌ AI purple/pink gradients

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
