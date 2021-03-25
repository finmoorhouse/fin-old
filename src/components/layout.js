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


const Layout = ({ children, path, theme }) => {
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
      <div className={"content-div " + (theme ? "light" : "dark")}>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,800|IBM+Plex+Mono:300|Chivo:400,700,800|Space+Mono|Merriweather:300,400&display=swap"
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
        <main className={path}>
        <Header siteTitle={data.site.siteMetadata.title} />
      <DarkModeToggle />

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
Layout.defaultProps = {
  path: "unknown",
}

export default Layout
