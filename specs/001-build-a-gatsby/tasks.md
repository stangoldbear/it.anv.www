# Tasks: MDX Content Migration for Associazione Nuova Vita Website

**Input**: Design documents from `/specs/001-build-a-gatsby/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/mdx-frontmatter-schema.yaml

**Tests**: No test tasks included (not requested in spec.md)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions
- Repository root: `/Users/userone/wa/it.assonuovavita.www/`
- MDX content: `/Users/userone/wa/it.assonuovavita.www/content/pages/`
- Components: `/Users/userone/wa/it.assonuovavita.www/src/components/`
- Templates: `/Users/userone/wa/it.assonuovavita.www/src/templates/`
- Styles: `/Users/userone/wa/it.assonuovavita.www/src/styles/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and directory structure

- [X] T001 Create `/Users/userone/wa/it.assonuovavita.www/content/pages/` directory for MDX content files
- [X] T002 Create `/Users/userone/wa/it.assonuovavita.www/src/templates/` directory for page templates
- [X] T003 Create `/Users/userone/wa/it.assonuovavita.www/src/types/` directory for TypeScript definitions

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T004 Update `/Users/userone/wa/it.assonuovavita.www/gatsby-config.ts` to configure gatsby-plugin-mdx with gatsby-remark-images and gatsby-remark-copy-linked-files plugins
- [X] T005 Update `/Users/userone/wa/it.assonuovavita.www/gatsby-config.ts` to add gatsby-source-filesystem for content/pages/ directory
- [X] T006 [P] Create `/Users/userone/wa/it.assonuovavita.www/src/styles/tokens.css` with design tokens (colors, spacing, typography, breakpoints) as CSS custom properties
- [X] T007 [P] Create `/Users/userone/wa/it.assonuovavita.www/src/styles/reset.css` with CSS reset/normalize
- [X] T008 [P] Update `/Users/userone/wa/it.assonuovavita.www/src/styles/global.css` to import tokens.css and reset.css
- [X] T009 [P] Create `/Users/userone/wa/it.assonuovavita.www/src/types/mdx.d.ts` with TypeScript type declarations for MDX modules
- [X] T010 [P] Create `/Users/userone/wa/it.assonuovavita.www/src/types/frontmatter.ts` with PageFrontmatter interface matching mdx-frontmatter-schema.yaml
- [X] T011 Create `/Users/userone/wa/it.assonuovavita.www/src/components/Header.tsx` with navigation component using GraphQL query for pages with showInNav: true
- [X] T012 Create `/Users/userone/wa/it.assonuovavita.www/src/components/Header.module.css` with styles using design tokens for navigation
- [X] T013 Create `/Users/userone/wa/it.assonuovavita.www/src/components/Footer.tsx` with organization contact information and links
- [X] T014 Create `/Users/userone/wa/it.assonuovavita.www/src/components/Footer.module.css` with styles using design tokens for footer
- [X] T015 Create `/Users/userone/wa/it.assonuovavita.www/src/components/Layout.tsx` with Header, Footer, and SEO (react-helmet) integration
- [X] T016 Create `/Users/userone/wa/it.assonuovavita.www/src/components/Layout.module.css` with main layout styles using design tokens
- [X] T017 Create `/Users/userone/wa/it.assonuovavita.www/src/templates/Page.tsx` with GraphQL query for MDX frontmatter and children rendering
- [X] T018 Create `/Users/userone/wa/it.assonuovavita.www/src/templates/Page.module.css` with article/header/main semantic structure styles
- [X] T019 Create `/Users/userone/wa/it.assonuovavita.www/gatsby-node.ts` with createPages API implementation to programmatically create pages from MDX files using Page template
- [X] T020 Create `/Users/userone/wa/it.assonuovavita.www/src/components/Button.tsx` with TypeScript interface for props (label, href, variant, external)
- [X] T021 Create `/Users/userone/wa/it.assonuovavita.www/src/components/Button.module.css` with styles for primary/secondary/outline variants using design tokens
- [X] T022 Create `/Users/userone/wa/it.assonuovavita.www/src/components/Hero.tsx` with props for title, description, and children (CTA buttons)
- [X] T023 Create `/Users/userone/wa/it.assonuovavita.www/src/components/Hero.module.css` with hero section styles using design tokens
- [X] T024 Create `/Users/userone/wa/it.assonuovavita.www/src/components/Card.tsx` with props for title, content, and optional image
- [X] T025 Create `/Users/userone/wa/it.assonuovavita.www/src/components/Card.module.css` with card component styles using design tokens
- [X] T026 Create `/Users/userone/wa/it.assonuovavita.www/gatsby-browser.tsx` with MDXProvider to inject Button, Hero, and Card components globally
- [X] T027 Create `/Users/userone/wa/it.assonuovavita.www/gatsby-ssr.tsx` with same MDXProvider configuration for server-side rendering

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Homepage with Clear Mission (Priority: P1) 🎯 MVP

**Goal**: Visitor immediately understands Associazione Nuova Vita's mission, sees featured content, and finds clear paths to key actions (donate, learn more, become a member)

**Independent Test**: Navigate to homepage and verify mission statement is visible, donation links are prominent, navigation works, and content is readable on mobile without horizontal scrolling

### Implementation for User Story 1

- [X] T028 [US1] Create `/Users/userone/wa/it.assonuovavita.www/content/pages/index.mdx` with frontmatter (title, description, slug: /, date, navOrder: 0)
- [X] T029 [US1] Migrate existing content from `/Users/userone/wa/it.assonuovavita.www/src/pages/index.tsx` to index.mdx using MDX format
- [X] T030 [US1] Add Hero component in index.mdx with mission statement and description
- [X] T031 [US1] Add Button components in index.mdx for primary CTAs (Dona Ora, 5x1000, Scopri di Più)
- [X] T032 [US1] Verify homepage renders at http://localhost:8000/ with proper semantic HTML structure
- [X] T033 [US1] Test keyboard navigation through all interactive elements (links, buttons)
- [X] T034 [US1] Test homepage on mobile viewport (375px) to ensure no horizontal scrolling

**Checkpoint**: Homepage is fully functional with mission statement, CTAs, and mobile responsiveness

---

## Phase 4: User Story 2 - Learn About the Organization (Priority: P1)

**Goal**: Potential donor or volunteer understands organization's history, values, and approach before deciding to get involved

**Independent Test**: Navigate to /chi-siamo and verify complete "about us" content is displayed with proper formatting, images, readable text, and clear next steps

### Implementation for User Story 2

- [ ] T035 [US2] Create `/Users/userone/wa/it.assonuovavita.www/content/pages/chi-siamo.mdx` with frontmatter (title: "Chi Siamo", description, slug: /chi-siamo, date, navOrder: 10)
- [ ] T036 [US2] Migrate existing content from `/Users/userone/wa/it.assonuovavita.www/src/pages/chi-siamo.tsx` to chi-siamo.mdx preserving all text structure
- [ ] T037 [US2] Organize content with clear heading hierarchy (## La Nostra Storia, ## I Nostri Valori, ## Il Nostro Team)
- [ ] T038 [US2] Add Card components for highlighting organizational values using design system components
- [ ] T039 [US2] Add Button components at page end for next steps (contact, donate, become member)
- [ ] T040 [US2] Verify /chi-siamo page renders with proper semantic HTML and heading structure
- [ ] T041 [US2] Verify page is accessible in main navigation menu from Header component

**Checkpoint**: Chi Siamo page is complete with organization information and clear next steps

---

## Phase 5: User Story 3 - Explore Services Offered (Priority: P2)

**Goal**: Person in need or referring professional understands what assistance the organization provides and how to access it

**Independent Test**: Navigate to /servizi and verify all service offerings are listed with descriptions, eligibility, and access information

### Implementation for User Story 3

- [ ] T042 [US3] Create `/Users/userone/wa/it.assonuovavita.www/content/pages/servizi.mdx` with frontmatter (title: "Servizi", description, slug: /servizi, date, navOrder: 20)
- [ ] T043 [US3] Migrate existing content from `/Users/userone/wa/it.assonuovavita.www/src/pages/servizi.tsx` to servizi.mdx
- [ ] T044 [US3] Structure services list with heading per service (## Servizio 1, ## Servizio 2, etc.)
- [ ] T045 [US3] Use Card components to display each service with description, eligibility, and access information
- [ ] T046 [US3] Add contact information or next steps for each service
- [ ] T047 [US3] Verify /servizi page renders with all services listed and accessible
- [ ] T048 [US3] Verify page appears in navigation menu with correct order

**Checkpoint**: Servizi page is complete with comprehensive service information

---

## Phase 6: User Story 4 - Make a Donation (Priority: P1)

**Goal**: Supporter finds payment instructions and understands how their contribution will be used

**Independent Test**: Navigate to /donate and verify bank transfer details are visible, donation purpose is explained, and the process is clear

### Implementation for User Story 4

- [ ] T049 [US4] Create `/Users/userone/wa/it.assonuovavita.www/content/pages/donate.mdx` with frontmatter (title: "Dona Ora", description, slug: /donate, date, navOrder: 30)
- [ ] T050 [US4] Migrate existing content from `/Users/userone/wa/it.assonuovavita.www/src/pages/donate.tsx` to donate.mdx
- [ ] T051 [US4] Display bank account details (IBAN) prominently using clear formatting and headings
- [ ] T052 [US4] Display organization tax code (codice fiscale) clearly for tax deduction purposes
- [ ] T053 [US4] Add section explaining how donations are used and impact transparency
- [ ] T054 [US4] Add section with instructions for obtaining donation receipts for tax purposes
- [ ] T055 [US4] Verify /donate page displays IBAN and codice fiscale clearly and is easily readable
- [ ] T056 [US4] Test that page is accessible from homepage CTA buttons

**Checkpoint**: Donate page is complete with clear payment instructions and transparency information

---

## Phase 7: User Story 5 - Contribute 5x1000 Tax Designation (Priority: P2)

**Goal**: Italian taxpayer finds organization's tax code and understands how to designate 5x1000 during tax season

**Independent Test**: Navigate to /5x1000 and verify codice fiscale (91298160374) is prominently displayed with step-by-step instructions

### Implementation for User Story 5

- [ ] T057 [US5] Create `/Users/userone/wa/it.assonuovavita.www/content/pages/5x1000.mdx` with frontmatter (title: "5x1000", description, slug: /5x1000, date, navOrder: 40)
- [ ] T058 [US5] Migrate existing content from `/Users/userone/wa/it.assonuovavita.www/src/pages/5x1000.tsx` to 5x1000.mdx
- [ ] T059 [US5] Display codice fiscale 91298160374 prominently at top of page with large, readable font
- [ ] T060 [US5] Add step-by-step instructions for filling out 5x1000 section on tax forms
- [ ] T061 [US5] Include guidance for both online and paper tax declaration methods
- [ ] T062 [US5] Add contact information for assistance with 5x1000 designation
- [ ] T063 [US5] Verify /5x1000 page displays codice fiscale prominently and instructions are clear
- [ ] T064 [US5] Test that page is accessible from homepage CTA and navigation menu

**Checkpoint**: 5x1000 page is complete with clear tax designation instructions

---

## Phase 8: User Story 6 - Become a Member (Priority: P3)

**Goal**: Person inspired by mission learns about membership benefits, requirements, and registration process

**Independent Test**: Navigate to /diventa-socio and verify membership information, benefits, requirements, and enrollment process are explained

### Implementation for User Story 6

- [ ] T065 [US6] Create `/Users/userone/wa/it.assonuovavita.www/content/pages/diventa-socio.mdx` with frontmatter (title: "Diventa Socio", description, slug: /diventa-socio, date, navOrder: 50)
- [ ] T066 [US6] Migrate existing content from `/Users/userone/wa/it.assonuovavita.www/src/pages/diventa-socio.tsx` to diventa-socio.mdx
- [ ] T067 [US6] Add section describing membership benefits and responsibilities
- [ ] T068 [US6] Add section with eligibility criteria and membership fees (if any)
- [ ] T069 [US6] Add enrollment process with forms or contact information
- [ ] T070 [US6] Add section about member communications and involvement opportunities
- [ ] T071 [US6] Verify /diventa-socio page renders with complete membership information
- [ ] T072 [US6] Verify page appears in navigation menu

**Checkpoint**: Diventa Socio page is complete with membership information and enrollment process

---

## Phase 9: User Story 7 - Access Documents and Resources (Priority: P3)

**Goal**: Member or stakeholder downloads forms, views statutes, annual reports, or other official documentation

**Independent Test**: Navigate to /documenti and verify documents are listed, categorized, and accessible for download

### Implementation for User Story 7

- [ ] T073 [US7] Create `/Users/userone/wa/it.assonuovavita.www/content/pages/documenti.mdx` with frontmatter (title: "Documenti", description, slug: /documenti, date, navOrder: 60)
- [ ] T074 [US7] Migrate existing content from `/Users/userone/wa/it.assonuovavita.www/src/pages/documenti.tsx` to documenti.mdx
- [ ] T075 [US7] Create `/Users/userone/wa/it.assonuovavita.www/src/components/DocumentLink.tsx` component with props for title, description, href, fileSize, date
- [ ] T076 [US7] Create `/Users/userone/wa/it.assonuovavita.www/src/components/DocumentLink.module.css` with styles for document links
- [ ] T077 [US7] Add DocumentLink component to MDXProvider in gatsby-browser.tsx and gatsby-ssr.tsx
- [ ] T078 [US7] Organize documents by category (## Governance, ## Forms, ## Reports) in documenti.mdx
- [ ] T079 [US7] Use DocumentLink components for each document with appropriate metadata
- [ ] T080 [US7] Verify /documenti page renders with all documents listed and links functional
- [ ] T081 [US7] Test document download functionality by clicking links

**Checkpoint**: Documenti page is complete with categorized, accessible documents

---

## Phase 10: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories and site-wide quality

- [ ] T082 [P] Update `/Users/userone/wa/it.assonuovavita.www/src/pages/404.tsx` to reference design tokens and maintain consistent styling
- [ ] T083 [P] Verify all MDX frontmatter validates against schema in `/Users/userone/wa/it.assonuovavita.www/specs/001-build-a-gatsby/contracts/mdx-frontmatter-schema.yaml`
- [ ] T084 Add frontmatter validation using Zod in `/Users/userone/wa/it.assonuovavita.www/gatsby-node.ts` onCreateNode API
- [ ] T085 [P] Verify all images have descriptive alt text in Italian
- [ ] T086 [P] Verify all external links have rel="noopener noreferrer" attributes
- [ ] T087 Add structured data (JSON-LD) for NGO schema in Layout component
- [ ] T088 [P] Optimize all images in `/Users/userone/wa/it.assonuovavita.www/static/images/` directory
- [ ] T089 Review and remove unused TSX page files from `/Users/userone/wa/it.assonuovavita.www/src/pages/` after MDX migration
- [ ] T090 Update `/Users/userone/wa/it.assonuovavita.www/README.md` with content editing instructions for MDX files

---

## Phase 11: Constitution Compliance Verification

**Purpose**: Verify all constitutional requirements from `.specify/memory/constitution.md` are met

### Accessibility Audit (WCAG AA)

- [ ] T091 Accessibility audit: Test keyboard navigation on all pages - Tab through interactive elements, verify visible focus indicators
- [ ] T092 Accessibility audit: Test screen reader with NVDA or VoiceOver on homepage, chi-siamo, and donate pages
- [ ] T093 Accessibility audit: Verify color contrast ratios meet 4.5:1 for normal text using browser DevTools or axe extension
- [ ] T094 Accessibility audit: Verify all form inputs have associated labels (if forms exist)
- [ ] T095 Accessibility audit: Verify semantic HTML structure (nav, main, article, footer) on all pages
- [ ] T096 Accessibility audit: Verify heading hierarchy is logical with no skipped levels on all pages

### Performance Audit

- [ ] T097 [P] Performance audit: Run `npm run build` to generate production build
- [ ] T098 Performance audit: Run Lighthouse audit on homepage - verify Performance ≥ 90, FCP < 1.8s, LCP < 2.5s, CLS < 0.1, TTI < 3.8s
- [ ] T099 [P] Performance audit: Run Lighthouse audit on /chi-siamo page - verify Performance ≥ 90
- [ ] T100 [P] Performance audit: Run Lighthouse audit on /donate page - verify Performance ≥ 90
- [ ] T101 [P] Performance audit: Run Lighthouse audit on /servizi page - verify Performance ≥ 90
- [ ] T102 Review bundle size with GATSBY_WEBPACK_BUNDLE_ANALYZER=1 npm run build and optimize if necessary

### SEO Audit

- [ ] T103 [P] SEO audit: Verify all 7 pages have unique title tags in format "[Page Name] | Associazione Nuova Vita"
- [ ] T104 [P] SEO audit: Verify all 7 pages have unique meta descriptions under 160 characters
- [ ] T105 SEO audit: Verify sitemap.xml is generated at http://localhost:9000/sitemap.xml and includes all 7 pages (excluding 404)
- [ ] T106 [P] SEO audit: Verify all images use optimized formats and have descriptive alt text
- [ ] T107 SEO audit: Run Lighthouse SEO audit on all pages - verify SEO score = 100

### TypeScript Audit

- [ ] T108 TypeScript audit: Run `npm run typecheck` and verify zero errors
- [ ] T109 TypeScript audit: Review codebase for any usage of `any` type and ensure justification comments exist
- [ ] T110 TypeScript audit: Verify all component props have TypeScript interfaces defined
- [ ] T111 TypeScript audit: Verify GraphQL queries use generated types from gatsby-types.d.ts

### Design System Compliance

- [ ] T112 Code review: Verify no magic numbers for spacing, colors, or typography in component CSS files
- [ ] T113 Code review: Verify all components reference CSS custom properties from tokens.css
- [ ] T114 Code review: Verify no inline styles in MDX files
- [ ] T115 Code review: Verify all MDX files use only documented components (Button, Hero, Card, DocumentLink)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-9)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order: P1 stories (US1, US2, US4) → P2 stories (US3, US5) → P3 stories (US6, US7)
- **Polish (Phase 10)**: Depends on all desired user stories being complete
- **Constitution Compliance (Phase 11)**: Depends on Polish phase completion

### User Story Dependencies

- **User Story 1 - Homepage (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 - Chi Siamo (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 3 - Servizi (P2)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 4 - Donate (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 5 - 5x1000 (P2)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 6 - Diventa Socio (P3)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 7 - Documenti (P3)**: Can start after Foundational (Phase 2) - Requires DocumentLink component (T075-T077)

### Within Each User Story

- Create MDX file with frontmatter first
- Migrate content from existing TSX file
- Add MDX components (Hero, Button, Card, DocumentLink)
- Verify page renders correctly
- Test accessibility and navigation
- Story complete before moving to next priority

### Parallel Opportunities

- **Phase 1 (Setup)**: All 3 tasks can run in parallel (different directories)
- **Phase 2 (Foundational)**:
  - T006, T007, T008 (CSS files) can run in parallel
  - T009, T010 (TypeScript types) can run in parallel
  - T020-T025 (Components and CSS) can be parallelized by component
- **Phase 3-9 (User Stories)**: Once Foundational completes, all 7 user stories can start in parallel if team capacity allows
- **Phase 10 (Polish)**: T082, T083, T085, T086, T088 can run in parallel (different files)
- **Phase 11 (Constitution Compliance)**:
  - Performance audits (T099-T101) can run in parallel
  - SEO audits (T103, T104, T106) can run in parallel

---

## Parallel Example: Foundational Phase (Phase 2)

```bash
# Launch all CSS-related tasks together:
T006: "Create tokens.css with design tokens"
T007: "Create reset.css"
T008: "Update global.css to import tokens and reset"

# Launch all TypeScript type tasks together:
T009: "Create mdx.d.ts"
T010: "Create frontmatter.ts"

# Launch all component creation tasks together (by component):
T020 + T021: "Create Button.tsx and Button.module.css"
T022 + T023: "Create Hero.tsx and Hero.module.css"
T024 + T025: "Create Card.tsx and Card.module.css"
```

---

## Parallel Example: User Stories (Phase 3-9)

```bash
# With multiple developers, after Foundational phase completes:
Developer A: Phase 3 (Homepage - US1)
Developer B: Phase 4 (Chi Siamo - US2)
Developer C: Phase 6 (Donate - US4)
Developer D: Phase 5 (Servizi - US3)

# Each story is independent and can be tested separately
```

---

## Implementation Strategy

### MVP First (P1 Stories Only)

**Goal**: Deliver core functionality with highest business value

1. Complete Phase 1: Setup (T001-T003)
2. Complete Phase 2: Foundational (T004-T027) - **CRITICAL - blocks all stories**
3. Complete Phase 3: User Story 1 - Homepage (T028-T034)
4. Complete Phase 4: User Story 2 - Chi Siamo (T035-T041)
5. Complete Phase 6: User Story 4 - Donate (T049-T056)
6. **STOP and VALIDATE**: Test all P1 stories independently
7. Complete Phase 10: Polish (T082-T090)
8. Complete Phase 11: Constitution Compliance (T091-T115)
9. Deploy MVP with homepage, about, and donate pages

**MVP Task Count**: 3 (setup) + 24 (foundational) + 7 (US1) + 7 (US2) + 8 (US4) + 9 (polish) + 25 (compliance) = **83 tasks**

### Incremental Delivery (All Stories)

**Goal**: Add features incrementally after MVP

1. Complete MVP (83 tasks above)
2. Deploy/demo MVP
3. Add Phase 5: User Story 3 - Servizi (T042-T048) → Test independently → Deploy
4. Add Phase 7: User Story 5 - 5x1000 (T057-T064) → Test independently → Deploy
5. Add Phase 8: User Story 6 - Diventa Socio (T065-T072) → Test independently → Deploy
6. Add Phase 9: User Story 7 - Documenti (T073-T081) → Test independently → Deploy
7. Each story adds value without breaking previous stories

**Full Task Count**: 83 (MVP) + 7 (US3) + 8 (US5) + 8 (US6) + 9 (US7) = **115 tasks**

### Parallel Team Strategy

**Goal**: Maximum velocity with multiple developers

With multiple developers:

1. Team completes Phase 1: Setup together (3 tasks)
2. Team completes Phase 2: Foundational together with parallelization (24 tasks)
3. Once Foundational is done, split by priority:
   - **Developer A**: Phase 3 (Homepage - US1) - 7 tasks
   - **Developer B**: Phase 4 (Chi Siamo - US2) - 7 tasks
   - **Developer C**: Phase 6 (Donate - US4) - 8 tasks
4. After P1 stories complete:
   - **Developer A**: Phase 5 (Servizi - US3) - 7 tasks
   - **Developer B**: Phase 7 (5x1000 - US5) - 8 tasks
5. After P2 stories complete:
   - **Developer A**: Phase 8 (Diventa Socio - US6) - 8 tasks
   - **Developer B**: Phase 9 (Documenti - US7) - 9 tasks
6. Team completes Phase 10: Polish together (9 tasks)
7. Team completes Phase 11: Constitution Compliance together (25 tasks)

**Estimated Timeline**: With 3 developers, can complete in ~60% of sequential time

---

## Task Summary

### Total Task Count: 115 tasks

### Tasks by Phase:
- **Phase 1 (Setup)**: 3 tasks
- **Phase 2 (Foundational)**: 24 tasks
- **Phase 3 (US1 - Homepage - P1)**: 7 tasks
- **Phase 4 (US2 - Chi Siamo - P1)**: 7 tasks
- **Phase 5 (US3 - Servizi - P2)**: 7 tasks
- **Phase 6 (US4 - Donate - P1)**: 8 tasks
- **Phase 7 (US5 - 5x1000 - P2)**: 8 tasks
- **Phase 8 (US6 - Diventa Socio - P3)**: 8 tasks
- **Phase 9 (US7 - Documenti - P3)**: 9 tasks
- **Phase 10 (Polish)**: 9 tasks
- **Phase 11 (Constitution Compliance)**: 25 tasks

### Tasks by User Story:
- **Setup & Foundational**: 27 tasks (prerequisite for all stories)
- **User Story 1 (Homepage - P1)**: 7 tasks
- **User Story 2 (Chi Siamo - P1)**: 7 tasks
- **User Story 3 (Servizi - P2)**: 7 tasks
- **User Story 4 (Donate - P1)**: 8 tasks
- **User Story 5 (5x1000 - P2)**: 8 tasks
- **User Story 6 (Diventa Socio - P3)**: 8 tasks
- **User Story 7 (Documenti - P3)**: 9 tasks
- **Cross-Cutting (Polish + Compliance)**: 34 tasks

### Tasks by Priority:
- **P1 (Must Have)**: Setup (27) + US1 (7) + US2 (7) + US4 (8) + Cross-Cutting (34) = **83 tasks**
- **P2 (Should Have)**: US3 (7) + US5 (8) = **15 tasks**
- **P3 (Nice to Have)**: US6 (8) + US7 (9) = **17 tasks**

### Parallel Opportunities:
- **Phase 1**: 3 tasks can run in parallel
- **Phase 2**: Up to 10 tasks can run in parallel (CSS, types, components)
- **Phase 3-9**: All 7 user stories can run in parallel after Phase 2 (if team capacity allows)
- **Phase 10**: Up to 5 tasks can run in parallel
- **Phase 11**: Up to 6 tasks can run in parallel (audits)

**Total parallelizable tasks**: 47 tasks marked with [P]

---

## MVP Scope Recommendation

**Recommended MVP**: Phase 1 + Phase 2 + US1 + US2 + US4 + Phase 10 + Phase 11

**Rationale**:
- **Homepage (US1)**: Essential entry point that communicates mission and guides visitors
- **Chi Siamo (US2)**: Builds trust and credibility for potential donors/volunteers
- **Donate (US4)**: Direct path to financial support, critical for non-profit operations
- **Skipped initially**:
  - Servizi (US3): Can be added post-launch without blocking core donation flow
  - 5x1000 (US5): Seasonal (tax season), can be added before tax filing period
  - Diventa Socio (US6): Membership is important but secondary to donations
  - Documenti (US7): Transparency is valuable but not blocking for initial launch

**MVP Timeline Estimate**:
- Sequential: 83 tasks × ~30 min avg = ~41 hours (~5 days for 1 developer)
- With 2 developers: ~60% = ~25 hours (~3 days)
- With 3 developers: ~50% = ~20 hours (~2.5 days)

**Post-MVP Additions** (in order):
1. Add US5 (5x1000) before tax season - 8 tasks
2. Add US3 (Servizi) to complete service information - 7 tasks
3. Add US6 (Diventa Socio) to build membership - 8 tasks
4. Add US7 (Documenti) for transparency - 9 tasks

---

## Notes

- **[P] tasks**: Different files, no dependencies - can be executed in parallel
- **[Story] label**: Maps task to specific user story for traceability (US1-US7)
- Each user story is independently completable and testable
- No test tasks included (not requested in spec.md)
- Commit after each task or logical group (e.g., component + CSS module)
- Stop at checkpoints to validate story independently
- All file paths are absolute paths from repository root
- Design tokens must be used (no magic numbers in CSS)
- All TypeScript must pass strict type checking
- All pages must meet WCAG AA accessibility standards
- All pages must achieve Lighthouse Performance ≥ 90
