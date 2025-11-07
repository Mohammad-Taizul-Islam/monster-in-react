import React from 'react'
import { createPortal } from 'react-dom'
const PopupContent = ({copied}) => {
  return createPortal(
    <section>
      {copied && <p style={{position: 'absolute',color:"red", bottom:'3rem'}}>Copy from clipboard </p>}
    </section>,
    document.querySelector("#popup-content")
  )
}

export default PopupContent