import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `lightblue`,
      marginBottom: `1.45rem`,
    }}
  >
    <div>
      <h1>
        <Link to="/" >
          {siteTitle}
        </Link>
      </h1>
     <Link to="/writing/"> Writing &rarr;</Link>
     <Link to="/portfolio/"> Portfolio &rarr;</Link>
     <Link to="/skills/"> Skills &rarr;</Link>
     <Link to="/skills/"> Contact &rarr;</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
