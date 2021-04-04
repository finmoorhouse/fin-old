import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PortfolioPreview = ({ post }) => (
  <div className="portfolio-box">
    <Link to={post.path}>
      <div className="portfolio-image">
        <Img sizes={post.featuredImage.childImageSharp.sizes} />
      </div>
      <h3 className="portfolio-title">{post.title}</h3>
    </Link>
    <h4 className="subtype">{post.subtype}</h4>
    <hr className="portfolio-line" />
    <h4 className="portfolio-description">{post.subtitle}</h4>
  </div>
)

export default PortfolioPreview
