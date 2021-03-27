import React from "react"
import { Link } from "gatsby"
import "../styles/writing.scss"

const PostPreview = ({ post }) => (
  <div className='post-preview'>
    <h3 class="post-title">
      <Link to={post.path}>{post.title}</Link>
    </h3>
    <h4 class="date-published">{post.date}</h4>
   {/* <hr class="post-line" /> */}
  </div>
)

export default PostPreview
