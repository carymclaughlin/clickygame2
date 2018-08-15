import React, { Component } from 'react';

const divStyle = {
  width:'33%',
  float: 'right'
}
const imgStyle = {
  border: 'black solid 4px',
  height: "200px",
  width: "200px",
  margin: '16px',
  textAlign:'center'
}
class Image extends Component {
  render() {
    return (
      <div  id={this.props.id} className="Image col-3"
      style = {divStyle} 
      onClick={() => this.props.handleImageClick(this.props.id)}  
      >
        <img id={this.props.id} src={this.props.path} alt={this.props.name}
        style={imgStyle}
          />
      </div>
    );
  }
}

export default Image;