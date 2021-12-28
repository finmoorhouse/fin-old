import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function PortfolioPreview({ post }) {
  const image = getImage(post.featuredImage)
  return (
    <div className="portfolio-box">
      <Link to={post.path}>
        <div className="portfolio-image">
          {/*<Img sizes={post.featuredImage.childImageSharp.sizes} />*/}
          <GatsbyImage image={image} alt={post.title} className="portfolio-image__inner"/>
        </div>
        <h3 className="portfolio-title">{post.title}</h3>
      </Link>
      <h4 className="subtype">{post.subtype}</h4>
      <hr className="portfolio-line" />
      <h4 className="portfolio-description">{post.subtitle}</h4>
    </div>
  )
}

export default PortfolioPreview
