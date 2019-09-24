import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';


const PortfolioPreview = ({ post }) => (
  
    <div class = 'portfolio-box'>
      <h3>
        <Link to={post.path}>{post.title}</Link>
        <Img sizes={post.featuredImage.childImageSharp.sizes} />
      </h3>
    </div>

);

export default PortfolioPreview;
