import React from 'react';
import Layout from '../components/layout';
import usePortfolio from '../hooks/use-portfolio';
import PortfolioPreview from '../components/portfolio-preview';
import "../styles/portfolio.css"
import Img from 'gatsby-image'
import graphql from 'gatsby'

export default () => {
  const posts = usePortfolio();
  return (
    <>
      <Layout>
        <h2>Read my blog</h2>

        {posts.map(post => {
          return (<PortfolioPreview key={post.slug} post={post} />);
        })}
      </Layout>
    </>
  );
};

