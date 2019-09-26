import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import "../styles/post.css"

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
      <h1>{post.frontmatter.title}</h1>
      <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
      <MDXRenderer>{post.body}</MDXRenderer>
      <Link to={backTo}>{"\u2665 back to all posts" + backTo}</Link>
    </Layout>
  )
}
export default PostTemplate
