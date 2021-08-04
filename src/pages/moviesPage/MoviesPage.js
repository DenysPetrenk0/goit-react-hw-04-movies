/** @format */

import React, { Component } from "react";
import apiServices from "../../services/apiServices";
import Movies from "../../Components/movies/Movies";
import Home from "../../Components/home/Home";
import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

class MoviesPage extends Component {
  state = {
    query: "",
    movies: null,
  };

  componentDidMount() {
    const movies = localStorage.getItem("movies");
    const parsedmovies = JSON.parse(movies);
    if (parsedmovies) {
      this.setState({ movies: parsedmovies });
    }
  }

  fetchApi = async (query) => {
    const response = await apiServices.findMovie(query).catch(() => {
      error({
        text: "oops something went wrong!!!!!!!!!!!",
      });
    });
    this.setState({ movies: response.data.results });
  };

  render() {
    const { movies } = this.state;
    movies !== null && localStorage.setItem("movies", JSON.stringify(movies));
    return (
      <>
        <Movies fetchApi={this.fetchApi} />
        {movies && <Home movies={movies} location={this.props.location} />}
      </>
    );
  }
}

export default MoviesPage;
