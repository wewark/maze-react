import React from 'react';

import Square from './square'
import './App.css'

export default class Board extends React.Component {
  renderSquare() {
    return <Square />;
  }

  render() {
    let board = Array(this.props.height)
    for (let i = 0; i < board.length; i++) {
      let row = Array(this.props.width)
      for (let j = 0; j < row.length; j++) {
        row[j] = (
          <Square
            key={i * row.length + j}
            isCurPos={this.props.pos.x === i && this.props.pos.y === j}
          />)
      }

      board[i] = (<div
        key={i}
        className="board-row">
        {row}
      </div>)
    }

    return (
      <div>
        {board}
      </div>);
  }
}
