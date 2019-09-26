import React from "react"
import { Link } from "gatsby"

const PostPreview = ({ post }) => (
  <div>
    hello?
    <h3>
      <Link to={post.path}>{post.title}</Link>
    </h3>
    <p>{post.excerpt}</p>
  </div>
)

export default PostPreview
