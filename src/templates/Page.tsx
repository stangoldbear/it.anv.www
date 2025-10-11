import * as React from 'react';
import { graphql, type PageProps, type HeadFC } from 'gatsby';
import Layout from '../components/Layout';
import * as styles from './Page.module.css';
import type { PageFrontmatter } from '../types/frontmatter';

interface PageTemplateData {
  mdx: {
    frontmatter: PageFrontmatter;
  };
}

type PageTemplateProps = PageProps<PageTemplateData> & {
  children: React.ReactNode;
};

/**
 * Page Template Component
 *
 * Renders MDX content with frontmatter metadata and layout.
 * Used by gatsby-node.ts to programmatically create pages from MDX files.
 */
const PageTemplate: React.FC<PageTemplateProps> = ({ data, children }) => {
  const { frontmatter } = data.mdx;

  return (
    <Layout>
      <article className={styles.article}>
        <header className={styles.header}>
          <h1 className={styles.title}>{frontmatter.title}</h1>
          {frontmatter.date && (
            <time className={styles.date} dateTime={frontmatter.date}>
              {new Date(frontmatter.date).toLocaleDateString('it-IT', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          )}
        </header>
        <div className={styles.content}>{children}</div>
      </article>
    </Layout>
  );
};

/**
 * GraphQL Query for Page Template
 *
 * Fetches frontmatter metadata for the MDX page.
 * The $id variable is passed from gatsby-node.ts createPage context.
 */
export const query = graphql`
  query PageTemplate($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        slug
        date
        template
        showInNav
        navOrder
        metaImage
      }
    }
  }
`;

/**
 * SEO Head Export (Gatsby v5)
 *
 * Generates meta tags for SEO and social sharing.
 * Replaces react-helmet with Gatsby's built-in Head API.
 */
export const Head: HeadFC<PageTemplateData> = ({ data }) => {
  const { frontmatter } = data.mdx;
  const siteUrl = 'https://www.assonuovavita.it';
  const fullTitle = `${frontmatter.title} | Associazione Nuova Vita`;
  const imageUrl = frontmatter.metaImage
    ? `${siteUrl}${frontmatter.metaImage}`
    : undefined;
  const url = `${siteUrl}${frontmatter.slug}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={frontmatter.description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={frontmatter.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={frontmatter.description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
      <html lang="it" />
    </>
  );
};

export default PageTemplate;
