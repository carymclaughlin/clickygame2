import React, { Component } from 'react';

const jumboStyle = {
  color: 'black',
  textAlign: 'center'
}

class Animal extends Component {

  render() {
    return (
      <div className="jumbotron" style={jumboStyle}>
        <h1>"Noah's Collection"</h1>
        <h2>Click on an image to earn points, but don't click on any more than once.</h2>
      </div>
    );
  }
}
export default Animal;