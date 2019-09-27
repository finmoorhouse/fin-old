import React from "react"
import Layout from "../components/layout"
import usePortfolio from "../hooks/use-portfolio"
import PortfolioPreview from "../components/portfolio-preview"
import "../styles/portfolio.css"

export default () => {
  const posts = usePortfolio()
  return (
    <>
      <Layout>
        <div class="portfolio-container">
          <div class="portfolio-gallery">
            <h1 class="portfolio-header">Portfolio</h1>
            <br />
            {posts.map(post => {
              return <PortfolioPreview key={post.slug} post={post} />
            })}
          </div>
        </div>
      </Layout>
    </>
  )
}
