# 🍲 Dapur Pusaka Nusantara — Restaurant Prototype

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-%2320232d.svg?style=flat&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Lucide React](https://img.shields.io/badge/icons-lucide--react-eb4034)](https://lucide.dev/)

## 📖 Overview

**Dapur Pusaka Nusantara** is a premium, modern web prototype for a traditional Indonesian restaurant located in Kemang, Jakarta. This project serves as a case study for building high-performance, localized dining experiences with a deep focus on visual storytelling, SEO/AEO/GEO optimization, and seamless WhatsApp communication. 

This repository showcases how modern Single-Page Applications (SPAs) can incorporate premium design systems, multi-language support (i18n), and crawlable semantic layers for search and answer engines.

---

## ✨ Features

*   **🌍 Smart Bilingual Support (i18n)**: Seamlessly toggle between **Indonesian** and **English** with persistent language state and reactive metadata.
*   **🍛 Authentic Dining Experience**: A rich, interactive menu featuring Indonesian classic dishes, complete with spice levels and allergen triggers.
*   **👨‍👩‍👧‍👦 Curated Family Bundles**: Targeted "Family Sets" for groups of 2, 4, or 6, designed to simplify group dining decisions.
*   **💬 "Fast-Order" WhatsApp API**: Specialized link generation that bridges digital browsing with real-world orders via pre-filled WhatsApp messages.
*   **🤖 Search, Answer & Generative Engine Optimization (SEO/AEO/GEO)**: Custom structured data schema injection (Restaurant, Menu, FAQPage, Article) for Google, Bing, and AI search crawlers.
*   **📱 Mobile-First Design**: High-performance responsive layouts featuring a sticky navigation system, smooth micro-interactions, and beautiful transitions.

---

## 🛠️ Tech Stack

*   **React 18** — Core application library.
*   **Vite** — High-performance bundler and development server.
*   **TypeScript** — Type-safe architecture.
*   **Tailwind CSS** — Custom utility styling system.
*   **React Helmet Async** — Dynamic SEO tag injector for Single Page Applications.
*   **Lucide React** — Crisp vector icons.

---

## ⚙️ Environment Variables

The application can be configured for other brands or numbers using environment variables. Refer to the `.env.example` file in the root directory for configuration parameters.

> [!IMPORTANT]
> Never commit real credentials, production WhatsApp numbers, or private URLs to public source control. Keep them secured in your environment settings.

---

## 🚀 Installation & Setup

### Prerequisites
*   **Node.js**: `v18.0.0` or higher
*   **npm**: `v9.0.0` or higher

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sultanisaac26-create/Restaurant-Prototype.git
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

---

## 💻 Running Locally

To run the application locally in development mode:
```bash
npm run dev
```
Once started, the application will be accessible at `http://localhost:5173`.

To build the application for production deployment:
```bash
npm run build
```

---

## 📂 Project Structure

```bash
Restaurant-Prototype/
├── .bolt/             # Bolt development editor settings
├── Githubplan/        # Public release audit checklists & reports
│   ├── GIT_HISTORY_AUDIT.md
│   ├── PUBLIC_RELEASE_AUDIT.md
│   └── PUBLIC_SAFE.md
├── public/            # Static assets (robots.txt, sitemap.xml)
├── src/               # Application source code
│   ├── components/    # Modular UI sections (Hero, MenuSection, FAQ, Location, etc.)
│   │   └── ui/        # Component primitives (MenuCard, SpiceIndicator)
│   ├── contexts/      # State management (i18n Language Context)
│   ├── data/          # Menu datasets, translations, and heritage stories
│   ├── types/         # TypeScript interface definitions
│   ├── utils/         # Helper functions (WhatsApp URL builders)
│   ├── App.tsx        # Root layout orchestrator
│   └── main.tsx       # SPA entry point
├── .env.example       # Blueprint for environment configuration
└── vite.config.ts     # Vite compilation settings
```

---

## 🌐 Deployment

The prototype is fully configured for deployment on modern edge hosting platforms (such as Vercel, Netlify, or GitHub Pages) as a static site:

1.  Configure the build command as `npm run build`.
2.  Set the output directory to `dist`.
3.  Inject any required custom variables defined in `.env.example` in the hosting platform console.

---

## 📜 License

*Placeholder — No license currently exists.*
Refer to [Githubplan/PUBLIC_RELEASE_AUDIT.md](Githubplan/PUBLIC_RELEASE_AUDIT.md) for license recommendations.

---

## 🤝 Contributing

Contributions to improve design, layout, or localization logic are welcome:
1.  Fork the repository.
2.  Create a branch for your feature (`git checkout -b feature/amazing-feature`).
3.  Commit your changes (`git commit -m 'feat: add amazing feature'`).
4.  Push to the branch (`git push origin feature/amazing-feature`).
5.  Open a Pull Request.

---

## 🔒 Security Notes

If you identify any vulnerabilities or accidentally committed secrets:
1.  Do not open a public issue.
2.  Report concerns directly to the project owner.
3.  Utilize tools like `git-filter-repo` to purge any local configuration leaks before pushing commits.
