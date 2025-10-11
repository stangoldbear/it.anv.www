import type { GatsbyNode } from 'gatsby';
import path from 'path';

/**
 * Define explicit types for MDX frontmatter
 * This ensures Gatsby knows about all possible frontmatter fields
 * even before any MDX files are created.
 */
export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type MdxFrontmatter {
      title: String!
      description: String!
      slug: String!
      date: Date! @dateformat
      template: String
      showInNav: Boolean
      navOrder: Int
      metaImage: String
    }
  `);
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql<{
    allMdx: {
      nodes: Array<{
        id: string;
        frontmatter: {
          slug: string;
          title: string;
          description: string;
        };
        internal: {
          contentFilePath: string;
        };
      }>;
    };
  }>(`
    query CreatePagesQuery {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
            title
            description
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX files', result.errors);
    return;
  }

  const pageTemplate = path.resolve('./src/templates/Page.tsx');

  result.data?.allMdx.nodes.forEach((node) => {
    createPage({
      path: node.frontmatter.slug,
      component: `${pageTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        title: node.frontmatter.title,
        description: node.frontmatter.description,
        slug: node.frontmatter.slug,
      },
    });
  });
};
