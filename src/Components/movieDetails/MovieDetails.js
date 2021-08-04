/** @format */

import React from "react";
import { MovieDetailsStyled } from "./MovieDetailsStyled";

const MovieDetails = ({
  history,
  location,
  title,
  poster_path,
  vote_average,
  overview,
  genres,
}) => {
  return (
    <MovieDetailsStyled>
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
    </MovieDetailsStyled>
  );
};

export default MovieDetails;
