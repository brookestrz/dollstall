import React from 'react'
import "./Bubble.css"

function Bubble(props) {
  return (
    <div className="bubble">
        <span className="text">{props.text}</span>
        <span className="bubheader">{props.header}</span>
      
    </div>
  )
}

export default Bubble
