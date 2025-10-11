import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import type { GatsbySSR } from 'gatsby';

// Import design system components
import Button from './src/components/Button';
import Hero from './src/components/Hero';
import Card from './src/components/Card';
import DocumentLink from './src/components/DocumentLink';

/**
 * MDX Component Mapping for SSR
 *
 * These components are available globally in all MDX files
 * during server-side rendering.
 */
const components = {
  Button,
  Hero,
  Card,
  DocumentLink,
};

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
