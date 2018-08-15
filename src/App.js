import React, { Component } from 'react';
import Header from './components/Header'
import Animal from './components/Animal'
import Images from './components/Images'


class App extends Component {
  state = {
    score: 0,
    topScore: 0
  }
  updateScore() {
    let tempScore = this.state.score + 1;
    if (tempScore >= this.state.topScore) {
      this.setState({
        topScore: tempScore,
        score: tempScore
      })
    }
    else {
      this.setState({
        score: tempScore
      })
    }
  }
  resetScore() {
    this.setState({
      score: 0
    })
  }


  render() {
    return (
      <div className="App">
        <Header score={this.state.score} topScore={this.state.topScore} />
        <Animal />
        <Images score={this.state.score} topScore={this.state.topScore} handleScore={this.updateScore.bind(this)}
          
          handleResetScore={this.resetScore.bind(this)}
        />
      </div>
    );
  }
}

export default App;