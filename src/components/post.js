import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/post.scss"
import "katex/dist/katex.min.css"
import Seo from "../components/seo"
import TableOfContents from "../components/table-of-contents"

export const query = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        slug
        path
        type
        canonicalUrl
        featuredImage {
          childImageSharp {
            fixed(width: 1200) {
              src
            }
          }
        }
      }
      body
      tableOfContents
      timeToRead
      wordCount {
        words
      }
    }
  }
`

const PostTemplate = function ({ data: { mdx: post } }) {
  let backTo = "/writing"
  let sidenotesStyle = ""
  if (post.frontmatter.type === "portfolio") {
    backTo = "/portfolio"
  }
  if (post.frontmatter.slug.includes("sidenotes")) {
    sidenotesStyle = "writing-with-sidenotes"
  }

  return (
    <Layout pageType={sidenotesStyle}>
      <Seo
        title={post.frontmatter.title}
        myFeaturedImage={post.frontmatter.featuredImage}
        canonicalUrl={post.frontmatter.canonicalUrl}
      />
      <div
        className={
          "page-wrapper post h-entry " +
          (post.frontmatter.type === "post" && "post-wrapper")
        }
      >
        <h1 className="page-title">{post.frontmatter.title}</h1>

        <a
          rel="Author"
          className="p-author h-card hidden"
          href="https://www.finmoorhouse.com"
        >
          {post.frontmatter.author}
        </a>
        <a
          className="u-url hidden"
          href={`https://www.finmoorhouse.com${post.frontmatter.path}`}
        >
          …
        </a>
        {(!post?.tableOfContents?.items ||
          post.frontmatter.type === "portfolio") && <hr />}
        {post?.tableOfContents?.items && post.frontmatter.type === "post" && (
          <TableOfContents
            items={post.tableOfContents.items}
            wordCount={post.wordCount.words}
            timeToRead={post.timeToRead}
          />
        )}
        <MDXRenderer>{post.body}</MDXRenderer>
        <Link className="big back-button" to={backTo}>
          {"⟵ back to " + backTo.slice(1)}
        </Link>
        <br />
        <br />
      </div>
    </Layout>
  )
}
export default PostTemplate
