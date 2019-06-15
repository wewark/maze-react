import React from 'react'

import './game.css'

export default function Square(props) {
  let content = null
  if (props.isCurPos) {
    content = <img src={ require('./img/mario.png')} alt='mario' className='icon' />
  } else if (props.hasFood) {
    content = 'F'
  }
  return (
    <button className="square">
      {content}
    </button>
  )
}
