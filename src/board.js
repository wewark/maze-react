import React from 'react';

import Square from './square'
import './App.css'

export default class Board extends React.Component {
  render() {
    let board = Array(this.props.height).fill(null).map((_, i) => (<div
      key={i}
      className="board-row">
      {
        Array(this.props.width).fill(null).map((_, j) => (
          <Square
            key={i * this.props.width + j}
            isCurPos={this.props.pos.x === i && this.props.pos.y === j}
            hasFood={this.props.hasFood[i][j]}
          />
        ))
      }
    </div>))

    return (
      <div>
        {board}
      </div>);
  }
}
