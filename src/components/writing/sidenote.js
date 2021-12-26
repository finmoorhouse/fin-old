import React from "react"

function Sidenote(props) {
  return (
    <>
      <label for={props.label} htmlFor={props.label} class="margin-toggle sidenote-number"></label>
      <input type="checkbox" id={props.label} class="margin-toggle"/>
      <span class="sidenote">{props.children}</span>
    </>
  )
}

export default Sidenote
