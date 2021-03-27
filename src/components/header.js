import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import "../styles/header.scss"
import MenuItem from "./menu-item"

const Header = ({ siteTitle }) => {
  const [menu, setMenu] = useState("hidden")
  return (
    <div id="nav-wrapper">
      <nav>
        <div className="header-title">
          <Link to="/">{siteTitle}</Link>
          {/*<input type="checkbox" />*/}
          <div className={'hamburger ' + ((menu === 'visible') ? 'checked' : 'unchecked')} onClick={() => setMenu((menu==='visible') ? 'hidden' : 'visible')}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {/*<hr className="header-line" />*/}
        <div className={'menu-wrapper ' + menu}>
          <MenuItem whereTo={"/"} name={"About"} />
          <MenuItem whereTo={"/writing"} name={"Writing"} />
          <MenuItem whereTo={"/portfolio"} name={"Portfolio"} />
          <MenuItem whereTo={"/contact"} name={"Contact"} />
        </div>
      </nav>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
