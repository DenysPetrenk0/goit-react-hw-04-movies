/** @format */

import React, { Component, Suspense } from "react";
import MovieDetails from "../../Components/movieDetails/MovieDetails";
import Navigation from "../../Components/navigation/Navigation";
import ContentSwitcher from "../../contentSwitcher/ContentSwitcher";
import { movieDetailsRoutes } from "../../routes/movieDetailsRoutes";
import apiServices from "../../services/apiServices";
import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

class MovieDetailsPage extends Component {
  state = {
    title: null,
    poster_path: null,
    vote_average: null,
    overview: null,
    genres: null,
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await apiServices.fetchMovieDetails(id).catch(() => {
      error({
        text: "oops something went wrong!!!!!!!!!!!",
      });
    });
    this.setState({ ...response.data });
  }

  render() {
    const { match, location, history } = this.props;
    const { title, poster_path, vote_average, overview, genres } = this.state;
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <MovieDetails
          history={history}
          location={location}
          title={title}
          poster_path={poster_path}
          overview={overview}
          vote_average={vote_average}
          genres={genres}
        />
        <Navigation
          routes={movieDetailsRoutes}
          url={match.url}
          prevPathname={location.state.from}
        />
        <ContentSwitcher routes={movieDetailsRoutes} path={match.path} />
      </Suspense>
    );
  }
}

export default MovieDetailsPage;
