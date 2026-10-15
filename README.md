# PulseCraft Studio Website

> Official website for **PulseCraft Studio** — an independent mobile application and game development studio.

- **Live URL**: [https://pulsecraftdev.github.io/studio/](https://pulsecraftdev.github.io/studio/)
- **GitHub Repository**: [https://github.com/pulsecraftdev/studio](https://github.com/pulsecraftdev/studio)
- **Contact Email**: [pulsecraft.dev@gmail.com](mailto:pulsecraft.dev@gmail.com)

---

## 🎨 Overview & Design

PulseCraft Studio crafts thoughtful mobile games and practical everyday applications. The website is crafted as a **lightweight, ultra-fast, zero-dependency single-page HTML architecture** delivering a high-end visual experience:

- **Deep Space Neon Aesthetic**: Curated color palette (dark navy `#080b16`, electric blue `#519bff`, neon violet `#8f72ff`, vivid pink `#f27eb4`, aqua `#54dbcf`).
- **Modern Typography**: Google Fonts (`Space Grotesk`, `Manrope`, and `DM Mono`).
- **Interactive App Showcase**: Dynamic modal dialogs, copy package name with feedback, and hash link navigation (`#arrow-escape`, `#giggly-jelly-tower`, etc.).
- **Interactive Floating Phone Mockups**: Dual phone mockups with dynamic notch, mini indicators, and interactive depth.
- **Ambient Lighting**: CSS glow orbs, noise texture overlay, and smooth keyframe animations with `prefers-reduced-motion` compliance.
- **Zero Third-Party Dependencies**: Native HTML5, modern Vanilla CSS, and lightweight Vanilla JavaScript. No node modules, no bundler, no framework overhead.

---

## 📱 Featured Applications & Games

All applications are centrally configured in the `APPS` array within [`index.html`](index.html):

| App | Category | Package Name | Status |
| :--- | :--- | :--- | :--- |
| **Arrow Escape** | Puzzle Game | `com.pulsecraft.arrowescape` | Coming Soon |
| **Giggly Jelly Tower** | Casual Arcade Game | `com.pulsecraft.jellystack` | Coming Soon |
| **Sipora** | Hydration & Lifestyle App | `com.sipora.hydration` | Coming Soon |
| **Word Heaven** | Word Puzzle Game | `com.pulsecraft.wordheaven` | Coming Soon |

---

## 🚀 Local Preview

Because this is a standalone single-page HTML application, running or previewing it locally requires **zero build steps or package installations**:

### Option 1: Direct File Open
Simply double-click [`index.html`](index.html) to open it in Google Chrome, Microsoft Edge, Firefox, or Safari.

### Option 2: Local HTTP Server (Recommended for development)
If you prefer testing over a local server:
```bash
# Using Python (standard on most systems):
python -m http.server 8000

# Or using Node (without installing anything globally):
npx serve .
```
Then visit `http://localhost:8000`.

---

## 🛠 Adding New Apps in the Future

To add or update games/apps, edit the `APPS` array directly inside [`index.html`](index.html#L750):

```javascript
{
  id: 'my-new-game',
  name: 'My New Game',
  packageName: 'com.pulsecraft.mynewgame',
  category: 'Action Puzzle',
  description: 'A captivating new adventure crafted with precision.',
  accent: 'blue',
  accentColor: '#519bff',
  visual: 'arrows', // 'arrows' | 'jelly' | 'water' | 'letters'
  icon: '✦',
  status: 'coming-soon',
  statusLabel: 'Coming Soon',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.pulsecraft.mynewgame', // optional
  highlights: [
    'Handcrafted levels with increasing puzzle complexity',
    'Crisp responsive touch controls',
    'Designed exclusively for mobile'
  ]
}
```
The showcase cards, visual artwork, and modal dialog will render dynamically.

---

## 🌐 Publishing to GitHub Pages

The repository includes an automated GitHub Actions deployment workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Step-by-Step Instructions:

1. **Commit and push changes to GitHub**:
   ```bash
   git add .
   git commit -m "feat: single html page design with zero dependencies"
   git push origin main
   ```

2. **Configure GitHub Pages settings** (one-time setup):
   - Open your repository on GitHub: `https://github.com/pulsecraftdev/studio`
   - Go to **Settings** > **Pages** (under Code and automation)
   - Under **Build and deployment** > **Source**, choose **GitHub Actions**

3. **Verify Deployment**:
   - The GitHub Actions workflow will automatically run and publish the site in ~15-20 seconds.
   - Your site will be live at: **[https://pulsecraftdev.github.io/studio/](https://pulsecraftdev.github.io/studio/)**

---

## 📄 License & Studio Information

- **Studio**: PulseCraft Studio
- **Developer**: pulsecraftdev
- **Contact**: [pulsecraft.dev@gmail.com](mailto:pulsecraft.dev@gmail.com)
