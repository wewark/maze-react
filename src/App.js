import React from 'react'
import './App.css';

import Game from './game'

class App extends React.Component {
  constructor(props) {
    super(props)
    // const height = window.prompt('Height')
    // const width = window.prompt('Width')
    const height = 5
    const width = 5

    this.state = {
      height: height,
      width: width,
    }
  }
  
  render() {
    return (
      <Game
        height={this.state.height}
        width={this.state.width}
      />
    )
  }
}

export default App;
