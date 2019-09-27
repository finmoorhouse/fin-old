import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/header.css"
import MenuItem from "./menu-item"

const Header = ({ siteTitle }) => (
  <header>
    <h1 class="header-title">
      <Link to="/">{siteTitle}</Link>
    </h1>
    <hr class="header-line" />
    <div class="menu-wrapper">
      <MenuItem whereTo={"/"} name={"about"} />
      <MenuItem whereTo={"/skills"} name={"skills"} />
      <MenuItem whereTo={"/portfolio"} name={"portfolio"} />
      <MenuItem whereTo={"/writing"} name={"writing"} />
      <MenuItem whereTo={"/contact"} name={"contact"} />
    </div>

    <h2 class="menu-button">
      <Link to="/">Menu</Link>
    </h2>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
