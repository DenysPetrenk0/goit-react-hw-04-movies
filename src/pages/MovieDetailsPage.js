/** @format */

import React, { Component, Suspense } from "react";
import Navigation from "../Components/navigation/Navigation";
import ContentSwitcher from "../contentSwitcher/ContentSwitcher";
import { movieDetailsRoutes } from "../routes/movieDetailsRoutes";
import apiServices from "../services/apiServices";
import { MovieDetailsPageStyled } from "./MovieDetailsPageStyled";

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
    const response = await apiServices.fetchMovieDetails(id);
    this.setState({ ...response.data });
  }

  render() {
    const { match, location, history } = this.props;
    const { title, poster_path, vote_average, overview, genres } = this.state;
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <MovieDetailsPageStyled>
          <button
            type="button"
            className="btnGoBack"
            onClick={() => history.push(location.state.from)}
          >
            Go Back
          </button>
          <h2 className="movieDetaliesTitle">{title}</h2>
          <div className="movieDetaliesBox">
            {poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                className="movieDetaliesImg"
                alt=""
              />
            )}
            <div className="movieDetaliesBoxText">
              <p className="movieDetaliesText">
                <b>User Score:</b> {vote_average}
              </p>
              <p className="movieDetaliesText">
                <b>Overview:</b> {overview}
              </p>
              {genres &&
                genres.map((genre) => (
                  <p key={genre.name} className="movieDetaliesText">
                    <b>Genres:</b>
                    {genre.name}{" "}
                  </p>
                ))}
            </div>
          </div>
        </MovieDetailsPageStyled>
        <Navigation routes={movieDetailsRoutes} url={match.url} />
        <ContentSwitcher routes={movieDetailsRoutes} path={match.path} />
      </Suspense>
    );
  }
}

export default MovieDetailsPage;
