# BeBeyond Digital Solutions — 3D Landing Page

A high-performance, immersive 3D landing page for **BeBeyond Digital Solutions**, a digital marketing agency based in Prayagraj, UP. Built with Next.js, Three.js, GSAP, and Tailwind CSS v4.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 15+ (App Router)** | Framework, SSR, routing |
| **React Three Fiber + Drei** | 3D scenes, WebGL rendering |
| **Three.js** | 3D geometry, materials, lighting |
| **GSAP + ScrollTrigger** | Animations, scroll-driven effects |
| **Tailwind CSS v4** | Utility styling |
| **Lenis** | Smooth scroll |

---

## 🎨 Design System

### Colors
```
#219ebc  — Primary Blue
#fb8500  — Accent Orange
#faf8f4  — Cream (light bg)
#0a1628  — Ink Dark (dark sections)
#6b7280  — Muted text
```

### Fonts
- **Bricolage Grotesque** — Headings, display text
- **Public Sans** — Body, UI text

---

## 📁 File Structure

```
src/
├── app/
│   ├── globals.css          # Global styles, CSS variables, Tailwind v4 import
│   ├── layout.js            # Root layout, Google Fonts <link> tags
│   └── page.js              # Main page — mounts all sections + PageIntro
│
└── components/
    ├── PageIntro.js         # Opening animation (split panels + progress bar)
    ├── CursorGlow.js        # Custom cursor with trail effect
    ├── Navbar.js            # Sticky navbar with scroll blur + mobile menu
    ├── FloatingModel.js     # Reusable 3D elements (blob, rings, particles, etc.)
    ├── Hero.js              # Hero section — full 3D canvas background
    ├── Problems.js          # Pain points — 3 cards
    ├── AuditSteps.js        # 4-step audit process
    ├── Portfolio.js         # Case studies + client logo strip
    ├── Founder.js           # Founder section with 3D canvas
    ├── Services.js          # 6 services grid
    ├── AuditForm.js         # Lead capture form + WhatsApp CTA
    ├── FAQ.js               # Accordion FAQ (6 questions)
    └── FinalCTA.js          # Final CTA + footer + sticky mobile banner
```

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Steps

```bash
# 1. Clone or create the project
npx create-next-app@latest my-app --js --app --no-tailwind
cd my-app

# 2. Install dependencies
npm install three @react-three/fiber @react-three/drei gsap @gsap/react lenis

# 3. Install Tailwind CSS v4
npm install tailwindcss @tailwindcss/postcss

# 4. Copy all component files into src/components/
# 5. Replace src/app/globals.css, layout.js, page.js

# 6. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🔧 Key Configuration

### `next.config.mjs`
```js
const nextConfig = {
  transpilePackages: ['three'],
}
export default nextConfig
```

### `globals.css` (first 2 lines must be in this order)
```css
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,700;12..96,800&family=Public+Sans:wght@300;400;500;600;700&display=swap');
@import "tailwindcss";
```

### `layout.js` — Google Fonts via `<link>` (recommended for Tailwind v4)
```js
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque..." rel="stylesheet" />
</head>
```

---

## 🧩 Page Sections

| Section | Component | Background |
|---|---|---|
| Intro animation | `PageIntro` | Dark — split panel reveal |
| Hero | `Hero` | Dark + live 3D scene |
| Pain Points | `Problems` | White |
| Audit Process | `AuditSteps` | Cream |
| Portfolio | `Portfolio` | White |
| Founder | `Founder` | Dark + 3D canvas |
| Services | `Services` | Cream |
| Audit Form | `AuditForm` | White |
| FAQ | `FAQ` | Cream |
| Final CTA + Footer | `FinalCTA` | Dark + 3D bg |

---

## 🌐 SEO & Meta

- Schema markup: `MarketingAgency` type
- Target keywords: `digital marketing agency Prayagraj`, `Meta ads agency UP`, `SEO Prayagraj`
- Canonical: `bebeyond.digital/free-digital-audit-prayagraj`
- Open Graph tags can be added in `layout.js` metadata object

---

## 📱 Responsive Breakpoints

All sections use `clamp()` for fluid typography and `repeat(auto-fit, minmax(...))` for responsive grids. Custom cursor is hidden on touch devices (CSS `@media (pointer: coarse)`).

---

## 📞 Contact & Business Info

| Field | Value |
|---|---|
| Phone | +91 99 1867 1867 |
| WhatsApp | https://wa.me/919918671867 |
| Email | info@bebeyond.digital |
| Address | Chamber 6, Sangam Place, Civil Lines, Prayagraj, UP 211001 |
| Website | https://bebeyond.digital |

---

## ⚠️ Known Warnings (Non-breaking)

- `THREE.Clock deprecated` — Internal R3F warning, does not affect functionality. Will be resolved in future R3F update.
- Hydration mismatch from Grammarly browser extension — Fixed with `suppressHydrationWarning`.

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

*Built with ❤️ for BeBeyond Digital Solutions, Prayagraj*