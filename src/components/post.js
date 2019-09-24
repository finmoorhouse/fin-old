import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from "gatsby";
import Layout from '../components/layout';
import Img from 'gatsby-image'

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        path
        featuredImage{
          childImageSharp {
            sizes(maxWidth: 630) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
    <MDXRenderer>{post.body}</MDXRenderer>
    <Link to="/writing">&larr; back to all posts</Link>
  </Layout>
);

export default PostTemplate;