import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import "../styles/header.scss"
import MenuItem from "./menu-item"
import MenuButton from "./menu-button"
const Header = ({ siteTitle }) => (
  <header>
    <h1 className="header-title">
      <Link to="/">{siteTitle}</Link>
    </h1>
    <hr className="header-line" />
    <div className="menu-wrapper" id="opener">
      <MenuItem whereTo={"/"} name={"about"} />
      <MenuItem whereTo={"/skills"} name={"skills"} />
      <MenuItem whereTo={"/portfolio"} name={"portfolio"} />
      <MenuItem whereTo={"/writing"} name={"writing"} />
      <MenuItem whereTo={"/contact"} name={"contact"} />
    </div>
    <MenuButton />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
