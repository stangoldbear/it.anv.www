<!--
SYNC IMPACT REPORT
==================
Version Change: INITIAL → 1.0.0
Rationale: Initial constitution creation for Associazione Nuova Vita website project

Principles Defined:
- I. Accessibility First (WCAG AA)
- II. Content-Driven Architecture (MDX)
- III. SEO & Performance Standards
- IV. Design System Consistency
- V. TypeScript Quality
- VI. Testing Discipline

Templates Status:
✅ plan-template.md - Aligned (Constitution Check section references this file)
✅ spec-template.md - Aligned (Requirements sections support functional/non-functional split)
✅ tasks-template.md - Aligned (Task organization supports testing discipline)
✅ checklist-template.md - Aligned (Can generate WCAG AA, SEO, performance checklists)

Follow-up Actions:
- None required - all placeholders filled with project-specific values
==================
-->

# Associazione Nuova Vita Website Constitution

## Core Principles

### I. Accessibility First (WCAG AA)

Every feature, component, and content page MUST meet WCAG 2.1 Level AA standards.

**Non-negotiable rules:**

- All interactive elements MUST be keyboard navigable with visible focus indicators
- Color contrast ratios MUST meet minimum 4.5:1 for normal text, 3:1 for large text
- All images and icons MUST have appropriate alt text or aria-labels
- Form inputs MUST have associated labels and error messages
- Semantic HTML MUST be used (nav, main, article, section, header, footer)
- ARIA attributes MUST be used correctly and only when semantic HTML is insufficient

**Rationale:** Associazione Nuova Vita serves the community and must ensure all users, regardless of ability, can access information and services. Accessibility is a legal requirement and moral imperative.

### II. Content-Driven Architecture (MDX)

All editorial content MUST be authored in MDX format with clear separation from presentation logic.

**Non-negotiable rules:**

- Page content MUST reside in MDX files within the `/content/pages/` directory structure
- MDX files MUST use only approved, documented components from the design system
- Components used in MDX MUST accept props via frontmatter or inline syntax
- No inline styles or one-off components in MDX files
- Content editors MUST be able to update MDX without touching TypeScript/React code

**Rationale:** Separating content from code enables non-technical staff to manage website content safely and independently. MDX provides the flexibility to embed interactive components while maintaining content portability.

### III. SEO & Performance Standards

All pages MUST be optimized for search engines and meet defined performance budgets.

**Non-negotiable rules:**

- Every page MUST have unique, descriptive title and meta description
- All pages MUST be included in the generated sitemap (gatsby-plugin-sitemap)
- Images MUST use Gatsby's image optimization (gatsby-plugin-image)
- Performance budgets:
  - Lighthouse Performance score ≥ 90
  - First Contentful Paint (FCP) < 1.8s
  - Largest Contentful Paint (LCP) < 2.5s
  - Cumulative Layout Shift (CLS) < 0.1
  - Time to Interactive (TTI) < 3.8s
- JavaScript bundles MUST be code-split per route
- Critical CSS MUST be inlined, non-critical CSS deferred

**Rationale:** As a non-profit, online visibility directly impacts mission success. Fast load times improve user experience and search rankings, especially for users with slower connections.

### IV. Design System Consistency

All UI components MUST use tokens from the design system for colors, spacing, typography, and breakpoints.

**Non-negotiable rules:**

- NO magic numbers for spacing, colors, or font sizes in component code
- All components MUST reference CSS custom properties or TypeScript constants for tokens
- New components MUST be documented with usage examples
- Design token changes MUST be centralized in a single source of truth file
- Component library MUST be reviewed quarterly for consolidation opportunities

**Rationale:** Consistency builds user trust and reduces cognitive load. Centralized tokens enable rapid design updates and ensure accessibility requirements (contrast, sizing) are met systematically.

### V. TypeScript Quality

All code MUST be written in TypeScript with strict type checking enabled and no `any` types.

**Non-negotiable rules:**

- TypeScript strict mode MUST be enabled in `tsconfig.json`
- NO usage of `any`, `as any`, or `@ts-ignore` without explicit justification in code comments
- All component props MUST have TypeScript interfaces
- All functions MUST have explicit return types
- GraphQL queries MUST use generated types from `gatsby-types.d.ts`
- Code MUST pass `npm run typecheck` without errors before committing

**Rationale:** TypeScript prevents entire classes of runtime errors and serves as living documentation. Strict typing catches bugs during development, not in production.

### VI. Testing Discipline

Tests COULD be written for business-critical components and utility functions.

**Non-negotiable rules:**

- Unit tests COULD BE REQUIRED for:
  - All utility functions and helpers
  - Complex stateful components
  - Form validation logic
  - Data transformation functions
- Tests MUST be co-located with components (`.test.ts` or `.test.tsx` files)
- Tests MUST run successfully before merging: `npm test` passes
- Test coverage for tested modules MUST exceed 80%
- Visual regression testing RECOMMENDED for design-system components

**Rationale:** While comprehensive test coverage may be resource-intensive for a non-profit, testing critical paths prevents regressions and documents expected behavior for future contributors.

## Non-Functional Requirements

### Browser Support

- Modern browsers: Chrome, Firefox, Safari, Edge (last 2 versions)
- Mobile browsers: iOS Safari, Chrome Android (last 2 versions)
- NO support required for Internet Explorer

### Deployment Standards

- All changes MUST be deployed via Netlify with preview builds for branches
- Main branch deploys automatically to production (https://www.assonuovavita.it)
- Preview URLs MUST be tested for accessibility and performance before merge

### Content Guidelines

- All content MUST be in Italian unless explicitly multilingual
- Dates MUST use ISO 8601 format (YYYY-MM-DD) in frontmatter
- Donation and 5x1000 pages MUST comply with Italian non-profit regulations

## Development Workflow

### Code Review Requirements

- All code changes MUST go through pull request review
- At least one approval REQUIRED before merging
- Reviewer MUST verify:
  - TypeScript checks pass (`npm run typecheck`)
  - Build succeeds (`npm run build`)
  - Accessibility: keyboard navigation works, contrast is sufficient
  - No console errors or warnings
  - Code follows naming conventions and structure

### Quality Gates

Before merging, the following MUST pass:

1. TypeScript compilation (`npm run typecheck`)
2. Build process (`npm run build`)
3. Manual accessibility check (keyboard nav + screen reader spot check)
4. Lighthouse audit in preview (Performance ≥ 90, Accessibility = 100)

### Documentation Standards

- All components in `src/components/` MUST have JSDoc comments
- Complex utilities MUST have usage examples in comments
- Breaking changes MUST be documented in commit messages
- README MUST be kept current with setup instructions

## Governance

**Constitution Authority**: This constitution supersedes all other coding practices and conventions. When practices conflict with these principles, the constitution takes precedence.

**Amendment Procedure**:

1. Proposed amendments MUST be documented in a pull request with rationale
2. Major changes require sign-off from project maintainer
3. Breaking changes require a migration plan before adoption
4. All amendments trigger a version bump (semantic versioning)

**Compliance Review**:

- All pull requests MUST verify alignment with constitution principles
- Quarterly review of codebase for constitutional compliance
- Violations MUST be justified in writing or remediated
- Persistent justified violations indicate need for constitutional amendment

**Version Control**:

- MAJOR: Backward incompatible changes (principle removal or redefinition)
- MINOR: New principles added or materially expanded guidance
- PATCH: Clarifications, wording fixes, non-semantic refinements

**Runtime Guidance**: For detailed implementation guidance during feature development, refer to the planning workflow documented in `.specify/templates/plan-template.md` and related spec files.

---

**Version**: 1.0.1 | **Ratified**: 2025-10-10 | **Last Amended**: 2025-10-10
