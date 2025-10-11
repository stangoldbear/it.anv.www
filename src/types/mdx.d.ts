/**
 * MDX Type Declarations
 *
 * Type definitions for importing MDX files as modules in TypeScript.
 * This enables TypeScript to recognize .mdx imports and provide type safety.
 */

declare module '*.mdx' {
  import type { ComponentType } from 'react';

  /**
   * MDX file exports a default React component
   */
  const MDXComponent: ComponentType;
  export default MDXComponent;

  /**
   * MDX files can also export frontmatter and other named exports
   */
  export const frontmatter: Record<string, unknown>;
}

/**
 * CSS Module declarations for component-scoped styles
 */
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
