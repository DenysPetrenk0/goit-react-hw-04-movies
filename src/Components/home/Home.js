/** @format */

import React from "react";
import { Link } from "react-router-dom";

import { HomeStyled } from "./HomeStyled";

const Home = ({ movies, location, title = null }) => {
  return (
    <HomeStyled>
      <h2 className="popMoviesTitle">{title}</h2>
      <ul className="popMoviesList">
        {movies.map(({ original_title, id, poster_path }) => (
          <li key={id} className="popMoviesItem">
            <Link
              className="popMoviesLink"
              to={{
                pathname: `/movies/${id}`,
                state: { from: location.pathname },
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
    </HomeStyled>
  );
};

export default Home;
