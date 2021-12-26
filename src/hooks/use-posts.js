import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx (
        sort: { order: DESC  , fields: [frontmatter___date] }
        filter: { frontmatter: { type:{eq:"post"}} }
        ){
        nodes {
          frontmatter {
            title
            author
            slug
            path
            type
            date(
              formatString: "MMMM DD, YYYY"
            )
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 500)
              }
            } 
          }
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    image: post.frontmatter.image,
    path: post.frontmatter.path,
    date: post.frontmatter.date,
    excerpt: post.excerpt,
    type:post.frontmatter.type,
    featuredImage:post.frontmatter.featuredImage,
  }));
};

export default usePosts;