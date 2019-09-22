import React from 'react';
import { Link } from 'gatsby';



const PostPreview = ({ post }) => (
  
    <div>
      <h3>
        <Link to={post.path}>{post.title}</Link>
      </h3>
      <h1> {post.path} </h1>
      <p>{post.excerpt}</p>
    </div>

);

export default PostPreview;
