import React, { useState } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/post.scss"
import "katex/dist/katex.min.css"
import SEO from "../components/seo"

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

const ThemeContext = React.createContext()

const PostTemplate = function({ data: { mdx: post } }) {
  let backTo = "/writing"
  if (post.frontmatter.type === "portfolio") {
    backTo = "/portfolio"
  }
  const [dark, setDark] = useState(false)

  return (
    <Layout theme={dark}>
      <SEO
        title={post.frontmatter.title}
        myFeaturedImage={post.frontmatter.featuredImage}
      />
      <div className={"page-wrapper post h-entry " + (post.frontmatter.type==="post" && "post-wrapper")}>
        <button className="dark-mode-toggle" onClick={() => setDark(!dark)}>
          <svg viewBox="0 0 600 600">
            <path
              d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
              id="moon"
            />
          </svg>
        </button>
        <h1 className="page-title">{post.frontmatter.title}</h1>
  <a rel='Author' className='p-author h-card hidden' href="https://www.finmoorhouse.com">{post.frontmatter.author}</a>
  <a class="u-url hidden" href={`https://www.finmoorhouse.com${post.frontmatter.path}`}>…</a>
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
