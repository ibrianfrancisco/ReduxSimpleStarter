import React, { Component } from 'react';

class SearchBar extends Component {
  // This is how we define States or re-initialize/initialize States
  // in a class based component
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={e => this.onSubmitSearch(e)}>
          <input
            value={this.state.term}
            onChange={e => this.onInputChange(e.target.value)} />
        </form>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
  }

  onSubmitSearch(e) {
    e.preventDefault();
    this.props.onSearchTermChange(this.state.term);
  }
}

export default SearchBar;

// state is a plain javascript object that is used to record and react to user
// events. Each class based component that we define has its own state object
