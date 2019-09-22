import { graphql, useStaticQuery } from 'gatsby';

const usePortfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx (filter: { frontmatter: { type:{eq:"portfolio"}} }){
        nodes {
          frontmatter {
            title
            author
            slug
            path
            type
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    path: post.frontmatter.path,
    excerpt: post.excerpt,
    type:post.frontmatter.type,
  }));
};

export default usePortfolio;