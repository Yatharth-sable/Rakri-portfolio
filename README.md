# RAKRI PORTFOLIO

A dark-themed, animation-rich personal portfolio for Jack, a 3D creator. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

---

## Live Preview

> Deploy the `/dist` folder to [Vercel](https://vercel.com) or [Netlify](https://netlify.com) for a live URL.

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| TypeScript | 6 | Type safety |
| Vite | 8 | Build tool & dev server |
| Tailwind CSS | 3.4 | Utility-first styling |
| Framer Motion | 12 | Animations & scroll effects |
| Lucide React | latest | Icons |

---

## Features

- **Magnetic portrait** — Hero image follows the mouse cursor with a smooth spring effect
- **Scroll-driven marquee** — Two rows of project GIFs drift in opposite directions as you scroll
- **Character-by-character text reveal** — About section paragraph animates letter by letter based on scroll progress
- **Stacking project cards** — Project cards collapse on top of each other as you scroll, with scale and translate transitions
- **Fluid typography** — All font sizes use `clamp()` so the design scales seamlessly from mobile to ultrawide
- **FadeIn system** — Reusable `FadeIn` component with configurable delay, duration, and direction

---

## Project Structure

```
jack-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── AnimatedText.tsx     # Scroll-driven character reveal
│   │   ├── ContactButton.tsx    # Gradient pill button
│   │   ├── FadeIn.tsx           # Reusable fade-in wrapper
│   │   ├── HeroSection.tsx      # Hero with magnetic portrait & navbar
│   │   ├── Magnet.tsx           # Mouse-following magnetic effect
│   │   ├── MarqueeSection.tsx   # Scroll-driven dual-row GIF gallery
│   │   ├── AboutSection.tsx     # About with animated text & 3D objects
│   │   ├── ServicesSection.tsx  # White services list
│   │   └── ProjectsSection.tsx  # Stacking project cards
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/jack-portfolio.git
cd jack-portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output goes into the `/dist` folder. Preview it locally with:

```bash
npm run preview
```

---

## Deployment

### Vercel (recommended)

1. Push the repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo
3. Vercel auto-detects Vite — just click **Deploy**

### Netlify

1. Run `npm run build`
2. Go to [netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop the `/dist` folder

### GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json` scripts:
```json
"deploy": "gh-pages -d dist"
```

Then:
```bash
npm run build
npm run deploy
```

---

## Customization

### Changing the name / content
Edit the text directly inside each section component in `src/components/`.

### Swapping images
Replace the image URLs in `HeroSection.tsx`, `MarqueeSection.tsx`, and `ProjectsSection.tsx` with your own hosted images.

### Colors
The main accent color is defined in `src/index.css`. The primary background is `#0C0C0C` and the text/border color is `#D7E2EA`.

### Adding more projects
In `ProjectsSection.tsx`, add a new object to the `projects` array following the existing structure — the stacking animation adapts automatically.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint with oxlint |

---

## License

MIT — free to use and modify for personal or commercial projects.

---

## Acknowledgements

- Font: [Kanit](https://fonts.google.com/specimen/Kanit) via Google Fonts
- Animations: [Framer Motion](https://www.framer.com/motion/)
- Project preview GIFs: [motionsites.ai](https://motionsites.ai)