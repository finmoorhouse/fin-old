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
              childCloudinaryAsset {
                fluid(maxWidth: 1200, transformations: ["ar_1.5","c_fill","g_center","q_auto:best"]) {
                  ...CloudinaryAssetFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `)

  // Also in featuredImage query until I switched to Cloudinary — 
  // childImageSharp {
  //   gatsbyImageData(width: 400, height: 250, layout: CONSTRAINED)
  // }

  return data.allMdx.nodes.map((post) => ({
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
