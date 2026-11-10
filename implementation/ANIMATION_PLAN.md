# Animation & Micro-Interaction Implementation Plan
**Project:** Dapur Pusaka Nusantara (`Restaurant-Prototype`)  
**Inspiration & Benchmark:** Bali Wok (`baliwok.cz`) Comprehensive Architecture  
**Created:** November 10, 2026  
**Status:** Planned & Ready for Execution  

---

## 1. Executive Summary & Benchmark Analysis

Based on the deep-dive analysis of Bali Wok (`baliwok.cz`), modern high-converting culinary websites achieve luxury and emotional resonance through **subtle, high-performance, GPU-accelerated micro-interactions** rather than heavy, distracting animations.

### The 6 Core Animation Styles from Bali Wok:
1. **Continuous 60-Second Infinite Dish Marquee (`animate-slide` / `animate-marquee`):**
   - Seamless, perpetual horizontal ribbon of culinary dishes gliding across the screen with zero JavaScript tick overhead, driven purely by hardware-accelerated CSS keyframe translation.
2. **Expanding Underline Hover Effect on Links & Navigation:**
   - Interactive pseudo-element underline expanding smoothly from center/left (`after:w-0 hover:after:w-full after:transition-all after:duration-300`) on header links, story links, and footer links.
3. **Card Elevation & Lift (`hover:-translate-y-[4px]`):**
   - Tactile spring elevation on menu cards, family set cards, bento blocks, and CTA buttons paired with rich, ambient gold/bark box shadows (`shadow-premium`).
4. **Toast & Alert Notification Inset (`toast-in`):**
   - Elastic entrance keyframe (`translateY(-120%) scale(0.95)` to `translateY(0) scale(1)`) for notifications, live feedback, and copy alerts.
5. **Modal & Drawer Backdrop Blur Transitions:**
   - Smooth backdrop filter transition (`backdrop-blur-md`) and spring easing drawer entrance (`cubic-bezier(0.16, 1, 0.3, 1)`).
6. **Depth Layering & Image Zoom (Ken Burns Micro-Interaction):**
   - Smooth image scaling (`group-hover:scale-105 transition-transform duration-700 ease-out`) combined with dark multi-layer gradient vignettes.

---

## 2. Animation Architecture & Token Extensions

### A. Tailwind CSS Configuration Updates (`tailwind.config.js`)
We will expand the `keyframes` and `animation` tokens to provide utility classes for all Bali Wok styles:

```js
// In tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        // Continuous marquee for dish carousel
        'marquee': 'marquee 45s linear infinite',
        'marquee-reverse': 'marqueeReverse 45s linear infinite',
        
        // Toast and alert slide-in
        'toast-in': 'toastIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'toast-out': 'toastOut 0.25s ease-in forwards',
        
        // Subtle ambient pulses
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'badge-pulse': 'badgePulse 2s ease-in-out infinite',
        
        // Existing animations preserved
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.16,1,0.3,1) forwards',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'bounce-slow': 'bounceSlow 2.4s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        toastIn: {
          '0%': { opacity: '0', transform: 'translateY(-100%) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        toastOut: {
          '0%': { opacity: '1', transform: 'translateY(0) scale(1)' },
          '100%': { opacity: '0', transform: 'translateY(-100%) scale(0.95)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.03)', opacity: '0.85' },
        },
        badgePulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.85)' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'luxury': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
    },
  },
};
```

---

### B. Global CSS Utility Classes (`src/index.css`)
We will add standard reusable classes for the expanding underline and card hover interactions:

```css
@layer utilities {
  /* Expanding Underline Effect (Bali Wok Style) */
  .hover-underline-gold {
    position: relative;
  }
  .hover-underline-gold::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #d4a017, #fcd34d);
    border-radius: 9999px;
    transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .hover-underline-gold:hover::after {
    width: 100%;
  }

  .hover-underline-chili {
    position: relative;
  }
  .hover-underline-chili::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: #c0392b;
    border-radius: 9999px;
    transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .hover-underline-chili:hover::after {
    width: 100%;
  }

  /* Luxury Card Lift & Surface Glow */
  .hover-lift {
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
                box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                border-color 0.3s ease;
  }
  .hover-lift:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px -15px rgba(44, 26, 16, 0.15), 0 0 20px rgba(212, 160, 23, 0.08);
  }

  /* Micro Image Zoom on Hover */
  .image-zoom-container {
    overflow: hidden;
  }
  .image-zoom-container img {
    transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .image-zoom-container:hover img {
    transform: scale(1.06);
  }
}
```

---

## 3. Section-by-Section Implementation Strategy

### 1. Navigation Header (`src/components/Header.tsx`)
- **Expanding Underlines**: Apply `.hover-underline-gold` to desktop navigation links (`Home`, `Menu`, `Contact`, `FAQ`).
- **Live Status Badge**: Add a pulsing live operational indicator (e.g., green dot reading *"Open Today 10:00 - 22:00 WIB"*).
- **Mobile Drawer**: Enhance with smooth spring transition (`cubic-bezier(0.16, 1, 0.3, 1)`) and backdrop blur (`backdrop-blur-md`).

### 2. Infinite Continuous Dish Marquee Component (`src/components/ui/DishMarquee.tsx`)
- **New Feature from Bali Wok (Part 3)**:
  - Create a dedicated, continuous 60-second infinite dish marquee ribbon.
  - Positioned seamlessly beneath the Hero section on the Home page.
  - Features circular plated dish photos with Indonesian & English culinary names, spice level dots, and organic gold/bark backdrop blobs.
  - Pauses gently on hover (`group-hover:[animation-play-state:paused]`) so visitors can inspect dishes and click to order.

### 3. Food & Menu Cards (`src/components/ui/MenuCard.tsx` & `src/components/BestSellers.tsx`)
- **Tactile Card Lift**: Add `.hover-lift` to all menu cards with smooth `-translate-y-1.5` elevation and warm gold/bark shadow glow.
- **Image Depth Zoom**: Wrap card photos in smooth 700ms ease-out zoom (`group-hover:scale-106`).
- **Spice Badge Micro-Glow**: Subtle glow on chili badges when hovered.

### 4. 3D Coverflow Menu (`src/components/ui/CoverFlowCarousel.tsx`)
- **Smooth Stage Easing**: Enhance slide transitions with `cubic-bezier(0.25, 1, 0.5, 1)`.
- **Button Micro-Interactions**: Add subtle spring bounce to category filter pills upon selection.

### 5. Heritage Stories (`src/components/CulinaryHeritage.tsx`)
- **Editorial Card Hover**: Apply Bali Wok-style photo frame hover effect with smooth vignette fade and subtle image elevation.
- **Read More Expanding Underlines**: Add `.hover-underline-gold` to narrative CTAs.

### 6. Family Sets (`src/components/FamilySets.tsx`)
- **Featured Card Elevation**: Emphasize the "Most Popular" card with subtle floating micro-animation and shimmering gold badge.
- **Button Hover States**: Smooth `-translate-y-px` and glowing shadow effects on the gold and chili CTA buttons.

### 7. Location & Bento Amenities Grid (`src/components/LocationHours.tsx`)
- **Bento Card Lift**: Add `.hover-lift` to information cards (Address, Hours, Phone, Map).
- **Interactive Map Pin Pulse**: Add smooth slow bounce and pulse glow to the map marker badge.

### 8. Interactive Toast & Copy Feedback
- **Toast Notification**: Build a lightweight, reusable toast notification for copying addresses, clicking phone numbers, or adding items, using the `toast-in` animation.

---

## 4. Verification & Testing Plan

1. **Performance & Frame Rate**:
   - Verify 60 FPS GPU-accelerated performance using Chrome DevTools Performance panel (no layout shifts, transform/opacity only).
2. **Mobile Touch Performance**:
   - Verify touch swiping and smooth scrolling on mobile viewports.
3. **Accessibility**:
   - Ensure `prefers-reduced-motion` media queries are respected so users with motion sensitivity experience graceful non-animated fallbacks.
4. **Build Verification**:
   - Execute `npm run build` to confirm zero compilation errors.

---
*Ready for execution upon user confirmation.*

