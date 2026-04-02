## 📊 Implementation Status Checklist
- [x] **Phase 1: SPA SEO Foundation** (Helmet Provider & Noscript Fallback)
- [x] **Phase 2: On-Page Semantic Depth** (AEO/GEO Optimized FAQs & Heritage Layer)
- [x] **Phase 3: Schema Injection** (Restaurant, Menu, FAQPage, and Article JSON-LD)
- [x] **Phase 4: Multi-Language Metadata Sync** (Title/Meta dynamically reactive)
- [x] **Phase 5: Search Connectivity** (Sitemap.xml & Robots.txt)

---

## 🛠️ The SPA (CSR) Caveat Approach
Since this project uses **Client-Side Rendering (CSR)** with React + Vite, crawlers that do not execute JavaScript (or perform shallow crawls) may only see the static `index.html`. 

**The Recommended Approach for Now:**
1.  **`react-helmet-async` Integration**: This is the "gold standard" for React CSR. It allows us to dynamically inject `<title>`, `<meta>`, and `<script type="application/ld+json">` tags that are readable by modern Google/Bing bots.
2.  **HTML Fallback Hydration**: We will add a descriptive `<noscript>` block and "Hero" text inside the root `index.html` so that low-intelligence bots at least see the Core Business Entity (Restaurant Name, Location, Cuisine).
3.  **Static JSON-LD Base**: We will inject a "Base Entity" Schema into `index.html` that outlines the restaurant's primary identity, ensuring the core "knowledge" is available before any JS runs.

---

## 📋 Order of Operations (Audit & Completion)

### Step 1: On-Page Optimization (AEO/GEO Focus) [COMPLETED]
*   [x] **FAQ Transformation**: Refactored `faqItems` in `menu.ts` to use "Natural Language Queries."
*   [x] **Article Layer**: Created "Culinary Heritage" storytelling in `src/data/heritage.ts`.
*   [x] **"Freshness" Utility**: Added `LAST_UPDATED` signals to Menu and Heritage modules.

### Step 2: In-Code Injection (Structured Data) [COMPLETED]
*   [x] **`SEO.tsx` Component**: Successfully injecting:
    *   `Schema.org/Restaurant` (Core Business).
    *   `Schema.org/FAQPage` (Answer Engine Optimization).
    *   `Schema.org/Menu` (Product Graph).
    *   `Schema.org/ItemList` (Article/Heritage nodes).

### Step 3: Metadata Checks & Language Sync [COMPLETED]
*   [x] **Multilingual Meta**: Syncing `<title>` and `<meta>` description via `LanguageContext`.
*   [x] **Social Card Audit**: Verified Open Graph and Twitter tags in `index.html` and `SEO.tsx`.

### Step 4: Mapping (Sitemap) [COMPLETED]
*   [x] **`sitemap.xml`**: Generated in `public/` directory with image extension.
*   [x] **Image Optimization**: Meta and `alt` tags synchronized for brand authority.

### Step 5: Gatekeeping (Robots) [COMPLETED]
*   [x] **`robots.txt`**: Standard robot config pointing to sitemap.
*   [x] **AI User-Agents**: Explicitly allowing `GPTBot`, `PerplexityBot`, and `CCBot`.

---

## 📈 Success Metrics for GEO/AEO
*   **Entity Clarity**: Can an LLM (like Gemini) answer: *"What is the best-selling dish at Dapur Pusaka Nusantara?"*
*   **Local Relevance**: Does the site appear as a top result when querying *"Traditional food in Kemang South Jakarta"*?
*   **Answer Accuracy**: Are the FAQ answers pulled directly into Google's "People Also Ask" snippets?

---
> [!TIP]
> **Next Action**: Install `react-helmet-async` and implement the `SEO` controller component to start injecting JSON-LD.
