import React from "react"

function Sidenote(props) {
  const forLabel = props.label || Math.random().toString(36).substr(2, 9)
  return (
    <>
      <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }</>
      <label for={forLabel} htmlFor={forLabel} className="margin-toggle sidenote-number"></label>
      <input type="checkbox" id={forLabel} className="margin-toggle"/>
      <span className="sidenote">{props.children}</span>
    </>
  )
}

export default Sidenote
