import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import * as styles from './Header.module.css';
import type { PageFrontmatter } from '../types/frontmatter';

interface NavigationQueryData {
  allMdx: {
    nodes: Array<{
      frontmatter: PageFrontmatter;
    }>;
  };
}

export const Header: React.FC = () => {
  // Query all pages with showInNav: true, sorted by navOrder
  const data = useStaticQuery<NavigationQueryData>(graphql`
    query NavigationMenu {
      allMdx(
        filter: { frontmatter: { showInNav: { eq: true } } }
        sort: { frontmatter: { navOrder: ASC } }
      ) {
        nodes {
          frontmatter {
            title
            slug
            navOrder
          }
        }
      }
    }
  `);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Associazione Nuova Vita
        </Link>
        <nav className={styles.nav} aria-label="Navigazione principale">
          {data.allMdx.nodes.map((node) => (
            <Link
              key={node.frontmatter.slug}
              to={node.frontmatter.slug}
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
            >
              {node.frontmatter.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
