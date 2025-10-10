# Research: Gatsby v5 + MDX Content Architecture

**Feature**: MDX Content Migration for Associazione Nuova Vita Website
**Date**: 2025-10-10
**Phase**: Phase 0 - Technical Research

## Overview

This document captures research findings for implementing a content-driven architecture using Gatsby v5 and gatsby-plugin-mdx. The goal is to separate editorial content (MDX files) from presentation logic (TypeScript/React components) while maintaining strict type safety, accessibility standards, and performance budgets.

## Gatsby v5 + MDX Best Practices

### Plugin Configuration

**gatsby-plugin-mdx v5** is the official Gatsby plugin for MDX support. It uses MDX v3 under the hood, which requires @mdx-js/react as a peer dependency.

**Key Configuration Options**:
- `extensions`: Define which file extensions to process (default: `['.mdx']`)
- `gatsbyRemarkPlugins`: Array of remark plugins for markdown processing
- `mdxOptions`: Pass options directly to MDX compiler
- `defaultLayouts`: Map file paths to default layout components (deprecated in favor of template approach)

**Recommended gatsby-config.ts setup**:
```typescript
{
  resolve: 'gatsby-plugin-mdx',
  options: {
    extensions: ['.mdx', '.md'],
    gatsbyRemarkPlugins: [
      'gatsby-remark-images',
      'gatsby-remark-copy-linked-files',
    ],
  },
}
```

### File-Based Routing vs Programmatic Page Creation

**Two approaches for creating pages from MDX**:

1. **File-Based Routing**: Place MDX files directly in `src/pages/` and Gatsby automatically creates routes
   - Pros: Simple, zero configuration, automatic route generation
   - Cons: Tightly couples content location to URL structure, harder to customize templates

2. **Programmatic Page Creation**: Store MDX in `content/` directory and use gatsby-node.ts to create pages
   - Pros: Flexible content organization, easy to apply templates, custom slugs via frontmatter
   - Cons: Requires gatsby-node.ts configuration, manual GraphQL queries

**Decision**: Use programmatic page creation for greater flexibility and separation of concerns.

### gatsby-node.ts Page Creation Pattern

```typescript
import type { GatsbyNode } from 'gatsby';
import path from 'path';

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Query all MDX files
  const result = await graphql<{
    allMdx: {
      nodes: Array<{
        id: string;
        frontmatter: {
          slug: string;
        };
        internal: {
          contentFilePath: string;
        };
      }>;
    };
  }>(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX pages', result.errors);
    return;
  }

  const pageTemplate = path.resolve('./src/templates/Page.tsx');

  result.data?.allMdx.nodes.forEach((node) => {
    createPage({
      path: node.frontmatter.slug,
      component: `${pageTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
      },
    });
  });
};
```

**Important**: In Gatsby v5 with gatsby-plugin-mdx v5, you must append `?__contentFilePath=${node.internal.contentFilePath}` to the component path. This is required for MDX to render properly.

### Page Template Component Pattern

The Page template receives MDX content as children and wraps it with layout components.

```typescript
import * as React from 'react';
import { graphql, type PageProps } from 'gatsby';
import Layout from '../components/Layout';

interface PageTemplateProps extends PageProps {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        description: string;
        date: string;
      };
    };
  };
  children: React.ReactNode;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ data, children }) => {
  const { frontmatter } = data.mdx;

  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <article>
        <header>
          <h1>{frontmatter.title}</h1>
          <time dateTime={frontmatter.date}>{frontmatter.date}</time>
        </header>
        <main>{children}</main>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query PageTemplate($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        date
      }
    }
  }
`;

export default PageTemplate;
```

**Key Points**:
- MDX content is passed as `children` prop (not body or html)
- GraphQL query fetches frontmatter data using `$id` context variable
- Template wraps children with semantic HTML (article, header, main)

## Custom Page Templates for MDX

### Multiple Template Support

For different page types (blog posts, landing pages, documentation), create multiple templates and use frontmatter to specify which template to use:

```yaml
---
title: About Us
template: landing-page
---
```

Then in gatsby-node.ts:
```typescript
const templateMap: Record<string, string> = {
  'landing-page': path.resolve('./src/templates/LandingPage.tsx'),
  'default': path.resolve('./src/templates/Page.tsx'),
};

const template = templateMap[node.frontmatter.template || 'default'];

createPage({
  path: node.frontmatter.slug,
  component: `${template}?__contentFilePath=${node.internal.contentFilePath}`,
  context: { id: node.id },
});
```

### Component Injection in MDX

To use React components in MDX files, you have three options:

1. **MDXProvider (Recommended)**: Define components globally
```typescript
// gatsby-browser.tsx and gatsby-ssr.tsx
import { MDXProvider } from '@mdx-js/react';
import Button from './src/components/Button';
import Hero from './src/components/Hero';

const components = {
  Button,
  Hero,
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
```

2. **Direct Import**: Import in each MDX file (verbose but explicit)
```mdx
import Button from '../components/Button';

# My Page

<Button>Click Me</Button>
```

3. **Template Props**: Pass components via template props (complex)

**Decision**: Use MDXProvider for consistent component availability across all MDX files.

## Design Tokens and CSS Modules Pattern

### CSS Custom Properties for Design Tokens

Centralize design tokens in a CSS file using custom properties:

```css
/* src/styles/tokens.css */
:root {
  /* Colors */
  --color-primary: #1e40af;
  --color-primary-hover: #1e3a8a;
  --color-text: #1f2937;
  --color-text-light: #6b7280;
  --color-background: #ffffff;
  --color-surface: #f3f4f6;

  /* Spacing (8px base unit) */
  --spacing-xs: 0.5rem;    /* 8px */
  --spacing-sm: 1rem;      /* 16px */
  --spacing-md: 1.5rem;    /* 24px */
  --spacing-lg: 2rem;      /* 32px */
  --spacing-xl: 3rem;      /* 48px */
  --spacing-2xl: 4rem;     /* 64px */

  /* Typography */
  --font-family-base: 'Inter', system-ui, sans-serif;
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */

  /* Line Heights */
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;

  /* Breakpoints (for JS usage) */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
}
```

### CSS Modules for Component Styles

Use CSS Modules to scope component styles while referencing global tokens:

```css
/* src/components/Button.module.css */
.button {
  padding: var(--spacing-sm) var(--spacing-lg);
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
  background-color: var(--color-primary);
  color: var(--color-background);
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.button:hover {
  background-color: var(--color-primary-hover);
}

.button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

```typescript
// src/components/Button.tsx
import * as React from 'react';
import * as styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button' }) => {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
```

### TypeScript Support for CSS Modules

Add type definitions for CSS modules:

```typescript
// src/types/css-modules.d.ts
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export = classes;
}
```

## Accessibility Patterns for MDX Content

### Semantic HTML Structure

Ensure all MDX content uses proper semantic HTML:

```mdx
---
title: About Us
description: Learn about Associazione Nuova Vita
---

# About Us

<Hero title="Our Mission" />

## Who We Are

Associazione Nuova Vita is a non-profit organization...

## Our Values

- Compassion
- Integrity
- Community

<Button href="/donate">Support Our Cause</Button>
```

Rendered HTML should use:
- `<article>` for page content
- `<header>` for page header (title, date)
- `<main>` for main content area
- `<nav>` for navigation
- `<footer>` for page footer
- Proper heading hierarchy (h1 → h2 → h3, no skips)

### ARIA Attributes for Interactive Components

```typescript
// Button with proper ARIA
const Button: React.FC<ButtonProps> = ({ children, href, onClick }) => {
  if (href) {
    return (
      <a
        href={href}
        className={styles.button}
        role="button"
        tabIndex={0}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={styles.button}
      onClick={onClick}
      type="button"
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {children}
    </button>
  );
};
```

### Focus Management

Ensure all interactive elements have visible focus indicators:

```css
/* Global focus styles */
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Remove default focus styles */
*:focus:not(:focus-visible) {
  outline: none;
}
```

### Alt Text for Images

Require alt text in MDX:

```mdx
![Volunteers helping in the community](./volunteers.jpg)
```

Validate in gatsby-node.ts or use a remark plugin to enforce alt text presence.

## GraphQL Query Patterns

### Querying All MDX Files

```graphql
query AllPages {
  allMdx(sort: { frontmatter: { date: DESC } }) {
    nodes {
      id
      frontmatter {
        title
        description
        slug
        date
      }
      internal {
        contentFilePath
      }
    }
  }
}
```

### Querying Single MDX File

```graphql
query PageById($id: String!) {
  mdx(id: { eq: $id }) {
    frontmatter {
      title
      description
      date
    }
  }
}
```

### Generated Types

Gatsby generates TypeScript types for GraphQL queries. After running `gatsby develop`, types are available in `gatsby-types.d.ts`:

```typescript
import type { PageTemplateQuery } from '../../gatsby-types';

const PageTemplate: React.FC<PageProps<PageTemplateQuery>> = ({ data }) => {
  // data.mdx is fully typed
};
```

## Performance Optimization

### Code Splitting

Gatsby automatically code-splits by route. Each page gets its own JavaScript bundle.

### Image Optimization

Use gatsby-plugin-image for optimized images:

```typescript
import { StaticImage } from 'gatsby-plugin-image';

<StaticImage
  src="../images/hero.jpg"
  alt="Community volunteers"
  loading="eager"
  placeholder="blurred"
/>
```

For images in MDX:
```mdx
![Community volunteers](../images/hero.jpg)
```

Configure gatsby-remark-images to optimize images in MDX:
```typescript
{
  resolve: 'gatsby-remark-images',
  options: {
    maxWidth: 1200,
    quality: 80,
    loading: 'lazy',
  },
}
```

### CSS Optimization

- Gatsby inlines critical CSS automatically
- Use CSS Modules for component-scoped styles
- Minimize global CSS
- Use CSS custom properties for runtime theming without JavaScript

### Bundle Analysis

Run build with bundle analysis:
```bash
GATSBY_WEBPACK_BUNDLE_ANALYZER=1 npm run build
```

## SEO Best Practices

### React Helmet for Meta Tags

Use react-helmet or gatsby-plugin-react-helmet:

```typescript
import { Helmet } from 'react-helmet';

const Layout: React.FC<LayoutProps> = ({ title, description, children }) => {
  return (
    <>
      <Helmet>
        <title>{title} | Associazione Nuova Vita</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <html lang="it" />
      </Helmet>
      {children}
    </>
  );
};
```

### Sitemap Generation

Configure gatsby-plugin-sitemap:

```typescript
{
  resolve: 'gatsby-plugin-sitemap',
  options: {
    excludes: ['/404', '/404.html'],
    query: `
      {
        allMdx {
          nodes {
            frontmatter {
              slug
              date
            }
          }
        }
      }
    `,
    resolveSiteUrl: () => 'https://www.assonuovavita.it',
    resolvePages: ({ allMdx }) => {
      return allMdx.nodes.map(node => ({
        path: node.frontmatter.slug,
        lastmod: node.frontmatter.date,
      }));
    },
  },
}
```

### Structured Data

Add JSON-LD structured data for rich snippets:

```typescript
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'Associazione Nuova Vita',
  url: 'https://www.assonuovavita.it',
  logo: 'https://www.assonuovavita.it/logo.png',
  description: 'Italian non-profit organization serving the community',
};

<Helmet>
  <script type="application/ld+json">
    {JSON.stringify(structuredData)}
  </script>
</Helmet>
```

## Testing Strategies

### TypeScript Type Checking

Run before every commit:
```bash
npm run typecheck
```

Ensure all GraphQL queries use generated types and no `any` types are present.

### Accessibility Testing

**Manual Testing**:
1. Keyboard navigation: Tab through all interactive elements
2. Screen reader: Test with NVDA (Windows) or VoiceOver (macOS)
3. Color contrast: Use DevTools or axe extension

**Automated Testing**:
```bash
npm install --save-dev @axe-core/react
```

```typescript
// In development only
if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}
```

### Performance Testing

Run Lighthouse audits:
```bash
npm run build
npm run serve
# Open Chrome DevTools > Lighthouse > Generate report
```

Target scores:
- Performance: ≥ 90
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Build Testing

Ensure build succeeds with no errors:
```bash
npm run clean
npm run build
```

Check for:
- TypeScript errors
- GraphQL query errors
- Missing dependencies
- Asset optimization warnings

## References

- [Gatsby v5 Documentation](https://www.gatsbyjs.com/docs/)
- [gatsby-plugin-mdx Documentation](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/)
- [MDX Documentation](https://mdxjs.com/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Lighthouse Performance Scoring](https://web.dev/performance-scoring/)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

## Decision Log

| Decision | Rationale | Alternatives Considered |
|----------|-----------|------------------------|
| Programmatic page creation over file-based routing | Flexibility in content organization, easier template customization, slug control via frontmatter | File-based routing (simpler but less flexible) |
| MDXProvider for component injection | Consistent component availability, no imports needed in MDX files | Direct imports (verbose, error-prone for editors) |
| CSS Modules + Custom Properties | Scoped styles prevent conflicts, tokens enable consistency | Styled-components (runtime cost), Tailwind (utility class bloat in MDX) |
| Manual accessibility testing | Critical paths validated by humans, catches semantic issues | Automated-only (misses context and flow) |
| Content in /content/pages/ | Clear separation from code, signals content source of truth | src/pages/ (mixes content with code) |
