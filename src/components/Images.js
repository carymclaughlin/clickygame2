import React, { Component } from 'react';
import Image from './Image'
import animals from "../animals.json"

class Images extends Component {

  state = {
    shuffledanimals: this.shuffle(animals),
    imagesClickedIds: []
  }

  shuffle(array) {

    let counter = array.length;

    while (counter > 0) {

      let index = Math.floor(Math.random() * counter);

      counter--;

      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }

  handleImageClick(id) {
    if (this.state.imagesClickedIds.includes(id)) {
      alert("game over");
      this.setState({ imagesClickedIds: []});
      this.props.handleResetScore();
    }
    else {
      let tempClicks = [...this.state.imagesClickedIds, id]
      let tempanimals = this.shuffle(animals)
      this.props.handleScore();
      //
      this.setState({
        imagesClickedIds: tempClicks,
        shuffledanimals: tempanimals
      })
      
    }

    let temp = this.shuffle(animals)
    this.setState.shuffledanimals = temp;
  }

  render() {
    return (
      <div className="Images container" >
        <div className="row" >
          {this.state.shuffledanimals.map(character => {
            return <Image handleImageClick={() => this.handleImageClick(character.id)}
              key={character.id} id={character.id} path={character.path}

            />
          })
          }
        </div>
      </div>
    );
  }
}

export default Images;