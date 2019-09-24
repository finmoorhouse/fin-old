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
            featuredImage {
              childImageSharp {
                sizes(maxWidth:500){
                  ...GatsbyImageSharpSizes
                }
              }
            } 
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
    featuredImage:post.frontmatter.featuredImage
  }));
};

export default usePortfolio;