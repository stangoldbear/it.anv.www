import * as React from 'react';
import type { HeadFC } from 'gatsby';

export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  pathname?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, image, pathname }) => {
  return null; // Gatsby v5 uses Head export
};

export const Head: HeadFC<any, SEOProps> = ({ pageContext }) => {
  const siteUrl = 'https://www.assonuovavita.it';
  const fullTitle = `${pageContext.title} | Associazione Nuova Vita`;
  const imageUrl = pageContext.image ? `${siteUrl}${pageContext.image}` : undefined;
  const url = pageContext.pathname ? `${siteUrl}${pageContext.pathname}` : siteUrl;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={pageContext.description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={pageContext.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={pageContext.description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
      <html lang="it" />
    </>
  );
};

export default SEO;
