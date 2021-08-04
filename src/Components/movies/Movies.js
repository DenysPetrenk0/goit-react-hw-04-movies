/** @format */

import React, { Component } from "react";
import { MoviesStyled } from "./MoviesStyled";

class Movies extends Component {
  state = {
    query: "",
  };

  handlChange = (event) => {
    this.setState({ query: event.currentTarget.value });
  };

  handlSubmit = async (event) => {
    const { query } = this.state;
    event.preventDefault();
    this.props.fetchApi(query);
  };

  render() {
    return (
      <MoviesStyled>
        <form className="SearchForm" onSubmit={this.handlSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            placeholder="Search movies"
            onChange={this.handlChange}
          />
        </form>
      </MoviesStyled>
    );
  }
}

export default Movies;
