import React from "react"
import { Link } from "gatsby"

function MenuItem(props) {
  let isRoot = true
  if (props.whereTo === "/") {
    isRoot = false
  }
  return (
    <h3 className="sidebar-menu-item">
      <Link
        activeClassName="active"
        partiallyActive={isRoot}
        to={props.whereTo}
      >
        {props.name}
      </Link>
    </h3>
  )
}

export default MenuItem
