/** @format */

import React, { Component } from "react";
import apiServices from "../services/apiServices";
import { HomePageStyled } from "./HomePageStyled";
import { FormStyled } from "./MoviesPageStyled";
import { Link } from "react-router-dom";

class MoviesPage extends Component {
  state = {
    query: "",
    error: null,
    movies: null,
  };

  componentDidUpdate() {}

  handlChange = (event) => {
    this.setState({ query: event.currentTarget.value });
  };

  handlSubmit = async (event) => {
    const { query } = this.state;
    event.preventDefault();

    const response = await apiServices.findMovie(query);
    this.setState({ movies: response.data.results });
    this.setState({ query: "" });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <FormStyled>
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
        </FormStyled>
        {movies && (
          <HomePageStyled>
            <ul className="popMoviesList">
              {movies.map(({ original_title, id, poster_path }) => (
                <li key={id} className="popMoviesItem">
                  <Link
                    className="popMoviesLink"
                    to={{
                      pathname: `/movies/${id}`,
                      state: { from: this.props.location.pathname },
                    }}
                  >
                    {movies.length > 0 && (
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        alt={original_title}
                        className="popMoviesImage"
                      />
                    )}
                    <p className="popMoviesText">{original_title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </HomePageStyled>
        )}
      </>
    );
  }
}

export default MoviesPage;
