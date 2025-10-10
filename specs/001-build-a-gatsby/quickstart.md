# Quickstart Guide: Associazione Nuova Vita Website

**Feature**: MDX Content Migration for Associazione Nuova Vita Website
**Date**: 2025-10-10
**Phase**: Phase 1 - Design

## Overview

This guide provides step-by-step instructions for setting up, developing, and deploying the Associazione Nuova Vita website. The site is built with Gatsby v5 and uses MDX for content management.

## Prerequisites

Before you begin, ensure you have the following installed:

### Required Software

- **Node.js**: Version 18.0.0 or higher (LTS recommended)
  - Check version: `node --version`
  - Download: https://nodejs.org/

- **npm**: Version 9.0.0 or higher (included with Node.js)
  - Check version: `npm --version`

- **Git**: Version 2.30.0 or higher
  - Check version: `git --version`
  - Download: https://git-scm.com/

### Optional Tools

- **Visual Studio Code**: Recommended editor with TypeScript support
  - Download: https://code.visualstudio.com/
  - Recommended extensions:
    - ESLint
    - Prettier
    - MDX (unified)
    - TypeScript Vue Plugin (Volar)

- **Chrome/Firefox DevTools**: For accessibility and performance testing

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/assonuovavita/www.git
cd www
```

### 2. Install Dependencies

```bash
npm install
```

This will install all dependencies listed in `package.json`:
- Gatsby v5.14.6
- gatsby-plugin-mdx v5.15.0
- @mdx-js/react v3.1.1
- React v18.2.0
- TypeScript v5.3.3
- Additional Gatsby plugins (sitemap, manifest, filesystem source)

### 3. Verify Installation

Check that Gatsby is installed correctly:

```bash
npx gatsby --version
```

Expected output: `Gatsby CLI version: 5.x.x, Gatsby version: 5.14.6`

## Local Development

### 1. Start Development Server

```bash
npm run develop
```

Or use the alias:

```bash
npm start
```

This command:
- Starts the Gatsby development server
- Compiles TypeScript
- Processes MDX files
- Enables hot module replacement (HMR)
- Makes the site available at `http://localhost:8000`

**GraphiQL Playground**: Access the GraphQL playground at `http://localhost:8000/___graphql`

### 2. View the Site

Open your browser and navigate to:
- **Website**: http://localhost:8000
- **GraphiQL**: http://localhost:8000/___graphql

### 3. Making Changes

#### Editing MDX Content

MDX files are located in `/content/pages/`:

```bash
# Example: Edit the About Us page
nano content/pages/chi-siamo.mdx
```

Changes to MDX files will automatically trigger a hot reload in the browser.

#### Editing Components

TypeScript components are located in `/src/components/`:

```bash
# Example: Edit the Header component
nano src/components/Header.tsx
```

Changes to components will also trigger hot reloads.

#### Editing Styles

CSS files are located in `/src/styles/`:

```bash
# Example: Edit design tokens
nano src/styles/tokens.css
```

Changes to CSS will be reflected immediately.

### 4. Common Development Tasks

#### Add a New Page

1. Create a new MDX file in `/content/pages/`:

```bash
touch content/pages/contatti.mdx
```

2. Add frontmatter and content:

```mdx
---
title: Contatti
description: Contattaci per informazioni o supporto
slug: /contatti
date: 2025-10-10
showInNav: true
navOrder: 70
---

# Contatti

Per informazioni, contattaci a: info@assonuovavita.it
```

3. The page will be automatically created at `/contatti`

#### Add a New Component

1. Create a new component file:

```bash
touch src/components/ContactForm.tsx
```

2. Define the component with TypeScript:

```typescript
import * as React from 'react';
import * as styles from './ContactForm.module.css';

interface ContactFormProps {
  title?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ title = 'Contattaci' }) => {
  return (
    <form className={styles.form}>
      <h2>{title}</h2>
      {/* Form fields */}
    </form>
  );
};

export default ContactForm;
```

3. Create corresponding CSS module:

```bash
touch src/components/ContactForm.module.css
```

4. Make the component available in MDX files by adding it to `gatsby-browser.tsx` and `gatsby-ssr.tsx`:

```typescript
import ContactForm from './src/components/ContactForm';

const components = {
  Button,
  Hero,
  Card,
  ContactForm, // Add new component
};
```

#### Update Design Tokens

Edit `/src/styles/tokens.css`:

```css
:root {
  --color-primary: #1e40af; /* Update primary color */
  --spacing-lg: 2.5rem;     /* Update large spacing */
}
```

All components using these tokens will automatically update.

## Building for Production

### 1. Run TypeScript Type Check

Before building, ensure all TypeScript types are correct:

```bash
npm run typecheck
```

This runs `tsc --noEmit` which checks types without emitting files. Fix any errors before proceeding.

### 2. Build the Site

```bash
npm run build
```

This command:
- Runs TypeScript type checking
- Compiles all TypeScript/React components
- Processes all MDX files
- Generates static HTML pages
- Optimizes images
- Bundles JavaScript and CSS
- Creates a production-ready site in `/public`

**Build Output**: The production site will be in the `/public` directory.

### 3. Test Production Build Locally

Serve the production build locally:

```bash
npm run serve
```

The site will be available at `http://localhost:9000`

**Important**: Always test the production build before deploying to catch build-specific issues.

## Testing

### TypeScript Type Checking

Check types before committing:

```bash
npm run typecheck
```

**Strict Mode**: TypeScript strict mode is enabled. All code must pass type checking with no errors.

### Accessibility Testing

#### Manual Keyboard Navigation

1. Start the development server: `npm run develop`
2. Navigate to each page
3. Use only the Tab key to move through interactive elements
4. Verify:
   - All links and buttons are reachable
   - Focus indicators are visible
   - Modal dialogs trap focus
   - Skip links work correctly

#### Screen Reader Testing

**macOS (VoiceOver)**:
```bash
# Enable VoiceOver
Cmd + F5
```

**Windows (NVDA)**:
- Download from https://www.nvaccess.org/
- Test that all content is readable
- Verify ARIA labels are correct

#### Automated Accessibility Testing

Use the axe DevTools browser extension:
1. Install: https://www.deque.com/axe/devtools/
2. Open DevTools
3. Go to "axe DevTools" tab
4. Click "Scan ALL of my page"
5. Fix any Critical or Serious issues

### Performance Testing

#### Lighthouse Audit

1. Build the site: `npm run build`
2. Serve the site: `npm run serve`
3. Open Chrome DevTools (F12)
4. Go to "Lighthouse" tab
5. Select:
   - Categories: Performance, Accessibility, Best Practices, SEO
   - Device: Mobile and Desktop
6. Click "Analyze page load"

**Target Scores**:
- Performance: ≥ 90
- Accessibility: 100
- Best Practices: 100
- SEO: 100

#### Core Web Vitals

Monitor these metrics in Lighthouse:
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Build Testing

Ensure the build succeeds without errors:

```bash
# Clean previous builds
npm run clean

# Run fresh build
npm run build
```

Check for:
- TypeScript compilation errors
- GraphQL query errors
- Missing dependencies
- Asset optimization warnings

## Deployment

### Netlify Deployment

The site is configured for automatic deployment on Netlify.

#### Initial Setup

1. Push code to GitHub repository
2. Connect repository to Netlify:
   - Go to https://app.netlify.com/
   - Click "New site from Git"
   - Select your GitHub repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `public`
     - **Node version**: 18 (set in Environment Variables)

#### Automatic Deployments

- **Production**: Pushes to `main` branch deploy to production
- **Preview**: Pull requests create preview deployments
- **Branch Deploys**: Pushes to feature branches create deploy previews

#### Build Environment Variables

Set in Netlify dashboard (Site settings > Environment variables):

```
NODE_VERSION=18
NPM_VERSION=9
```

#### Custom Domain

Configure custom domain in Netlify:
1. Go to Site settings > Domain management
2. Add custom domain: `www.assonuovavita.it`
3. Configure DNS records as instructed by Netlify

### Manual Deployment

If deploying to a different host:

1. Build the site:
```bash
npm run build
```

2. Upload the `/public` directory to your web server

3. Configure web server:
   - Serve files from `/public`
   - Enable gzip compression
   - Set cache headers for static assets
   - Configure 404 redirects to `/404.html`

## Troubleshooting

### Common Issues

#### "Cannot find module" Error

**Problem**: Missing dependencies

**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
```

#### GraphQL Query Errors

**Problem**: MDX frontmatter doesn't match schema

**Solution**:
1. Check frontmatter in MDX files
2. Ensure required fields are present (title, description, slug, date)
3. Validate against schema in `/specs/001-build-a-gatsby/contracts/mdx-frontmatter-schema.yaml`

#### TypeScript Errors

**Problem**: Type mismatches or missing types

**Solution**:
1. Run `npm run typecheck` to see all errors
2. Check that GraphQL queries use generated types from `gatsby-types.d.ts`
3. Ensure all component props have TypeScript interfaces

#### Build Failures

**Problem**: Build fails with unclear errors

**Solution**:
1. Clear Gatsby cache: `npm run clean`
2. Delete node_modules: `rm -rf node_modules`
3. Reinstall dependencies: `npm install`
4. Try building again: `npm run build`

#### Hot Reload Not Working

**Problem**: Changes to files don't trigger browser reload

**Solution**:
1. Restart development server: `Ctrl+C` then `npm run develop`
2. Hard refresh browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (macOS)
3. Clear browser cache

#### Port Already in Use

**Problem**: Development server can't start because port 8000 is in use

**Solution**:
```bash
# Find process using port 8000
lsof -i :8000

# Kill the process (replace PID with actual process ID)
kill -9 PID

# Or use a different port
gatsby develop -p 8001
```

## Development Workflow

### Daily Workflow

1. **Pull Latest Changes**:
```bash
git pull origin main
```

2. **Install Any New Dependencies**:
```bash
npm install
```

3. **Start Development Server**:
```bash
npm run develop
```

4. **Make Changes**: Edit MDX files or components

5. **Test Changes**: View in browser at http://localhost:8000

6. **Run Type Check**:
```bash
npm run typecheck
```

7. **Commit Changes**:
```bash
git add .
git commit -m "feat: Add new contact page"
```

8. **Push to Remote**:
```bash
git push origin feature-branch
```

### Before Merging

1. **Run Type Check**: `npm run typecheck`
2. **Build Production**: `npm run build`
3. **Test Production Build**: `npm run serve`
4. **Run Lighthouse Audit**: Check scores meet targets
5. **Test Keyboard Navigation**: Verify accessibility
6. **Review Preview Deployment**: Test on Netlify preview URL

## Resources

### Documentation

- **Gatsby v5 Docs**: https://www.gatsbyjs.com/docs/
- **MDX Documentation**: https://mdxjs.com/
- **gatsby-plugin-mdx**: https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/
- **TypeScript Docs**: https://www.typescriptlang.org/docs/
- **WCAG 2.1 Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/

### Tools

- **GraphiQL Playground**: http://localhost:8000/___graphql (when dev server is running)
- **Lighthouse**: Chrome DevTools > Lighthouse tab
- **axe DevTools**: https://www.deque.com/axe/devtools/
- **WAVE**: https://wave.webaim.org/extension/

### Community

- **Gatsby GitHub**: https://github.com/gatsbyjs/gatsby
- **Gatsby Discord**: https://gatsby.dev/discord
- **Stack Overflow**: Tag questions with `gatsby` and `mdx`

## Next Steps

After completing this quickstart:

1. **Review Feature Spec**: Read `/specs/001-build-a-gatsby/spec.md` for detailed requirements
2. **Review Data Model**: Read `/specs/001-build-a-gatsby/data-model.md` for content structure
3. **Review Research**: Read `/specs/001-build-a-gatsby/research.md` for best practices
4. **Start Implementation**: Follow tasks in `/specs/001-build-a-gatsby/tasks.md` (when created)

## Support

For issues or questions:
- **Project Issues**: File on GitHub repository
- **Technical Questions**: Contact the development team
- **Content Questions**: Contact the content team

---

**Last Updated**: 2025-10-10
**Version**: 1.0.0
