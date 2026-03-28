# 🍲 Dapur Pusaka Nusantara — Restaurant Prototype

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-%2320232d.svg?style=flat&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Lucide React](https://img.shields.io/badge/icons-lucide--react-eb4034)](https://lucide.dev/)

A premium, modern web prototype for **Dapur Pusaka Nusantara**, a fictional Indonesian traditional restaurant located in Kemang, Jakarta. This project serves as a case study for building high-performance, localized dining experiences with a deep focus on **visual storytelling** and **seamless WhatsApp communication**.

![Dapur Pusaka Nusantara Preview](https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200)

---

## 🌟 Premium Features

- **🌍 Smart Bilingual Support (i18n)**: Seamlessly toggle between **Indonesian** and **English** with persistent language state and automatic SEO metadata synchronization.
- **🍛 Categorized Dining Experience**: A rich, interactive menu featuring Indonesian classics like *Rendang*, *Sate Ayam*, and *Gado-Gado*, complete with spice levels and allergen triggers.
- **👨‍👩‍👧‍👦 Curated Family Bundles**: Targeted "Family Sets" for groups of 2, 4, or 6, designed to simplify high-frequency decision-making during peak hours.
- **💬 "Fast-Order" WhatsApp API**: A specialized ordering logic that bridges digital browsing with real-world fulfillment via pre-filled, localized WhatsApp messages.
- **📱 Mobile-First Craftsmanship**: High-performance responsive design featuring a sticky navigation system, smooth micro-interactions, and high-quality image lazy-loading.
- **🎨 Elite Brand Identity**: A sophisticated UI/UX built on a luxury palette of **Gold & Earth tones**, utilizing premium typography (*Playfair Display* & *Plus Jakarta Sans*).

---

## 🛠️ Modern Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | Core application framework with concurrent rendering. |
| **Vite** | Ultra-fast next-gen build tool and development server. |
| **TypeScript** | Type-safe development for robust business logic. |
| **Tailwind CSS** | Custom utility-first design system with rich tokens. |
| **Lucide Icons** | Crisp, scalable vector iconography. |
| **Context API** | Lightweight global state for localized user preferences. |

---

## 📂 Architecture at a Glance

```bash
src/
├── components/       # UI modularity (Hero, Menu, FAQ, Location, etc.)
│   └── ui/           # Low-level primitive components (MenuCard, SpiceIndicator)
├── contexts/         # Global state logic (i18n Language Context)
├── data/             # Centralized "Source of Truth" for menu & translations
├── types/            # Strict TypeScript interface definitions
├── utils/            # Logic for WhatsApp API and business helpers
└── App.tsx           # Orchestration of the Landing Experience
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sultanisaac26-create/Restaurant-Prototype.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Launch dev environment:**
   ```bash
   npm run dev
   ```

The application will be accessible at: `http://localhost:5173`.

---

## 📋 Current Project Status

> [!IMPORTANT]
> This repository is a **Functional Prototype**. While the UI, interactions, and localized logic are fully operational, real-world payment gateways and logistics tracking are currently **simulated** for demonstration purposes.

---

## ✍️ Author & Credits

Designed and crafted with precision by **Sultan Isaac**.

- **LinkedIn**: [Sultan Isaac](https://www.linkedin.com/in/sultan-isaac)
- **Portfolio**: [Sultan Isaac Portfolio](https://sultanisaac.com)

---
© 2024 Dapur Pusaka Nusantara. Prototype for demo purposes.
