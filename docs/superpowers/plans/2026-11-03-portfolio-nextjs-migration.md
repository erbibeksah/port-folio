# Next.js Portfolio Migration & Engineering Storyteller Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the static HTML/CSS portfolio into a modern, componentized Next.js 15+ App Router application with static export to GitHub Pages, featuring "The Engineering Storyteller & Heritage Journal" design and an interactive "Connect With Me" experience.

**Architecture:** Initialize Next.js directly at the repository root using TypeScript and Tailwind CSS. Decouple profile data into typed TypeScript modules under `src/data/`, assemble modular reusable UI components in `src/components/`, build dynamic project case-study routes statically via `generateStaticParams()`, and deploy via automated GitHub Actions to GitHub Pages preserving the custom domain `www.erbibeksah.com.np`.

**Tech Stack:** Next.js 15+ (App Router), React 19, TypeScript, Tailwind CSS, Lucide React icons, GitHub Actions, GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-11-03-portfolio-nextjs-migration-design.md`

## Global Constraints
- Target hosting: GitHub Pages with static export (`output: 'export'`) and `trailingSlash: true`.
- Custom domain: `CNAME` must be preserved in `public/CNAME` and emitted to `out/CNAME`.
- Node & runtime: Node.js 25+ compatible, strict TypeScript (`strict: true`), zero build warnings/errors.
- Responsive design: Mobile-first responsive layouts supporting phone, tablet, and desktop viewports.
- Modular architecture: 100% componentized reusable primitives; no monolithic hardcoded page templates.

## Review Focus
- Static generation failure: Verify `generateStaticParams()` accurately returns slugs for all items in `projects.ts`.
- Image asset pathing: Verify all images in `public/images/` resolve properly with unoptimized static export.
- Clipboard copy API: Verify fallback if navigator.clipboard is unavailable on unsecured origins.
- Mobile viewport overflow: Verify code blocks and long technical strings wrap or scroll cleanly without breaking layout.
- GitHub Pages 404s on refresh: Verify `trailingSlash: true` outputs clean directory indexes (`/projects/retirement-benefits/index.html`).

---

### Task 1: Initialize Next.js 15+, Tailwind CSS & Core Configurations

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `tailwind.config.ts`
- Create: `postcss.config.mjs`
- Create: `public/CNAME`
- Create: `public/images/` (move assets from `port-folio/assets/img/`)

**Interfaces:**
- Produces: Base Next.js build setup with static export configured and Tailwind CSS utility classes ready.

- [ ] **Step 1: Create `package.json` with Next.js, React, and Tailwind dependencies**

```json
{
  "name": "bibeksah-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^15.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "lucide-react": "^0.468.0"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.16",
    "typescript": "^5.7.2"
  }
}
```

- [ ] **Step 2: Install dependencies**

Run: `npm install`  
Expected: `package-lock.json` and `node_modules` created.

- [ ] **Step 3: Create `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, and `postcss.config.mjs`**

`next.config.ts`:
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

`tailwind.config.ts`:
```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#090d16',
        surface: '#0f172a',
        'surface-elevated': '#1e293b',
        border: '#334155',
        primary: {
          DEFAULT: '#10b981', // emerald
          hover: '#059669',
        },
        accent: {
          cyan: '#06b6d4',
          amber: '#f59e0b',
          rose: '#f43f5e',
        },
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
```

`postcss.config.mjs`:
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 4: Copy images and CNAME into `/public/`**

```bash
mkdir -p public/images
cp CNAME public/CNAME
cp -r port-folio/assets/img/* public/images/
```

- [ ] **Step 5: Verify build skeleton runs without error**

Run: `npm run typecheck`  
Expected: PASS (0 errors)

---

### Task 2: TypeScript Data Models & Decoupled Content Layer

**Files:**
- Create: `src/types/portfolio.ts`
- Create: `src/data/profile.ts`
- Create: `src/data/ethos.ts`
- Create: `src/data/projects.ts`
- Create: `src/data/experience.ts`
- Create: `src/data/skills.ts`

**Interfaces:**
- Consumes: Nothing
- Produces: Typed exports `profileData`, `ethosData`, `projectsData`, `experienceData`, `skillsData`

- [ ] **Step 1: Write `src/types/portfolio.ts`**

Define interfaces: `ProfileData`, `EthosStory`, `ProjectItem`, `ExperienceItem`, `SkillCategory`.

- [ ] **Step 2: Write `src/data/profile.ts`**

Extract personal details: Name ("Bibek Sah"), Title ("Software Engineer"), City ("Kathmandu, Nepal"), Degree ("Bachelor in Computer Engineering"), Email ("sahbibek49@gmail.com"), Phone, LinkedIn, GitHub.

- [ ] **Step 3: Write `src/data/ethos.ts`**

Document the "Engineering Storyteller" narrative: roots, perseverance, cultural ethos, and engineering pillars (*Craftsmanship*, *Scalable Resilience*, *Human Impact*).

- [ ] **Step 4: Write `src/data/projects.ts`**

Extract rich case studies:
1. `retirement-benefits`: Retirement Benefits Management System ($400M+ processed, 99.99% uptime, distributed microservices).
2. `hrms-payroll`: HRMS & Payroll Platform (multi-tenant engine, dynamic rules).
3. `devops-automation`: DevOps Automation & SCM Migration (zero-downtime, automated CI/CD).

- [ ] **Step 5: Write `src/data/experience.ts` & `src/data/skills.ts`**

Structured career history, education milestones, and categorized skill badges (Backend, Distributed Systems, Cloud & DevOps, Database, Frontend).

- [ ] **Step 6: Run Typecheck**

Run: `npm run typecheck`  
Expected: PASS with 0 errors.

---

### Task 3: Reusable UI Primitives & Global Layout

**Files:**
- Create: `src/app/globals.css`
- Create: `src/app/layout.tsx`
- Create: `src/components/ui/Badge.tsx`
- Create: `src/components/ui/MetricCard.tsx`
- Create: `src/components/ui/Card.tsx`
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/TimelineItem.tsx`
- Create: `src/components/ui/TypedText.tsx`
- Create: `src/components/layout/SectionContainer.tsx`
- Create: `src/components/layout/Navbar.tsx`
- Create: `src/components/layout/Footer.tsx`

**Interfaces:**
- Consumes: `src/types/portfolio.ts`, `src/data/profile.ts`
- Produces: Reusable design system primitives and main site header/footer shell.

- [ ] **Step 1: Implement `src/app/globals.css` with Tailwind directives and custom scrollbar/gradients**
- [ ] **Step 2: Implement UI primitives (`Badge`, `MetricCard`, `Card`, `Button`, `TimelineItem`, `TypedText`)**
- [ ] **Step 3: Implement `SectionContainer`, `Navbar`, and `Footer`**
- [ ] **Step 4: Implement `src/app/layout.tsx` with SEO metadata and favicon**
- [ ] **Step 5: Verify build & typecheck**

Run: `npm run typecheck`  
Expected: PASS with 0 errors.

---

### Task 4: Interactive Story, Ethos & Landing Page Sections

**Files:**
- Create: `src/components/sections/Hero.tsx`
- Create: `src/components/sections/StoryEthos.tsx`
- Create: `src/components/sections/ProjectsGallery.tsx`
- Create: `src/components/sections/ExperienceTimeline.tsx`
- Create: `src/components/sections/SkillsMatrix.tsx`
- Create: `src/components/sections/ContactSection.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: UI components from Task 3, data models from Task 2.
- Produces: The complete single-page portfolio experience.

- [ ] **Step 1: Implement `Hero.tsx`** with headline, dynamic `TypedText`, active status badge, and CTA buttons.
- [ ] **Step 2: Implement `StoryEthos.tsx`** showcasing cultural roots, engineering philosophy, and the 3 core pillars.
- [ ] **Step 3: Implement `ProjectsGallery.tsx`** with category filters and project cards showing metrics and tech badges.
- [ ] **Step 4: Implement `ExperienceTimeline.tsx`** and `SkillsMatrix.tsx`.
- [ ] **Step 5: Implement `ContactSection.tsx`** with contact cards and interactive inquiry form.
- [ ] **Step 6: Assemble `src/app/page.tsx`** combining all sections.
- [ ] **Step 7: Run build test**

Run: `npm run build`  
Expected: Successfully generates static `/index.html`.

---

### Task 5: Interactive "Connect With Me" Floating Action & Modal

**Files:**
- Create: `src/components/connect/ConnectFab.tsx`
- Create: `src/components/connect/ConnectModal.tsx`
- Modify: `src/app/layout.tsx`

**Interfaces:**
- Consumes: `profileData` from `src/data/profile.ts`
- Produces: Accessible floating trigger button + animated modal drawer.

- [ ] **Step 1: Implement `ConnectModal.tsx`**
  - Instant one-click copy for email with animated "Copied!" feedback tooltip.
  - Direct links to LinkedIn, GitHub, WhatsApp, and Phone.
  - Quick contact message form.
  - Escape key & backdrop click handling to close.
- [ ] **Step 2: Implement `ConnectFab.tsx`**
  - Floating bottom-right action pill with subtle pulse glow: `⚡ Connect with Me`.
- [ ] **Step 3: Integrate into `src/app/layout.tsx`**
- [ ] **Step 4: Verify typecheck & client hydration**

Run: `npm run build`  
Expected: Build passes without client hydration errors.

---

### Task 6: Dynamic Project Case-Study Pages (`/projects/[slug]`)

**Files:**
- Create: `src/components/projects/ProjectHeader.tsx`
- Create: `src/components/projects/ArchitectureView.tsx`
- Create: `src/components/projects/ProjectNav.tsx`
- Create: `src/app/projects/[slug]/page.tsx`

**Interfaces:**
- Consumes: `projectsData` from `src/data/projects.ts`
- Produces: Statically exported case-study pages for every project in data.

- [ ] **Step 1: Implement `ProjectHeader.tsx`, `ArchitectureView.tsx`, and `ProjectNav.tsx`**
- [ ] **Step 2: Implement `src/app/projects/[slug]/page.tsx`**
  - Implement `generateStaticParams()` returning `[{ slug: 'retirement-benefits' }, { slug: 'hrms-payroll' }, { slug: 'devops-automation' }]`.
  - Implement `generateMetadata()` for dynamic page title and OpenGraph tags.
  - Render project overview, metrics, architecture story, features, and tech stack.
- [ ] **Step 3: Verify static export produces sub-routes**

Run: `npm run build`  
Expected: `out/projects/retirement-benefits/index.html`, `out/projects/hrms-payroll/index.html`, `out/projects/devops-automation/index.html` created.

---

### Task 7: GitHub Actions Deployment & Full Production Verification

**Files:**
- Create: `.github/workflows/deploy.yml`

**Interfaces:**
- Produces: Production-ready CI/CD pipeline deploying static Next.js export to GitHub Pages.

- [ ] **Step 1: Create `.github/workflows/deploy.yml`**

```yaml
name: Deploy Next.js Portfolio to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "22"
          cache: ${{ hashFiles('package-lock.json') != '' && 'npm' || '' }}
      - name: Install dependencies
        run: npm ci || npm install
      - name: Typecheck
        run: npm run typecheck
      - name: Build Next.js
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Verify static export output directory**

Verify `out/` directory contains:
- `out/index.html`
- `out/projects/retirement-benefits/index.html`
- `out/projects/hrms-payroll/index.html`
- `out/projects/devops-automation/index.html`
- `out/CNAME` (with `www.erbibeksah.com.np`)

- [ ] **Step 3: Verification Check**

Run: `npm run typecheck && npm run build`  
Expected: All tests and static exports pass with 0 errors.

