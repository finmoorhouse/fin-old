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
        <h1>Portfolio</h1>
        Filter by:
        <div class="portfolio-gallery">
          {posts.map(post => {
            return <PortfolioPreview key={post.slug} post={post} />
          })}
        </div>
      </Layout>
    </>
  )
}
