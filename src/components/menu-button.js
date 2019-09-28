import React from "react"

function MenuButton(props) {
  function handleClick(e) {
    e.preventDefault()
    document.getElementById("opener").style.display = "block"
  }

  return (
    <h2 className="menu-button">
      {"Fin Moorhouse    /    "}
      <a href="#" onClick={handleClick}>
        <b>Menu</b>
      </a>
    </h2>
  )
}

export default MenuButton
