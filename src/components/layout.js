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
import 'normalize.css'
import "../styles/layout.scss"
import { Helmet } from "react-helmet"

const Layout = ({ children, path, theme}) => {
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
      <div className={"content-div "+ (theme ? "light" : "dark")}>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Karla:400,700|Lora:700|Open+Sans:700,800|Space+Mono|Merriweather&display=swap"
            rel="stylesheet"
          />
          <link href="https://github.com/finmoorhouse" rel="me" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className={path}>
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
  path: "unknown"
}


export default Layout
