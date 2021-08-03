/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import apiServices from "../services/apiServices";
import { HomePageStyled } from "./HomePageStyled";

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    apiServices
      .fetchPopularMovie()
      .then((response) => this.setState({ movies: response.data.results }));
  }

  render() {
    const { movies } = this.state;
    return (
      <HomePageStyled>
        <h2 className="popMoviesTitle">Trending today</h2>
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
    );
  }
}

export default HomePage;
