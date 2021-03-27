import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/header.scss"
import MenuItem from "./menu-item"

const Header = ({ siteTitle }) => (
  <div id="nav-wrapper">
    <nav>
      <div className="header-title">
        <Link to="/">{siteTitle}</Link>
        <input type="checkbox" />
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      </div>
      {/*<hr className="header-line" />*/}
      <div className="menu-wrapper" id="opener">
        <MenuItem whereTo={"/"} name={"about"} />
        <MenuItem whereTo={"/writing"} name={"writing"} />
        <br id="header-breaker" />
        <MenuItem whereTo={"/portfolio"} name={"portfolio"} />
        <MenuItem whereTo={"/contact"} name={"contact"} />
      </div>
    </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
