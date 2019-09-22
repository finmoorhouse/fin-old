import React from 'react';
import { Link } from 'gatsby';



const PortfolioPreview = ({ post }) => (
  
    <div class = 'portfolio-box'>
      <h3>
        <Link to={post.path}>{post.title}</Link>
      </h3>
    </div>

);

export default PortfolioPreview;
