# PulseCraft Studio Website

> Official website for **PulseCraft Studio** — an independent mobile application and game development studio.

Live URL: **[https://pulsecraftdev.github.io/studio/](https://pulsecraftdev.github.io/studio/)**  
GitHub Repository: **[https://github.com/pulsecraftdev/studio](https://github.com/pulsecraftdev/studio)**  
Contact: **[pulsecraft.dev@gmail.com](mailto:pulsecraft.dev@gmail.com)**

---

## About PulseCraft Studio

PulseCraft Studio crafts thoughtful mobile games and practical everyday applications. Our design philosophy centers around:
1. **Creative Experiences** — Transforming ideas into engaging digital products with thoughtful design and playful mechanics.
2. **User-First Design** — Building clear, intuitive, and responsive experiences optimized across all Android devices.
3. **Continuous Improvement** — Refining our products, listening to player feedback, and relentlessly exploring new ideas.

---

## Featured Applications & Games

All applications are centrally configured in [`src/app/data/apps.ts`](src/app/data/apps.ts):

| App | Category | Package Name | Status |
| :--- | :--- | :--- | :--- |
| **Arrow Escape** | Puzzle Game | `com.pulsecraft.arrowescape` | Coming Soon |
| **Giggly Jelly Tower** | Casual Arcade Game | `com.pulsecraft.jellystack` | Coming Soon |
| **Sipora** | Hydration & Lifestyle App | `com.sipora.hydration` | Coming Soon |
| **Word Heaven** | Word Puzzle Game | `com.pulsecraft.wordheaven` | Coming Soon |

---

## Tech Stack & Architecture

- **Framework**: Angular 22 (Standalone Components, Signals)
- **Styling**: SCSS with bespoke design tokens, fluid typography, and glassmorphic panels
- **Animations**: CSS keyframe animations, smooth scroll anchor navigation, and `@media (prefers-reduced-motion)` support
- **Hosting**: GitHub Pages via automated GitHub Actions workflow (`.github/workflows/deploy.yml`)
- **Zero Third-Party Bloat**: Pure native Angular & SVG visuals without external CSS frameworks or heavy JS libraries

---

## Local Development & Preview

### Prerequisites
- Node.js (v20 or v22+ recommended)
- npm (v10+)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm start
```
Navigate to `http://localhost:4200/`. The site will automatically reload when source files change.

### 3. Run Unit Tests
```bash
npm test -- --watch=false
```

### 4. Build for Production / GitHub Pages
```bash
npm run build:gh-pages
```
The output will be generated in `dist/studio/browser` with `<base href="/studio/">`.

---

## Publishing to GitHub Pages

### Automated Deployment (GitHub Actions)
1. Commit and push your changes to the `main` branch of `https://github.com/pulsecraftdev/studio.git`:
   ```bash
   git add .
   git commit -m "feat: complete PulseCraft Studio website recreation and upgrade"
   git push origin main
   ```
2. Enable GitHub Pages in your repository settings:
   - Go to **Settings** > **Pages** in the `pulsecraftdev/studio` repository.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Every subsequent push to `main` will automatically build the Angular application and deploy it to `https://pulsecraftdev.github.io/studio/`.

---

## Adding New Apps in the Future

To add a new game or application to the studio website:
1. Open [`src/app/data/apps.ts`](src/app/data/apps.ts).
2. Add a new entry to the `APPS_DATA` array:
   ```typescript
   {
     id: 'my-new-game',
     name: 'My New Game',
     packageName: 'com.pulsecraft.mynewgame',
     category: 'Action Puzzle',
     description: 'A captivating new adventure crafted with precision.',
     accent: 'blue',
     accentColor: '#519bff',
     visual: 'arrows', // or new visual motif
     icon: '✦',
     status: 'coming-soon',
     statusLabel: 'Coming Soon',
     playStoreUrl: 'https://play.google.com/store/apps/details?id=com.pulsecraft.mynewgame', // optional
   }
   ```
3. The showcase card and detail modal dialog will automatically generate dynamically.
