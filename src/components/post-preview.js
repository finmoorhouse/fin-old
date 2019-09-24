import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image'


const PostPreview = ({ post }) => (
  
    <div>
        hello?
      <h3>
        <Link to={post.path}>{post.title}</Link>
      </h3>
      <Img sizes={post.featuredImage.childImageSharp.sizes} />
      <p>{post.excerpt}</p>
    </div>

);

export default PostPreview;
