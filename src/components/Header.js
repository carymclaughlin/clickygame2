import React, { Component } from "react";
import Title from "./Title";
import Instruction from "./Instruction";
import Score from "./Score";

const style = {
  position: 'fixed',
  backgroundColor:'transparent',
  width: '30%',
  fontSize: "20px",
  color: "wheat"
}

class Header extends Component {
  render() {
    return (
      <div className="navbar"
      style={style}>
        
          <Title className="navbar-brand" />
          <Instruction />
          <Score score={this.props.score} topScore={this.props.topScore}/>
        
      </div>
    );
  }
}

export default Header;