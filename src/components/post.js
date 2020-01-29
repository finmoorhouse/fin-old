import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import "../styles/post.css"
import "katex/dist/katex.min.css";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        path
        type
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 630) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
      body
    }
  }
`

const PostTemplate = function({ data: { mdx: post } }) {
  let backTo = "/writing"
  if (post.frontmatter.type === "portfolio") {
    backTo = "/portfolio"
  }
  return (
    <Layout>
      <div class="page-wrapper">
        <h1 class="page-title">{post.frontmatter.title}</h1>

        <hr />

        <MDXRenderer>{post.body}</MDXRenderer>
        <Link className="big" to={backTo}>
          {"⟵ back to " + backTo.slice(1)}
        </Link>
        <br />
        <br />
      </div>
    </Layout>
  )
}
export default PostTemplate
