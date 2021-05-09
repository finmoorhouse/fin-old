/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
      query {
        allMdx {
          nodes {
            frontmatter {
              slug
              path
            }
          }
        }
      }
    `);
  
    if (result.errors) {
      reporter.panic('failed to create posts', result.errors);
    }
  
    const posts = result.data.allMdx.nodes;
  
    posts.forEach(post => {
      actions.createPage({
        path: post.frontmatter.path,
        component: require.resolve('./src/components/post.js'),
        context: {
          slug: post.frontmatter.slug,
        },
      });
    });
  };
  
  exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      },
    })
  }