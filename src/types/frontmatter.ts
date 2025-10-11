/**
 * Page Frontmatter Type Definitions
 *
 * TypeScript interface matching the MDX frontmatter schema defined in
 * /specs/001-build-a-gatsby/contracts/mdx-frontmatter-schema.yaml
 */

/**
 * Frontmatter metadata for MDX pages
 */
export interface PageFrontmatter {
  /**
   * Page title displayed in browser tab and main heading (h1)
   * @example "Chi Siamo"
   * @minLength 1
   * @maxLength 70
   */
  title: string;

  /**
   * Meta description for SEO and social sharing
   * Appears in search results and when shared on social media
   * @minLength 50
   * @maxLength 160
   */
  description: string;

  /**
   * URL path for the page
   * Must start with forward slash, lowercase with hyphens
   * @pattern ^/[a-z0-9-/]*$
   * @example "/" | "/chi-siamo" | "/5x1000"
   */
  slug: string;

  /**
   * Publication or last updated date
   * ISO 8601 format (YYYY-MM-DD)
   * @example "2025-10-10"
   */
  date: string;

  /**
   * Template component used to render this page
   * Defaults to 'page' if not specified
   * @default "page"
   */
  template?: 'page' | 'landing-page';

  /**
   * Whether to display this page in the main navigation menu
   * Set to false for pages that should not appear in header navigation
   * @default true
   */
  showInNav?: boolean;

  /**
   * Sort order in the navigation menu
   * Lower numbers appear first
   * Homepage should use 0
   */
  navOrder?: number;

  /**
   * Relative path to Open Graph image for social sharing
   * Path must start with './images/' and end with valid image extension
   * Image should be at least 1200x630px
   * @pattern ^\.\/images\/.*\.(jpg|jpeg|png|webp)$
   * @example "./images/chi-siamo-og.jpg"
   */
  metaImage?: string;
}

/**
 * MDX Node from Gatsby GraphQL
 */
export interface MdxNode {
  id: string;
  frontmatter: PageFrontmatter;
  excerpt: string;
  internal: {
    contentFilePath: string;
  };
}

/**
 * Navigation item derived from page frontmatter
 */
export interface NavigationItem {
  label: string;
  href: string;
  order: number;
}
