import React from "react"

function Aside(props) {
  /* The for='' and id='' need to be different. */
  return (
    <>
      <span className='aside'>
          <span>
            {props.children}
          </span>
      </span>
    </>
  )
}

export default Aside
