# 🎮 GTA 6 Landing Page

A stunning, cinematic landing page inspired by Grand Theft Auto VI, featuring smooth GSAP animations, parallax effects, and an immersive intro sequence.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.16-38B2AC?logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-Animations-88CE02?logo=greensock&logoColor=white)

---

## ✨ Features

- **🎬 Cinematic Intro Animation** - SVG mask reveal animation with the iconic "VI" text that scales and transitions into the main content
- **🌊 Parallax Mouse Effects** - Smooth multi-layer parallax movement on mouse interaction for an immersive experience
- **🎨 Custom Typography** - Uses the authentic "Pricedown" GTA font for that signature look
- **📱 Responsive Design** - Built with Tailwind CSS for seamless responsiveness across all devices
- **⚡ Lightning Fast** - Powered by Vite for blazing-fast development and optimized production builds

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI Component Library |
| **Vite 7** | Build Tool & Dev Server |
| **GSAP** | Animation Library |
| **@gsap/react** | GSAP React Integration |
| **Tailwind CSS 4** | Utility-First CSS Framework |
| **Remix Icon** | Icon Library |

---

## 📁 Project Structure

```
GTA5 landingPage/
├── public/
│   ├── bg.png              # Main background image
│   ├── girlbg.png          # Character artwork
│   ├── sky.png             # Sky background layer
│   ├── logo18.png          # Age rating logo
│   ├── ps5.png             # PlayStation 5 logo
│   └── pricedown.otf       # GTA-style font
├── src/
│   ├── components/
│   │   ├── IntroAnimation.jsx   # SVG mask intro sequence
│   │   ├── LandingPage.jsx      # Main hero section
│   │   ├── MainContent.jsx      # Content wrapper with parallax
│   │   ├── Navbar.jsx           # Navigation bar
│   │   └── DownloadSection.jsx  # Download/CTA section
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles
├── index.html              # HTML entry point
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies & scripts
└── README.md               # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/gta6-landing-page.git
   cd gta6-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

---

## 🎭 Animation Breakdown

### Intro Sequence
The landing page starts with a cinematic "VI" text mask reveal:
1. The "VI" text rotates 17 degrees over 2.2 seconds
2. Simultaneously scales up to 10x while fading out
3. Reveals the main landing page underneath

### Parallax Effects
Multi-layer parallax responds to mouse movement:
- **Sky Layer** - Moves opposite to cursor direction
- **Background Layer** - Follows cursor with enhanced movement
- **Text Elements** - Subtle reactive movement
- **Navigation** - Gentle tracking effect

---

## 🎨 Customization

### Changing Assets
Replace images in the `/public` folder:
- `bg.png` - Main city/landscape background
- `girlbg.png` - Character artwork
- `sky.png` - Sky/cloud layer

### Modifying Animations
Edit GSAP timelines in:
- `IntroAnimation.jsx` - Intro sequence timing
- `MainContent.jsx` - Parallax intensity and easing

---

## 📄 License

This project is for educational and portfolio purposes only. GTA and Grand Theft Auto are trademarks of Rockstar Games, Inc.

---

## 🙏 Acknowledgments

- **Rockstar Games** - For the incredible GTA franchise inspiration
- **GSAP** - For the powerful animation library
- **Tailwind CSS** - For the utility-first styling approach

---

<p align="center">
  Made with ❤️ and a lot of ☕
</p>
