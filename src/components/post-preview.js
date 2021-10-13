import React from "react"
import { Link } from "gatsby"
import "../styles/writing.scss"


const PostPreview = ({ post }) => (
  <div className='post-preview'>
    <h3 className="post-title">
      <Link to={post.path}>{post.title}</Link>
    </h3>
    <h4 className="date-published">{post.date}</h4>
   {/* <hr className="post-line" /> */}
  </div>
)

export default PostPreview
