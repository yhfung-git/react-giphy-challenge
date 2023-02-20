import React, { Component } from 'react';

class SearchBar extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = ({
  //     term: ""
  //   })
  // }

  handleUpdate = (event) => {
    // this.setState({
    //   term: event.target.value
    // })

    this.props.searchFunction(event.target.value);
  }

  shouldComponentUpdate(nextProps) {
    // return nextProps.term !== this.state.term;
    return false;
  }

  render() {
    return (
      <input
        // value={this.state.term}
        type="text"
        placeholder="Search..."
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    )
  }
}

export default SearchBar;
