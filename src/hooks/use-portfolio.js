import { graphql, useStaticQuery } from "gatsby"

const usePortfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { order: ASC, fields: [frontmatter___order] }
        filter: { frontmatter: { type: { eq: "portfolio" } } }
      ) {
        nodes {
          frontmatter {
            title
            author
            slug
            path
            type
            order
            subtitle
            subtype
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 400, maxHeight: 240) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `)

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    path: post.frontmatter.path,
    subtitle: post.frontmatter.subtitle,
    excerpt: post.excerpt,
    type: post.frontmatter.type,
    subtype: post.frontmatter.subtype,
    order: post.frontmatter.order,
    featuredImage: post.frontmatter.featuredImage,
  }))
}

export default usePortfolio
