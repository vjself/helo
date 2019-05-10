import React, { Component } from "react";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      search: "",
      userposts: true
    };
  }

  changeHandler = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  searchPosts = () => {};

  render() {
    return (
      <div>
        <div>
          <input
            name="search"
            placeholder="Search here..."
            value={this.state.search}
            type="text"
            onChange={e => {
              this.changeHandler(e.target.name, e.target.value);
            }}
          />
          <button onClick={this.searchPosts}>Go</button>
          <button
            onClick={() => {
              this.setState({
                search: ""
              });
            }}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
