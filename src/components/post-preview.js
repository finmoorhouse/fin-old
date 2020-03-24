import React from "react"
import { Link } from "gatsby"
import "../styles/writing.scss"

const PostPreview = ({ post }) => (
  <div>
    <h3 class="post-title">
      <Link to={post.path}>{post.title}</Link>
    </h3>
    <h4 class="date-published">{post.date}</h4>
    <hr class="post-line" />
    
    {/*<p class="excerpt">{post.excerpt}</p>*/}
  </div>
)

export default PostPreview
