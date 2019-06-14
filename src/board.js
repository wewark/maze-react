import React from 'react';

import Square from './square'

export default class Board extends React.Component {
  renderSquare() {
    return <Square />;
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare()}
          {this.renderSquare()}
        </div>
      </div>);
  }
}
