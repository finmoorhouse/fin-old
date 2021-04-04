import React, { useCallback, useState } from "react"
import "../styles/dark-mode-toggle.scss"
import Moon from "../assets/moon.svg";

const DarkModeToggle = () => {
  let myTheme = null
  if (!(typeof window === "undefined")) {
    // Never server-side render this, since we can't determine
    // the correct initial state until we get to the client.
    myTheme = window.__theme
  }
  const [checked, setChecked] = useState(myTheme === "light")
  const onChange = useCallback(e => {
    if (!(typeof window === "undefined")) {
      window.__setPreferredTheme(checked ? "dark" : "light")
    }
    setChecked(!checked)
  })

  return (
    <>
      <button
        className={
          "dark-mode-toggle" + (checked ? " toggle-dark" : " toggle-light")
        }
        amIChecked={checked}
        onClick={onChange}
      >
        <Moon className={"circle"} />
        {/*
        <span className={"circle" + (checked ? " sun" : " moon")}></span>
        <span
          className={"sun-rays" + (checked ? " shining" : " hiding")}
        ></span>
        */}
      </button>
    </>
  )
}

export default DarkModeToggle
