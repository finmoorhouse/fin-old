import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PortfolioPreview = ({ post }) => (
  <div class="portfolio-box">
    <Link to={post.path}>
      <div class="portfolio-image">
        <Img sizes={post.featuredImage.childImageSharp.sizes} />
      </div>
      <h3 class="portfolio-title">{post.title}</h3>
    </Link>
    <h4 class="subtype">{post.subtype}</h4>
    <hr class="portfolio-line" />
    <h4 class="portfolio-description">{post.subtitle}</h4>
  </div>
)

export default PortfolioPreview
