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
import "normalize.css"
import "../styles/layout.scss"
import { Helmet } from "react-helmet"
import DarkModeToggle from "./dark-mode-toggle"

const Layout = ({ children, path, theme, pageType }) => {
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
      <div className={"content-div " + (theme ? "light" : "dark") + " " + pageType}>
        <Helmet>
          {/*
            <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300|Chivo:400,700|Merriweather:300&display=swap"
            rel="stylesheet"
          />
          */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Chivo:wght@400;700&family=IBM+Plex+Mono:wght@300&family=Lora:ital,wght@0,400;0,700;1,400&display=swap"
            rel="stylesheet"
          />
          <link href="https://github.com/finmoorhouse" rel="me" />
          <link
            rel="webmention"
            href="https://webmention.io/www.finmoorhouse.com/webmention"
          />
          <link
            rel="pingback"
            href="https://webmention.io/www.finmoorhouse.com/xmlrpc"
          />
          {/* Delete below if not using */}
          {/*  <link rel="stylesheet" href="https://use.typekit.net/nnv1akw.css"></link>  */}
        </Helmet>
        <div className="nav-content-wrapper">
        {/* <React.StrictMode> */}
          <Header siteTitle={data.site.siteMetadata.title} />
          <DarkModeToggle />
          <main className={path}>{children}</main>
          {/* </React.StrictMode> */}
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
Layout.defaultProps = {
  path: "unknown",
}

export default Layout
