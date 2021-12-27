import React from "react"

function Sidenote(props) {
  return (
    <>
      <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }</>
      <label for={props.label} htmlFor={props.label} className="margin-toggle sidenote-number"></label>
      <input type="checkbox" id={props.label} className="margin-toggle"/>
      <span className="sidenote">{props.children}</span>
    </>
  )
}

export default Sidenote
