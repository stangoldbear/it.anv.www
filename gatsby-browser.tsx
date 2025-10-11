import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import type { GatsbyBrowser } from 'gatsby';
import './src/styles/global.css';

// Import design system components
import Button from './src/components/Button';
import Hero from './src/components/Hero';
import Card from './src/components/Card';
import DocumentLink from './src/components/DocumentLink';

/**
 * MDX Component Mapping
 *
 * These components are available globally in all MDX files
 * without needing to import them individually.
 */
const components = {
  Button,
  Hero,
  Card,
  DocumentLink,
};

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
