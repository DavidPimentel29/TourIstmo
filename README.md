# TourIstmo Design System

## Overview
**TourIstmo** is a web platform dedicated to promoting tourism in Panama. It centralizes reliable information on destinations, tourist plans, and activities. Tourism companies can publish their services, and local/international users can search and browse personalized recommendations.

**Language:** Spanish throughout (UI copy, labels, headings).

### Sources
- **Codebase:** `TourIstmo/` (attached via File System Access API)
  - Frontend lives at `TourIstmo/Frontend/`
  - Design token source of truth: `TourIstmo/Frontend/css/design-system.css`
  - Global layout styles: `TourIstmo/Frontend/css/global.css`
- **GitHub Repo:** `zerZch/TourIstmo`
- No Figma file was provided.

### Products / Surfaces
1. **Public Web App** — Main marketing + discovery surface. Pages: homepage, destinations list, plans list, destination detail, plan detail, about, help, terms, privacy.
2. **Auth Flow** — Login + Registration forms.
3. **User Profile** — Saved destinations, personal info.
4. **Company Profile** — Company info, social links, plans.
5. **Admin Dashboard** — Moderation queue for destination/plan submissions, stats.
6. **Forms** — Destination suggestion, plan publishing.

---

## CONTENT FUNDAMENTALS

### Tone & Voice
- **Warm and inviting** — TourIstmo speaks to travelers as a knowledgeable friend, not a corporate entity.
- **Adventure-forward** — Copy uses action verbs: *Explora*, *Descubre*, *Aventúrate*, *Disfruta*.
- **Concise and descriptive** — Short punchy headlines, followed by 1–2 sentence descriptions.
- **"Tú" perspective** — The platform addresses users directly with informal "tú" (not "usted"). E.g., "Tu aventura comienza aquí."
- **No emojis** in UI copy — icons (SVG) are used instead of emoji for decoration.
- **Spanish first** — All UI is in Spanish. No bilingual toggles exist in the current codebase.

### Casing
- Section headings: Title case in Spanish (e.g., "Últimas Noticias")
- Buttons/CTAs: Sentence case (e.g., "Ver todos los destinos", "Iniciar Sesión")
- Navigation links: Capitalized first word (e.g., "Destinos", "Planes", "Nosotros")
- Badge/category labels: Title case (e.g., "Histórico", "Aventura", "Natural")

### Copy Examples
- Hero: *"Explora las maravillas de Panamá"* / *"Un lugar donde la naturaleza y la aventura se unen"*
- Footer tagline: *"Explora, comparte y disfruta de los mejores destinos turísticos de Panamá. Tu aventura comienza aquí."*
- CTA: *"Iniciar Sesión"*, *"Ver todos los destinos"*, *"Registra un destino"*
- Empty state: *"No se encontraron destinos para esta categoría."*
- Success: *"¡Inicio de sesión exitoso!"*

---

## VISUAL FOUNDATIONS

### Colors
| Token | Hex | Usage |
|---|---|---|
| `--primary-dark` | `#283951` | Navy blue — primary text, navbar mobile bg, dark overlays |
| `--primary-teal` | `#588684` | Teal — navbar bg, buttons (secondary), footer bg, focus rings |
| `--primary-teal-text` | `#3f6b69` | Accessible teal for text on white (WCAG AA) |
| `--primary-green` | `#8BAD65` | Sage green — nature gradient endpoint, accents |
| `--accent-orange` | `#D57133` | Warm orange — primary CTAs, active states, highlights |
| `--neutral-light` | `#E2E1E0` | Off-white — body background, skeleton fills |
| `--bg-primary` | `#FFFFFF` | Card backgrounds |
| `--bg-secondary` | `#F8F9FA` | Page background |
| `--text-secondary` | `#5A6B7D` | Body text / muted |
| `--text-muted` | `#8A9BA8` | Placeholders, metadata |
| `--error` | `#E74C3C` | Error states |
| `--success` | `#4CAF50` | Success states |
| `--warning` | `#FFA726` | Warning states |

### Gradients
- **Primary:** `135deg, #283951 → #588684` (navy to teal)
- **Nature:** `135deg, #588684 → #8BAD65` (teal to green)
- **Warm (CTA):** `135deg, #D57133 → #E8955A` (orange gradient — used on login button, footer top accent)
- **Overlay:** `0deg, rgba(40,57,81,0.7) → rgba(40,57,81,0.3)` (photo overlays)

### Typography
- **Display font:** Poppins (Google Fonts) — headings, nav logo, section titles, card titles
- **Body font:** Inter (Google Fonts) — all body copy, labels, buttons, form elements
- **Font scale:** xs(12px) → sm(14px) → base(16px) → lg(18px) → xl(20px) → 2xl(24px) → 3xl(30px) → 4xl(36px) → 5xl(48px)
- **Weights used:** 300 (light), 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Line height:** 1.6 body; 1.1–1.3 headings; 1.6 descriptions
- **Hero titles:** `clamp(2.5rem, 8vw, 5rem)` — responsive fluid sizing

### Spacing
8-point scale: `xs(4) → sm(8) → md(16) → lg(24) → xl(32) → 2xl(48) → 3xl(64)`

### Border Radius
- Default: 8px
- Large: 12px (`border-radius-lg`)
- Extra large: 16px (`border-radius-xl`) — cards, modals
- Full/Pill: 50px (`border-radius-full`) — buttons, badges, navbar, tags

### Shadows
All shadows use `rgba(40,57,81, ...)` (primary-dark tint):
- sm: `0 1px 3px rgba(40,57,81,.08)`
- md: `0 4px 12px rgba(40,57,81,.12)`
- lg: `0 8px 25px rgba(40,57,81,.15)`
- xl: `0 15px 35px rgba(40,57,81,.20)`

### Cards
- White background, 16px border radius, 1px `#E1E8ED` border, `shadow-sm` at rest
- On hover: `translateY(-6px to -8px)` + `shadow-xl` — smooth lift
- Image zoom: `scale(1.05–1.08)` on card hover
- Save/heart button: top-right absolute on card image, 44px circle

### Navbar
- **Floating pill** shape — 95% width, `border-radius-full`, teal background, `shadow-xl`
- Positioned relative to top with `top: spacing-lg` (not fixed)
- Logo centered absolutely, nav links left, CTAs right
- Mobile: hamburger toggle; menu slides in from left covering full screen (dark navy bg)
- Hover: links shift to `accent-orange`; active link has orange underline indicator

### Footer
- Teal background (`#588684`) with white text
- 4px warm-gradient top border
- 4-column grid (brand, nav, support, app download)
- Section headings have 20px orange underline accent
- Links animate `translateX(+4px)` on hover

### Backgrounds
- Most pages: `#F8F9FA` (very light gray)
- Hero section: full-bleed photo with dark overlay, `border-radius-xl`, `margin: 0 spacing-xl`
- Login page: `#E2E1E0` (neutral-light) — card on center
- No repeating patterns or hand-drawn illustrations

### Animations
- **Page load:** `opacity: 0 → 1`, 0.5s ease (body)
- **Hero content:** `fadeInUp` staggered (title, subtitle, CTA)
- **Cards entering:** `cardEntrance` staggered (0–400ms delays)
- **Hover transitions:** `0.3s ease` standard, `0.2s ease` fast (color changes)
- **Shimmer skeleton:** `200% background-size` shimmer loop
- **All easing:** `ease` — no bounces or spring physics. Smooth and professional.
- **Reduced motion:** Full `prefers-reduced-motion` support.

### Hover States
- Buttons: `translateY(-2px)` + deeper shadow
- Cards: `translateY(-6px to -8px)` + `shadow-xl`
- Nav links: color to `accent-orange`
- Footer links: `translateX(4px)`
- Social icons: `translateY(-2px)`
- Logo: `scale(1.02)`

### Press States
- Buttons: `scale(0.97)` on `:active`
- Social login buttons: `translateY(0)` reset

### Focus States
- `outline: 2px solid var(--accent-orange); outline-offset: 3px` on all interactive elements

### Category Badge Colors
| Type | Bg | Text |
|---|---|---|
| Playa | `#e3f2fd` | `#0277bd` |
| Histórico | `#fff3e0` | `#ef6c00` |
| Natural | `#e8f5e8` | `#2e7d32` |
| Aventura | `#fce4ec` | `#c2185b` |
| Cultural | `#f3e5f5` | `#7b1fa2` |
| Paradisíaco | `#e0f7fa` | `#00838f` |
| Ingeniería | `#eceff1` | `#546e7a` |

### Imagery
- Unsplash-sourced photos for destinations (tropical beaches, jungles, cities)
- Color vibe: warm, saturated, natural light — no desaturation or heavy filters
- Overlays use teal/navy tints to stay on-brand
- All local hero images: Panamanian destinations (Casco Viejo, Bocas del Toro, El Valle, Coiba, India Dormida, Cinta Costera)

---

## ICONOGRAPHY

### Approach
- **No icon font or icon library is imported** — all icons are inline SVG, defined in JavaScript as string templates and injected via `data-icon` attributes.
- Icons use `stroke="currentColor"` with `stroke-width="2"`, `stroke-linecap="round"`, `stroke-linejoin="round"` — consistent thin-stroke line icon style.
- Icon sizes: 16×16px (inline), 18×18px (heart/interactive), 20–24px (UI controls).
- No emoji used as icons in any UI component.

### Icon Set Used
Drawn in the Lucide/Feather style (thin strokes, rounded caps). Icons defined:
- `search` — magnifying glass (navbar search)
- `x` — close/clear
- `mapPin` — location marker (destination province)
- `target` — crosshair (plan type indicator)
- `star` — filled star (ratings)
- `heart` / `heartFilled` — save/favorite toggle
- `facebook`, `instagram` — social links
- `CirclePower` — logout button
- Arrow diagonal (news "leer más" links)
- Play triangle / pause (hero slideshow controls)

### Assets Copied
All logos and destination photos are in `assets/`:
- `logo.svg` — primary color logo (used in teal navbar)
- `logo.png` — same logo, PNG fallback
- `logo2.png` — variant (used on login page)
- `logowhite.png` — white version (used in dark/footer contexts)
- `banner.avif`, `casco-viejo.webp`, `cinta-costera.webp`, `el-valle.webp`, `india-dormida.webp`, `playa-la-miel.webp`, `biomuseo.webp`, `coiba.webp` — destination photos
- `sample-user.avif` — sample user avatar photo
- `getpanama.png` — GetPanama partner logo

---

## FILE INDEX

```
/
├── README.md                    ← This file
├── SKILL.md                     ← Agent skill descriptor
├── colors_and_type.css          ← All CSS variables + semantic type styles
├── assets/                      ← Logos, images, brand assets
│   ├── logo.svg / logo.png / logo2.png / logowhite.png
│   ├── banner.avif
│   ├── casco-viejo.webp, cinta-costera.webp, el-valle.webp ...
│   └── sample-user.avif, getpanama.png
├── preview/                     ← Design System tab cards
│   ├── colors-brand.html
│   ├── colors-semantic.html
│   ├── colors-category-badges.html
│   ├── type-scale.html
│   ├── type-specimens.html
│   ├── spacing-tokens.html
│   ├── shadow-radius.html
│   ├── buttons.html
│   ├── form-inputs.html
│   ├── cards-destination.html
│   ├── navbar.html
│   ├── badges.html
│   ├── modals-toasts.html
│   └── brand-logo.html
└── ui_kits/
    └── web/
        ├── README.md
        ├── index.html           ← Interactive prototype (homepage → destinations → detail → profile)
        ├── Navbar.jsx
        ├── Footer.jsx
        ├── HeroSection.jsx
        ├── DestinationCard.jsx
        ├── LoginForm.jsx
        └── Dashboard.jsx
```
