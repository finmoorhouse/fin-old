import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import "../styles/header.scss"
import MenuItem from "./menu-item"
import DarkModeToggle from "./dark-mode-toggle"

const Header = ({ siteTitle }) => {
  const [menu, setMenu] = useState("hidden")
  return (
    <div id="nav-wrapper">
      <nav>
        <div className="header-title">
          <Link to="/">{siteTitle}</Link>
          <div className="moon-and-hamburger">
            <DarkModeToggle mobileMoon="false" />
            <div
              role="button"
              aria-label="Menu"
              tabIndex={0}
              className={
                "hamburger " + (menu === "visible" ? "checked" : "unchecked")
              }
              onClick={() => setMenu(menu === "visible" ? "hidden" : "visible")}
              onKeyDown={() =>
                setMenu(menu === "visible" ? "hidden" : "visible")
              }
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className={"menu-wrapper " + menu} role="button" tabIndex={0}>
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
