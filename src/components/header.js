import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/header.scss"
import MenuItem from "./menu-item"



const Header = ({ siteTitle }) => (
  <header>
    <h1 className="header-title">
      <Link to="/">{siteTitle}</Link>
    </h1>
    <hr className="header-line" />
    <div className="menu-wrapper" id="opener">
      <MenuItem whereTo={"/"} name={"about"} />
      {/*<MenuItem whereTo={"/skills"} name={"skills"} />*/}
      <MenuItem whereTo={"/writing"} name={"writing"} />
      <br id="header-breaker"/>
      <MenuItem whereTo={"/portfolio"} name={"portfolio"} />
      <MenuItem whereTo={"/contact"} name={"contact"} />

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
