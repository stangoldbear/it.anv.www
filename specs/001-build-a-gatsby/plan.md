# Implementation Plan: MDX Content Migration for Associazione Nuova Vita Website

**Branch**: `001-build-a-gatsby` | **Date**: 2025-10-10 | **Spec**: [/specs/001-build-a-gatsby/spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-build-a-gatsby/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Migrate all existing page content from TSX components to MDX format using Gatsby v5 and gatsby-plugin-mdx. Content will be stored under `/content/pages/` with a custom Page template component that renders MDX children. The gatsby-node.ts file will programmatically create pages from MDX files using Gatsby's Node APIs. This approach enables non-technical content editors to update pages without modifying TypeScript code while maintaining strict type safety, WCAG AA accessibility standards, and performance budgets (Lighthouse Performance ≥ 90).

## Technical Context

**Language/Version**: TypeScript 5.3.3 with strict mode enabled
**Primary Dependencies**: Gatsby v5.14.6, gatsby-plugin-mdx v5.15.0, @mdx-js/react v3.1.1, React v18.2.0
**Storage**: File-based content management (MDX files in `/content/pages/`, static assets in `/static/`)
**Testing**: Manual accessibility testing (keyboard nav, screen reader), Lighthouse audits, TypeScript strict compilation
**Target Platform**: Static site generation (SSG) for web, deployed to Netlify, browser support for modern browsers (Chrome, Firefox, Safari, Edge last 2 versions)
**Project Type**: Web application (static site generator with content-driven architecture)
**Performance Goals**: Lighthouse Performance ≥ 90, FCP < 1.8s, LCP < 2.5s, CLS < 0.1, TTI < 3.8s
**Constraints**: WCAG 2.1 Level AA compliance required, Italian content only, no CMS backend, all content via Git workflow
**Scale/Scope**: 8 pages (index, chi-siamo, servizi, donate, 5x1000, diventa-socio, documenti, 404), small non-profit website serving Italian community

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Verify compliance with `.specify/memory/constitution.md` principles:

- [x] **Accessibility First (WCAG AA)**: MDX pages will use semantic HTML (nav, main, article, footer), all interactive elements keyboard navigable, alt text required for images via frontmatter validation, 4.5:1 contrast ratios enforced in design tokens
- [x] **Content-Driven Architecture (MDX)**: All editorial content in MDX files under `/content/pages/`, MDX uses only approved design-system components (Button, Hero, Card), content editors can modify MDX without touching TypeScript
- [x] **SEO & Performance**: Every MDX file requires frontmatter with title/description, gatsby-plugin-sitemap generates sitemap.xml, gatsby-plugin-image optimizes images, performance budgets enforced via Lighthouse CI
- [x] **Design System Consistency**: Page template references CSS modules with design tokens for spacing/colors/typography, no inline styles permitted in MDX files, all components use centralized token file
- [x] **TypeScript Quality**: All components have TypeScript interfaces, GraphQL queries use generated types, strict mode enabled in tsconfig.json, no `any` types without justification comments
- [x] **Testing Discipline**: Manual accessibility testing required (keyboard navigation, screen reader spot checks), Lighthouse audits before merge, TypeScript compilation (`npm run typecheck`) must pass

*If any principle cannot be met, document justification in Complexity Tracking section below.*

## Project Structure

### Documentation (this feature)

```
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```
/Users/userone/wa/it.assonuovavita.www/
├── content/
│   └── pages/                    # MDX content files (NEW)
│       ├── index.mdx            # Homepage
│       ├── chi-siamo.mdx        # About Us
│       ├── servizi.mdx          # Services
│       ├── donate.mdx           # Donation page
│       ├── 5x1000.mdx           # Tax designation
│       ├── diventa-socio.mdx    # Membership
│       └── documenti.mdx        # Documents
│
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── Layout.tsx          # Site layout wrapper
│   │   ├── Header.tsx          # Site header with navigation
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Hero.tsx            # Hero section component
│   │   ├── Button.tsx          # Button component
│   │   └── Card.tsx            # Card component
│   │
│   ├── templates/              # Page templates (NEW)
│   │   └── Page.tsx            # MDX page template
│   │
│   ├── pages/                  # Static pages (non-MDX)
│   │   └── 404.tsx             # 404 error page
│   │
│   ├── styles/                 # Global styles and tokens
│   │   ├── global.css          # Global styles
│   │   ├── tokens.css          # Design tokens (CSS custom properties)
│   │   └── reset.css           # CSS reset
│   │
│   └── types/                  # TypeScript type definitions
│       └── mdx.d.ts            # MDX type declarations
│
├── static/                     # Static assets
│   ├── images/                 # Images
│   └── documents/              # Downloadable files
│
├── gatsby-config.ts            # Gatsby configuration
├── gatsby-node.ts              # Gatsby Node API (page creation) (NEW/MODIFIED)
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

**Structure Decision**: This is a web application using Gatsby's static site generator architecture. The project follows a content-driven approach where MDX files in `/content/pages/` are the source of truth for page content. The `gatsby-node.ts` file programmatically creates pages from these MDX files using the `createPages` API, mapping each MDX file to the Page template component. Components in `/src/components/` are reusable design-system elements that can be imported and used within MDX files. This structure separates content (MDX) from presentation logic (TypeScript/React components) while maintaining strict type safety.

## Complexity Tracking

*Fill ONLY if Constitution Check has violations that must be justified*

No constitutional violations. All six principles are fully satisfied by this implementation plan.
