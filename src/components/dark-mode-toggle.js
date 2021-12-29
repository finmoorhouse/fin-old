import React, { useState } from "react"
import "../styles/dark-mode-toggle.scss"
import Moon from "../assets/moon.svg"

const DarkModeToggle = ({ mobileMoon }) => {
  let myTheme = null
  if (!(typeof window === "undefined")) {
    // Never server-side render this, since we can't determine
    // the correct initial state until we get to the client.
    myTheme = window.__theme
  }
  const [checked, setChecked] = useState(myTheme === "light")
  const onChange = () => {
    if (!(typeof window === "undefined")) {
      window.__setPreferredTheme(checked ? "dark" : "light")
    }
    setChecked(!checked)
  }

  return (
    <>
      <button
      type="button"
      aria-label="Dark mode toggle"
        className={
          "dark-mode-toggle" +
          (checked ? " toggle-dark" : " toggle-light") +
          " " +
          (mobileMoon === "false" ? "mobile-moon" : "desktop-moon")
        }
        onClick={onChange}
      >
        <Moon className={"circle"} />
      </button>
    </>
  )
}

export default DarkModeToggle
