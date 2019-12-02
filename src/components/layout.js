/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "../styles/layout.css"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="content-div">
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Karla:400,700|Lora:700|Source+Serif+Pro&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>
          {children}
          <footer></footer>
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
