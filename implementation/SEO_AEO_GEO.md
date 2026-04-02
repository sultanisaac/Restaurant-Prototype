# 🚀 Strategy for SEO, AEO, & GEO Optimization

This document outlines the optimization roadmap for **Dapur Pusaka Nusantara** to dominate traditional search (SEO), answer engines (AEO), and generative AI search (GEO).

---

## 🛠️ The SPA (CSR) Caveat Approach
Since this project uses **Client-Side Rendering (CSR)** with React + Vite, crawlers that do not execute JavaScript (or perform shallow crawls) may only see the static `index.html`. 

**The Recommended Approach for Now:**
1.  **`react-helmet-async` Integration**: This is the "gold standard" for React CSR. It allows us to dynamically inject `<title>`, `<meta>`, and `<script type="application/ld+json">` tags that are readable by modern Google/Bing bots.
2.  **HTML Fallback Hydration**: We will add a descriptive `<noscript>` block and "Hero" text inside the root `index.html` so that low-intelligence bots at least see the Core Business Entity (Restaurant Name, Location, Cuisine).
3.  **Static JSON-LD Base**: We will inject a "Base Entity" Schema into `index.html` that outlines the restaurant's primary identity, ensuring the core "knowledge" is available before any JS runs.

---

## 📋 Order of Operations

### Step 1: On-Page Optimization (AEO/GEO Focus)
*   **FAQ Transformation**: Refactor `faqItems` in `menu.ts` to use "Natural Language Queries" (e.g., *"Does Dapur Pusaka Nusantara have outdoor seating in Kemang?"*).
*   **Article Layer**: Create a "Culinary Heritage" section in the codebase. This provides semantic depth—AI models (Perplexity/SearchGPT) prefer summarizing rich, informative text over just a menu list.
*   **"Freshness" Utility**: Adding `Last Updated` metadata to the menu data to signal active management.

### Step 2: In-Code Injection (Structured Data)
*   **`SEO.tsx` Component**: Create a high-level component to manage:
    *   `Schema.org/Restaurant`: Primary entity (Hours, Address, Geo, Price, Menu Link).
    *   `Schema.org/FAQPage`: Dynamically generated from our `FAQ` data.
    *   `Schema.org/Menu`: Mapping all dishes to a readable hierarchy for search engine internal "Knowledge Graphs."
    *   `Schema.org/AggregateRating`: Leveraging social proof data.

### Step 3: Metadata Checks & Language Sync
*   **Multilingual Meta**: Sync the `<title>` and `<meta name="description">` to the active `LanguageContext`. 
    *   *ID*: "Dapur Pusaka Nusantara — Masakan Tradisional Indonesia"
    *   *EN*: "Dapur Pusaka Nusantara — Authentic Indonesian Traditional Dining"
*   **Social Card Audit**: Ensure `og:image` and `twitter:image` are high-resolution (targeting Pexels food shots).

### Step 4: Mapping (Sitemap)
*   **`sitemap.xml`**: Include the primary URL and an **Image Sitemap**. 
*   **Image Optimization**: Add `alt` tags to all menu images that are keyword-rich (e.g., *"Beef Rendang - Authentic Indonesian Slow-Cooked Beef"*).

### Step 5: Gatekeeping (Robots)
*   **`robots.txt`**: Standard configuration in `/public`.
*   **AI User-Agents**: Explicitly allow agents like `GPTBot`, `CCBot`, and `PerplexityBot` to ensure they can index the restaurant data for AI-driven recommendations.

---

## 📈 Success Metrics for GEO/AEO
*   **Entity Clarity**: Can an LLM (like Gemini) answer: *"What is the best-selling dish at Dapur Pusaka Nusantara?"*
*   **Local Relevance**: Does the site appear as a top result when querying *"Traditional food in Kemang South Jakarta"*?
*   **Answer Accuracy**: Are the FAQ answers pulled directly into Google's "People Also Ask" snippets?

---
> [!TIP]
> **Next Action**: Install `react-helmet-async` and implement the `SEO` controller component to start injecting JSON-LD.
