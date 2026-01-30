# ScrollTrigger Image Zoom - React Vite

A pixel-perfect React conversion of a GSAP ScrollTrigger image zoom effect, built with Vite.

## 🚀 Features

- **GSAP ScrollTrigger Animation**: Smooth scroll-triggered image zoom with 3D perspective
- **React Hooks Architecture**: Custom `useScrollZoomAnimation` hook for reusable animation logic
- **Performance Optimized**: React.memo for preventing unnecessary re-renders
- **Modular Components**: Clean separation of concerns with component-based architecture
- **Modern Build System**: Vite for fast development and optimized production builds

## 📦 Installation

```bash
# Install dependencies
npm install
```

## 🛠️ Development

```bash
# Start development server (runs on http://localhost:3000)
npm run dev
```

## 🏗️ Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
scrolltrigger-image-zoom-react/
├── src/
│   ├── components/
│   │   ├── ScrollZoomEffect.jsx       # Main animation component
│   │   └── ScrollZoomEffect.css       # Component-specific styles
│   ├── hooks/
│   │   └── useScrollZoomAnimation.js  # Custom GSAP animation hook
│   ├── App.jsx                        # Root application component
│   ├── App.css                        # App-level styles
│   ├── main.jsx                       # React entry point
│   └── index.css                      # Global styles
├── index-react.html                   # HTML entry point for Vite
├── vite.config.js                     # Vite configuration
└── package.json                       # Dependencies and scripts
```

## 🎨 Technical Implementation

### Component Architecture

**ScrollZoomEffect Component**
- Functional component wrapped with `React.memo()` for performance
- Uses custom hook for GSAP animation logic
- Maintains pixel-perfect structure from original HTML

**useScrollZoomAnimation Hook**
- Encapsulates all GSAP ScrollTrigger logic
- Returns refs for DOM element targeting
- Implements proper cleanup to prevent memory leaks
- Registers ScrollTrigger plugin automatically

### GSAP Integration

The animation creates a scroll-triggered effect with:
- **Image Scale**: 1x to 2x with 3D transform (z: 350)
- **Hero Section Scale**: 1x to 1.1x (simultaneous with image)
- **Pinning**: Wrapper element pinned during scroll
- **Scrub**: Smooth animation tied to scroll position
- **Duration**: 150% of viewport height

### Key Features

1. **useRef for DOM Targeting**: Replaces `document.querySelector` with React refs
2. **useEffect with Cleanup**: Proper lifecycle management for GSAP timelines
3. **Plugin Registration**: ScrollTrigger registered once in the custom hook
4. **Preserved Animations**: All original timing, easing, and triggers maintained

## 📚 Dependencies

```json
{
  "gsap": "^3.12.5",           // Animation library with ScrollTrigger
  "react": "^18.2.0",          // React library
  "react-dom": "^18.2.0"       // React DOM renderer
}
```

## 🎯 Original vs React Comparison

| Original | React Implementation |
|----------|---------------------|
| `document.querySelector` | `useRef` hooks |
| `window.addEventListener` | `useEffect` hook |
| Global GSAP variables | Encapsulated in custom hook |
| Inline scripts | Modular component architecture |
| Static HTML | JSX with component composition |

## ⚠️ Notes

- **Markers**: ScrollTrigger markers are enabled (`markers: true`) for development. Remove this in production.
- **External CSS**: The original CodePen CSS (`xxmzBrw.css`) is still loaded from CDN in the HTML. You may want to integrate this locally.
- **Image Sources**: Uses original image URLs from unsplash and website-files.com

## 🔧 Configuration

### Remove ScrollTrigger Markers

Edit `src/hooks/useScrollZoomAnimation.js`:

```javascript
scrollTrigger: {
  // ... other settings
  markers: false  // Change to false
}
```

### Adjust Animation Duration

```javascript
scrollTrigger: {
  end: '+=150%',  // Change percentage to adjust scroll distance
}
```

### Modify Zoom Intensity

```javascript
timeline.to(imageRef.current, {
  scale: 2,  // Change scale value (higher = more zoom)
  z: 350     // Adjust 3D depth
});
```

## 📄 License

MIT License - Feel free to use this in your projects!

## 🙏 Credits

- Original GSAP animation by [GreenSock](https://greensock.com/)
- Based on [CodePen example](https://codepen.io/GreenSock/pen/YzbPYMx)
