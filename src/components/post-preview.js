import React from "react"
import { Link } from "gatsby"
import "../styles/writing.css"
const PostPreview = ({ post }) => (
  <div>
    <h3 class="post-title">
      <Link to={post.path}>{post.title}</Link>
    </h3>
    <hr class="post-line" />
    <h4 class="date-published">{post.type} published on 29th September</h4>
    <p>{post.excerpt}</p>
  </div>
)

export default PostPreview
