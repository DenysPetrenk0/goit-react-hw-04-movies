/** @format */

import React, { Component } from "react";
import Home from "../../Components/home/Home";
import apiServices from "../../services/apiServices";
import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    apiServices
      .fetchPopularMovie()
      .then((response) => this.setState({ movies: response.data.results }))
      .catch(() => {
        error({
          text: "oops something went wrong!!!!!!!!!!!",
        });
      });
  }

  render() {
    const { movies } = this.state;
    return (
      <Home
        movies={movies}
        location={this.props.location}
        title={"Trending today"}
      />
    );
  }
}

export default HomePage;
