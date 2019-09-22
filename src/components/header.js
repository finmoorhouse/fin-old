import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"
import MenuItem from './menu-item'

const Header = ({ siteTitle }) => (
  <header>
    <div class='sidebar'>
     <MenuItem whereTo={"/"} name={"about"}/>
     <MenuItem whereTo={"/skills"} name={"skills"} />
     <MenuItem whereTo={"/portfolio"} name={"portfolio"}/>
     <MenuItem whereTo={"/writing"} name={"writing"}/>
     <MenuItem whereTo={"/contact"} name={"contact"}/>
      <h1  >
        <Link class='header-title' to="/" >
          {siteTitle}
        </Link>
      </h1>
     
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
