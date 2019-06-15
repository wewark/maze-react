import React from 'react';

import Board from './board'

export default class Game extends React.Component {
  constructor(props) {
    super(props)
    document.onkeydown = this.handleKeypPress;
    this.state = {
      // x and y changes for each direction
      direction: {
        ArrowUp: { x: -1, y: 0},
        ArrowDown: { x: 1, y: 0},
        ArrowLeft: { x: 0, y: -1},
        ArrowRight: { x: 0, y: 1},
      },
      // Current position
      pos: {
        x: 0,
        y: 0,
      },
      // 2D boolean array if each position has food or not
      hasFood: this.spreadFood(this.props.height)
    }
  }

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  // Returns food 2D array given the probability of food
  spreadFood = (foodCount) => {
    let hasFood = Array(this.props.height).fill(null).map(() => Array(this.props.width).fill(false))
    for (let i = 0; i < foodCount; i++) {
      const pos = this.getRandomEmptyPos(hasFood)
      hasFood[pos.x][pos.y] = true
    }
    return hasFood
  }

  // Returns coordinates of a random empty position in arr
  getRandomEmptyPos = (arr) => {
    let pos = {
      x: this.getRandomInt(this.props.height),
      y: this.getRandomInt(this.props.width),
    }
    while (arr[pos.x][pos.y]) {
      pos = {
        x: this.getRandomInt(this.props.height),
        y: this.getRandomInt(this.props.width),
      }
    }
    return pos
  }

  handleKeypPress = (e) => {
    this.move(this.state.direction[e.key])
    this.eatFood()
  }

  // Moves the player in the given direction if the
  // position is a valid one
  move = (dir) => {
    const newPos = {
      x: this.state.pos.x + dir.x,
      y: this.state.pos.y + dir.y
    }
    if (!this.validPosition(newPos)) {
      return
    }
    this.setState({
      ...this.state,
      pos: newPos,
    })
  }

  // Eat food at current position
  eatFood = () => {
    const pos = this.state.pos
    const hasFood = this.state.hasFood.slice().map((row) => row.slice())
    hasFood[pos.x][pos.y] = false
    this.setState({
      ...this.state,
      hasFood: hasFood
    })
  }

  validPosition = (pos) => {
    return (
      pos.x >= 0 && pos.x < this.props.height &&
      pos.y >= 0 && pos.y < this.props.width)
  }

  render() {
    return (
      <Board
        height={this.props.height}
        width={this.props.width}
        pos={this.state.pos}
        hasFood={this.state.hasFood}
      />)
  }
}
