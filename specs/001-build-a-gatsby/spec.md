# Feature Specification: MDX Content Migration for Associazione Nuova Vita Website

**Feature Branch**: `001-build-a-gatsby`
**Created**: 2025-10-10
**Status**: Draft
**Input**: User description: "Build a Gatsby v5 site with MDX pages that mirror http://www.assonuovavita.it sections..."

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Homepage with Clear Mission (Priority: P1)

A visitor arrives at the website homepage and immediately understands Associazione Nuova Vita's mission, sees featured content, and finds clear paths to key actions (donate, learn more, become a member).

**Why this priority**: The homepage is the primary entry point and must effectively communicate the organization's purpose and guide visitors to their most likely goals. This is essential for achieving the organization's mission of raising awareness and support.

**Independent Test**: Can be fully tested by navigating to the homepage and verifying that the mission statement is visible, donation links are prominent, and navigation to other sections works. Delivers a complete landing experience.

**Acceptance Scenarios**:

1. **Given** a visitor arrives at the homepage, **When** the page loads, **Then** they see the organization's mission statement within the first viewport
2. **Given** a visitor is on the homepage, **When** they look for ways to help, **Then** prominent calls-to-action for donations and 5x1000 are visible
3. **Given** a visitor wants to learn more, **When** they view the homepage, **Then** navigation links to "Chi Siamo", "Servizi", and other key sections are clearly accessible
4. **Given** a visitor is on mobile, **When** they access the homepage, **Then** all content is readable and navigable without horizontal scrolling

---

### User Story 2 - Learn About the Organization (Priority: P1)

A potential donor or volunteer visits the "Chi Siamo" (About Us) page to understand the organization's history, values, and approach before deciding to get involved.

**Why this priority**: Trust and transparency are critical for non-profits. Visitors need to understand who the organization is before committing time or money. This content already exists and needs migration to MDX.

**Independent Test**: Navigate to /chi-siamo and verify that the complete "about us" content is displayed with proper formatting, images (if any), and readable text. The page tells a complete story independently.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to the "Chi Siamo" page, **When** the page loads, **Then** they see the organization's values, history, and mission statement
2. **Given** a visitor reads the "Chi Siamo" content, **When** they scroll through the page, **Then** content is organized with clear headings and readable paragraphs
3. **Given** a visitor wants to see who runs the organization, **When** they view the page, **Then** information about the leadership or team structure is available
4. **Given** a visitor finishes reading, **When** they reach the end of the page, **Then** clear next steps (contact, donate, become member) are presented

---

### User Story 3 - Explore Services Offered (Priority: P2)

A person in need or a referring professional visits the "Servizi" (Services) page to understand what assistance the organization provides and how to access it.

**Why this priority**: Communicating available services is essential for reaching the target beneficiaries. This content enables the organization's core mission but is secondary to establishing credibility and donation paths.

**Independent Test**: Navigate to /servizi and verify all service offerings are listed with descriptions, eligibility, and access information. A visitor can understand what help is available without visiting other pages.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to the "Servizi" page, **When** the page loads, **Then** they see a list of all services provided
2. **Given** a visitor reviews service offerings, **When** they read each service, **Then** each includes a description, who it's for, and how to access it
3. **Given** a visitor needs help, **When** they find a relevant service, **Then** contact information or next steps are provided
4. **Given** a professional refers someone, **When** they share this page, **Then** the content is comprehensive enough to be understood standalone

---

### User Story 4 - Make a Donation (Priority: P1)

A supporter wants to make a financial contribution and visits the "Dona Ora" (Donate Now) page to find payment instructions and understand how their contribution will be used.

**Why this priority**: Donations are the lifeblood of the organization. Making the donation process clear and trustworthy directly impacts the organization's ability to fulfill its mission.

**Independent Test**: Navigate to /donate and verify bank transfer details are visible, donation purpose is explained, and the process is clear. A visitor can successfully complete a donation using only this page.

**Acceptance Scenarios**:

1. **Given** a visitor wants to donate, **When** they navigate to /donate, **Then** clear instructions for bank transfer or other payment methods are displayed
2. **Given** a visitor is filling out donation information, **When** they look for details, **Then** the organization's bank account (IBAN) and tax code (CF) are visible
3. **Given** a visitor completes a donation, **When** they need a receipt, **Then** information about obtaining donation receipts for tax purposes is provided
4. **Given** a visitor wants transparency, **When** they read the page, **Then** information about how donations are used is available

---

### User Story 5 - Contribute 5x1000 Tax Designation (Priority: P2)

An Italian taxpayer visits the "5x1000" page during tax season to find the organization's tax code and understand how to designate their 5x1000 to Associazione Nuova Vita.

**Why this priority**: The 5x1000 program is a significant revenue stream for Italian non-profits. Clear instructions maximize participation during the tax filing window.

**Independent Test**: Navigate to /5x1000 and verify the tax code (codice fiscale) is prominently displayed with instructions. A visitor can complete their tax designation using only this page.

**Acceptance Scenarios**:

1. **Given** a taxpayer visits the 5x1000 page, **When** the page loads, **Then** the organization's codice fiscale (91298160374) is prominently displayed
2. **Given** a taxpayer needs instructions, **When** they read the page, **Then** step-by-step guidance for filling out the 5x1000 section is provided
3. **Given** a taxpayer uses different tax filing methods, **When** they review instructions, **Then** guidance covers both online and paper declaration methods
4. **Given** a taxpayer has questions, **When** they finish reading, **Then** contact information for assistance is available

---

### User Story 6 - Become a Member (Priority: P3)

A person inspired by the mission visits the "Diventa Socio" (Become a Member) page to learn about membership benefits, requirements, and the registration process.

**Why this priority**: Membership grows the organization's base and volunteer pool, but is less urgent than immediate donation and service communication. Can be enhanced after core content is live.

**Independent Test**: Navigate to /diventa-socio and verify membership information, benefits, requirements, and enrollment process are explained. A visitor can decide whether to join and knows next steps.

**Acceptance Scenarios**:

1. **Given** a visitor wants to join, **When** they navigate to /diventa-socio, **Then** membership benefits and responsibilities are clearly described
2. **Given** a visitor reviews membership, **When** they check requirements, **Then** eligibility criteria and membership fees (if any) are stated
3. **Given** a visitor decides to join, **When** they look for next steps, **Then** enrollment process with forms or contact information is provided
4. **Given** a member wants to stay informed, **When** they review benefits, **Then** information about member communications and involvement opportunities is included

---

### User Story 7 - Access Documents and Resources (Priority: P3)

A member or stakeholder visits the "Documenti" (Documents) page to download forms, view statutes, annual reports, or other official documentation.

**Why this priority**: Transparency and member resources are important but less critical than initial engagement pages. Can be developed after core content migration.

**Independent Test**: Navigate to /documenti and verify documents are listed, categorized, and accessible. A member can find and download needed documents independently.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to /documenti, **When** the page loads, **Then** all available documents are listed with descriptions
2. **Given** a member needs a form, **When** they browse the page, **Then** documents are organized by category (forms, reports, statutes, etc.)
3. **Given** a member clicks a document, **When** they select it, **Then** the document opens or downloads appropriately
4. **Given** a stakeholder needs official records, **When** they search for statutes or reports, **Then** these are prominently available

---

### Edge Cases

- What happens when a visitor accesses a page that doesn't exist yet? → 404 page should guide them back to homepage or main navigation
- How does the site handle very long content pages on mobile devices? → All pages must be scrollable with proper heading navigation and "back to top" functionality where appropriate
- What if a user has JavaScript disabled? → Core content must be accessible without JavaScript (Gatsby static rendering ensures this)
- How are external links handled? → External links should open in new tabs with appropriate security attributes (rel="noopener noreferrer")
- What if images fail to load? → All images must have descriptive alt text that conveys the meaning even without the image
- How does the site handle browser translation? → Content should be structured to allow browser auto-translation without breaking layout

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: System MUST migrate all existing page content (homepage, chi-siamo, servizi, donate, 5x1000, diventa-socio, documenti) from TSX to MDX format
- **FR-002**: System MUST preserve all existing content text and structure during migration
- **FR-003**: System MUST render MDX pages with proper semantic HTML (headings, paragraphs, lists, links)
- **FR-004**: System MUST support frontmatter metadata in MDX files (title, description, date)
- **FR-005**: System MUST generate a sitemap including all MDX pages
- **FR-006**: System MUST provide a navigation component accessible from all pages linking to main sections
- **FR-007**: System MUST include a footer component on all pages with organization contact information
- **FR-008**: Homepage MUST display hero section with mission statement and primary call-to-action buttons
- **FR-009**: Donation page (donate) MUST display bank account details (IBAN) clearly
- **FR-010**: 5x1000 page MUST display codice fiscale (91298160374) prominently
- **FR-011**: System MUST handle Italian language content with proper character encoding (accented characters)
- **FR-012**: System MUST render a custom 404 error page for non-existent routes

### Non-Functional Requirements (Per Constitution)

**Accessibility (WCAG AA):**

- **NFR-001**: All interactive elements (links, buttons, forms) MUST be keyboard accessible with visible focus indicators
- **NFR-002**: Color contrast MUST meet 4.5:1 for normal text, 3:1 for large text and graphical elements
- **NFR-003**: All images MUST have descriptive alt text in Italian
- **NFR-004**: If forms are needed (contact, membership) then MUST have associated labels and error messages
- **NFR-005**: Page structure MUST use semantic HTML landmarks (nav, main, article, footer)
- **NFR-006**: Heading hierarchy MUST be logical (no skipped levels)

**Performance:**

- **NFR-007**: Lighthouse Performance score MUST be ≥ 90
- **NFR-008**: Largest Contentful Paint (LCP) MUST be < 2.5s
- **NFR-009**: Cumulative Layout Shift (CLS) MUST be < 0.1
- **NFR-010**: First Contentful Paint (FCP) MUST be < 1.8s
- **NFR-011**: Time to Interactive (TTI) MUST be < 3.8s

**SEO:**

- **NFR-012**: Each page MUST have unique title tag (format: "[Page Name] | Associazione Nuova Vita")
- **NFR-013**: Each page MUST have unique meta description under 160 characters
- **NFR-014**: All pages MUST be included in sitemap.xml via gatsby-plugin-sitemap
- **NFR-015**: Images MUST use Gatsby image optimization (gatsby-plugin-image) where applicable

**TypeScript:**

- **NFR-016**: All components MUST pass `npm run typecheck` with strict mode enabled
- **NFR-017**: No usage of `any` types without documented justification in code comments
- **NFR-018**: All component props MUST have TypeScript interfaces defined

**Content Architecture:**

- **NFR-019**: All editorial content MUST be authored in MDX files within /content/pages/
- **NFR-020**: MDX files MUST use only documented, reusable components from the design system
- **NFR-021**: No inline styles or one-off components in MDX files

### Key Entities

- **Page**: Represents a content page with URL route, title, description, and body content in MDX format
- **Navigation Menu**: Collection of links to main site sections (Chi Siamo, Servizi, Dona, 5x1000, Diventa Socio, Documenti)
- **Call-to-Action**: Prominent button or link encouraging specific actions (donate, become member, learn more)
- **Document**: Downloadable file (PDF, form) with title, description, and file reference

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: All 8 existing pages (index, chi-siamo, servizi, donate, 5x1000, diventa-socio, documenti, 404) are migrated to MDX format and render correctly
- **SC-002**: Lighthouse audit scores ≥ 90 for Performance and 100 for Accessibility on all pages
- **SC-003**: Page load time for homepage is under 2 seconds on 3G connection
- **SC-004**: All pages pass WCAG AA validation using axe DevTools or WAVE with zero critical errors
- **SC-005**: Sitemap.xml is generated and includes all 7 content pages (excluding 404)
- **SC-006**: Content editors can update page content by modifying MDX files without touching TypeScript/React code
- **SC-007**: All interactive elements are keyboard navigable and pass manual keyboard-only navigation test
- **SC-008**: TypeScript compilation (`npm run typecheck`) completes with zero errors
- **SC-009**: Build process (`npm run build`) completes successfully and generates static pages
- **SC-010**: Visual inspection confirms proper rendering on mobile (375px), tablet (768px), and desktop (1440px) viewports

## Assumptions

- Existing content in TSX files represents the approved editorial content and should be preserved exactly
- No CMS integration is required; content will be managed directly in MDX files via Git
- Forms (contact, membership registration) will be handled separately in a future feature or via external service
- Document downloads will link to static files in the /static folder or external storage
- Italian is the only required language (no internationalization needed initially)
- Site will be hosted on Netlify with automatic deployments from main branch
- No user authentication or member-only areas are required in this phase
- Images referenced in content are available or will be provided before implementation
