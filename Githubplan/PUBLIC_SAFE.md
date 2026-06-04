# Repository Cleanup Report (PUBLIC_SAFE.md)

This document categorizes all files and directories in the **Dapur Pusaka Nusantara** repository for public release safety.

---

## 🟢 Category 1: Safe to Publish
These files contain core application logic, structural configurations, assets, and standard build settings. They do not contain any proprietary IP or sensitive data.

*   `src/App.tsx` — Main application orchestrator.
*   `src/main.tsx` — App entry point.
*   `src/index.css` — Core Tailwind styling directives.
*   `src/vite-env.d.ts` — Vite TypeScript type declarations.
*   `src/components/*` — Custom UI components (Header, Hero, MenuSection, FAQ, FamilySets, Testimonials, Location, StickyBottomBar, etc.).
*   `src/data/*` — Public menu details, translations, and culinary heritage stories.
*   `src/utils/whatsapp.ts` — Helper methods for formatting WhatsApp ordering API links.
*   `public/*` — Icons, sitemap.xml, and robots.txt.
*   `index.html` — Application root document with dynamic meta fallback tag layout.
*   `vite.config.ts` — React bundler settings.
*   `package.json` / `package-lock.json` — Public package dependencies.
*   `tsconfig.json` / `tsconfig.app.json` / `tsconfig.node.json` — TypeScript configuration.
*   `tailwind.config.js` / `postcss.config.js` — Tailwind CSS styling configurations.
*   `eslint.config.js` — JavaScript/TypeScript linting settings.
*   `.gitignore` — Standard ignore rules.

---

## 🟡 Category 2: Review Before Publishing
These files contain repository management standards or development checklists. While they contain no secrets, they are specific to the development setup and workflow.

*   `GITHUB_ISSUES_GUIDE.md` — Defines standard operating procedures for AI dev agents. It is helpful if open-sourcing the project for cooperative development but may be removed if the repository is purely for portfolio showcase.
*   `implementation/SEO_AEO_GEO.md` — Internal SEO roadmap checklist. Contains planning notes that are safe to share, but represents internal developer logs.
*   `.bolt/config.json` / `.bolt/prompt` — Bolt editor configurations. Safe to publish, but can be removed to clean up editor-specific configurations.

---

## 🔴 Category 3: Remove Before Publishing
These files are temporary artifacts or scripts used during design execution and audit processes. They are not intended for the final production repository.

*   `scratch/` (Directory) — Contains temporary node scripts (`get_images.cjs`, `get_images.js`) and output logs used to fetch and verify Unsplash images.
*   `GIT_HISTORY_AUDIT.md` — This audit documentation (should be kept during the review process but deleted/ignored prior to final publish).
*   `PUBLIC_SAFE.md` — This release safety checklist (can be deleted/ignored before final release).
*   `PUBLIC_RELEASE_AUDIT.md` — The final audit summary report.
