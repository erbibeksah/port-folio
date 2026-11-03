# Design Specification: Next.js Portfolio Migration & Engineering Storyteller

**Date:** 2026-11-03  
**Status:** Approved  
**Author:** Bibek Sah & Antigravity  
**Domain:** `www.erbibeksah.com.np`  
**Target Architecture:** Next.js 15+ App Router, TypeScript, Tailwind CSS, Static Export (`output: 'export'`) to GitHub Pages

---

## 1. Problem & Objectives

### Current State
* The existing portfolio is a static HTML/CSS/JS template (Bootstrap 5, legacy vendor libraries such as AOS, Swiper, Glightbox, Typed.js, Waypoints) hosted on GitHub Pages with custom domain `www.erbibeksah.com.np`.
* Content is tightly coupled with HTML markup across `index.html` and `port-folio/portfolio-details.html`.
* The template lacks a distinctive identity that showcases software engineering craft, cultural roots, traditions, and engineering culture.

### Objectives
1. **Next.js Replatforming:** Convert the codebase into a modern, robust Next.js 15+ project using TypeScript, Tailwind CSS, and the App Router.
2. **Data & UI Decoupling:** Extract all profile content, deep-dive project case studies, career experience, and skills into structured TypeScript data modules in `src/data/`.
3. **"The Engineering Storyteller & Heritage Journal" Design:** Transform the visual experience into an eye-catching, high-impact developer journal blending editorial narrative typography, monospace technical accents, and personal ethos cards that celebrate roots, traditions, and engineering discipline.
4. **100% Componentized & Modular Architecture:** Every UI element is an isolated, reusable React component (badges, cards, timeline items, metric cards, section containers).
5. **Interactive "Connect With Me" Experience:** A dedicated floating quick-action button and slide-over/modal drawer offering one-click email copy, LinkedIn/GitHub direct connects, and an interactive message/inquiry box.
6. **Zero-Downtime GitHub Pages Deployment:** Configure static export (`output: 'export'`), preserve `CNAME` (`www.erbibeksah.com.np`), and set up automated GitHub Actions CI/CD.

---

## 2. Visual & Storytelling Design System (Option C)

### Aesthetic Concept
* **Theme:** "The Engineering Storyteller & Heritage Journal"
* **Palette:**
  * Background: Obsidian & Slate tones (`#090d16`, `#0f172a`, `#1e293b`) with clean high-contrast readability.
  * Accents: Emerald Green (`#10b981`), Cyan / Electric Blue (`#06b6d4`), and Warm Rose / Gold (`#f43f5e`, `#f59e0b`) for heritage and ethos highlights.
  * Typography: Clean sans-serif for UI (`Inter` or system UI), elegant editorial headings for storytelling, and monospace (`Fira Code` / `JetBrains Mono` / monospace font family) for technical data, metrics, and commands.
* **Cultural & Engineering Integration:**
  * **Roots & Heritage Banner:** Highlights personal upbringing, traditions of perseverance, community values, and how they shape an engineer who builds software with integrity and patience.
  * **Engineering Ethos & Philosophy:** Focuses on craftsmanship, architectural simplicity, scalability, and code that serves real humans.
  * **Production Impact Highlights:** Quantifiable numbers ($400M+ processed, 99.99% uptime, distributed microservices).

---

## 3. Project Directory Architecture

```
port-folio/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated build & deploy to GitHub Pages
├── public/
│   ├── CNAME                       # Domain: www.erbibeksah.com.np
│   ├── images/
│   │   ├── hero-bg.jpg             # Hero background
│   │   ├── profile.jpg             # Profile image
│   │   └── projects/               # Project screenshots & diagrams
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root HTML, SEO metadata, fonts, header/footer
│   │   ├── page.tsx                # Main single-page portfolio
│   │   ├── projects/
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Dynamic static-generated case-study pages
│   │   └── globals.css             # Tailwind CSS directives & custom styling
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Glassmorphic header with active scroll highlighting
│   │   │   ├── Footer.tsx          # Heritage closing note & social links
│   │   │   └── SectionContainer.tsx # Reusable section wrapper with standard spacing & heading
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # Headline, quick bio, active status badge, CTA buttons
│   │   │   ├── StoryEthos.tsx      # Roots, Tradition & Engineering Philosophy
│   │   │   ├── ProjectsGallery.tsx # Case studies with category filters & metric tags
│   │   │   ├── ExperienceTimeline.tsx # Career history, education & milestone timeline
│   │   │   ├── SkillsMatrix.tsx    # Technical skills categorized with proficiency tags
│   │   │   └── ContactSection.tsx  # Direct contact channels and message form
│   │   ├── connect/
│   │   │   ├── ConnectFab.tsx      # Floating "Connect With Me" quick-action button
│   │   │   └── ConnectModal.tsx    # Quick contact modal with one-click email copy & social links
│   │   └── ui/
│   │       ├── Badge.tsx           # Monospace pill badge for tech stacks
│   │       ├── MetricCard.tsx      # Highlighting key performance metrics
│   │       ├── Card.tsx            # Reusable card surface with subtle border/glow
│   │       ├── Button.tsx          # Reusable accessible button
│   │       ├── TimelineItem.tsx    # Reusable timeline row
│   │       └── TypedText.tsx       # Lightweight React typing effect
│   ├── data/
│   │   ├── profile.ts              # Core profile details, contact info, social links
│   │   ├── ethos.ts                # Heritage, tradition, culture & engineering philosophy
│   │   ├── projects.ts             # In-depth project case studies
│   │   ├── experience.ts           # Career experience and education entries
│   │   └── skills.ts               # Categorized skills (Backend, DevOps, DB, Frontend)
│   └── types/
│       └── portfolio.ts            # TypeScript interfaces
├── next.config.ts                  # Static export configuration
├── tailwind.config.ts              # Custom theme colors and typography
├── tsconfig.json                   # Strict TypeScript compiler options
└── package.json                    # Project dependencies & scripts
```

---

## 4. Data Models & Schemas

### TypeScript Interfaces (`src/types/portfolio.ts`)

```typescript
export interface EthosStory {
  quote: string;
  roots: string;
  philosophy: string;
  pillars: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'Distributed Systems' | 'FinTech & Cloud' | 'DevOps & SCM' | 'Full Stack';
  period: string;
  client?: string;
  metrics: string[];
  overview: string;
  architectureStory: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  images: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  skillsUsed: string[];
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}
```

---

## 5. Key Pages & Features

### 1. Home Page (`src/app/page.tsx`)
* **Hero Section:** High-impact introduction, dynamic animated typing ("Software Engineer", "Distributed Systems Builder", "Cloud & DevOps Enthusiast"), quick links to resume and projects.
* **Story & Ethos Section:** The core of Option C. Bridges cultural heritage and engineering craft into a cohesive narrative with 3 pillars: Craftsmanship, Scalable Resilience, and Human Impact.
* **Projects Gallery:** Filterable grid with high-impact metric callouts. Each card links to `/projects/[slug]`.
* **Experience & Timeline:** Vertical chronological view of professional roles and education.
* **Skills Matrix:** Categorized technical stack with clean visual hierarchy.
* **Contact & Heritage Footer:** Direct contact methods, social profiles, and closing message.

### 2. Project Case Study Route (`src/app/projects/[slug]/page.tsx`)
* Statically generated via `generateStaticParams()`.
* Detailed breakdown of the project: problem, architecture decisions, quantifiable impact metrics, tech stack, and key features.
* Next / Previous project navigation for fluid reading.

---

## 6. Build, Static Export & Deployment

### Next.js Configuration (`next.config.ts`)
```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
```

### GitHub Actions Workflow (`.github/workflows/deploy.yml`)
* **Trigger:** Push to `main` branch.
* **Steps:**
  1. Checkout repository.
  2. Setup Node.js v25 with npm caching.
  3. Install dependencies (`npm ci`).
  4. Run typecheck (`npx tsc --noEmit`).
  5. Build static bundle (`npm run build`).
  6. Deploy `out/` to GitHub Pages via `actions/deploy-pages@v4`.

---

## 7. Verification & Acceptance Criteria

1. **Type Safety & Build:** `npm run build` succeeds with 0 TypeScript or linting errors.
2. **Static Export Completeness:** The `out/` directory contains `index.html`, `projects/*/index.html`, and `CNAME` with `www.erbibeksah.com.np`.
3. **Visual Quality & Responsive Design:** Flawless rendering on mobile, tablet, and desktop viewports.
4. **Performance:** No client hydration bugs, clean fast load time, semantic HTML.
5. **No Broken Links:** All internal links, project routes, and external links resolve accurately.

