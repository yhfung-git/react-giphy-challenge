import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectedGif) {
      this.props.selectedGif(this.props.id);
    }
  }

  // No need to call render if props.id did not change
  shouldComponentUpdate(nextProps) {
    return nextProps.id !== this.props.id;
  }

  render() {
    if (!this.props.id) {
      return null;
    }

    const src = `https://media0.giphy.com/media/${this.props.id}/giphy.gif`;

    return (
      <img src={src} alt="gif" className='gif' onClick={this.handleClick}/>
    )
  }
}

export default Gif;
