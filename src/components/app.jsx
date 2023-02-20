import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gif_list";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      selectedGifId: "xT9IgDEI1iZyb2wqo8",
      gifs: []
    });
  }

  search = (query) => {
    const GIPHY_API_KEY = "ZoAiziR4EcZS9WY0pLtLT6dAgTMXM2Px";
    const path = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=10`;

    fetch(path).then(response => response.json()).then((data) => {
      const gifs = data.data.map(giphy => giphy.id)
      this.setState({
        gifs: gifs
      })
    })
  }

  updateSelectedGif = (id) => {
    this.setState({
      selectedGifId: id
    })
  }

  render() {
    return(
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} updateFunction={this.updateSelectedGif}/>
        </div>
      </div>
    );
  }
}

export default App;
