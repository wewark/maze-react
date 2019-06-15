import React from 'react'

import './game.css'

export default function Square(props) {
  const content = props.isCurPos ? 'X' : null
  return (
    <button className="square">
      {content}
    </button>
  )
}
