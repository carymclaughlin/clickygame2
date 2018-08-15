import React, { Component } from 'react';


class Score extends Component {
  render() {
    return (
      <div className="Score">Score: {this.props.score} | High Score: {this.props.topScore}</div>
    );
  }
}

export default Score;