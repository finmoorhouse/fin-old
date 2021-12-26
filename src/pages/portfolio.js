import React from "react"
import Layout from "../components/layout"
import usePortfolio from "../hooks/use-portfolio"
import PortfolioPreview from "../components/portfolio-preview"
import "../styles/portfolio.scss"

import Seo from "../components/seo"

const AllPortfolioPosts = () => {
  const posts = usePortfolio()
  return (
    <>
      <Layout path="portfolio-colour">
      <Seo title="🎨 Portfolio" pageThumb = "/meta-portfolio.jpg" />
        <h1 className='page-title'>Portfolio</h1>
        <hr/>
        <br />
        <div className="portfolio-gallery">
          {posts.map(post => {
            return <PortfolioPreview key={post.slug} post={post} />
          })}
        </div>
        <br />
      </Layout>
    </>
  )
}

export default AllPortfolioPosts