/** @format */

import styled from "styled-components";

export const HomeStyled = styled.div`
  .popMoviesList {
    display: flex;
    margin-left: -15px;
    margin-bottom: -15px;
    flex-wrap: wrap;
    list-style: none;
  }

  .popMoviesItem {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: calc((100% - 90px) / 3);
    margin-left: 15px;
    margin-top: 15px;
    box-sizing: border-box;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }

  .popMoviesImage {
    border-radius: 2px;
    width: 100%;
    height: 450px;
    object-fit: cover;
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .popMoviesLink {
    text-decoration: none;
  }

  .popMoviesLink:hover {
    transform: scale(1.03);
  }

  .popMoviesLink:hover .popMoviesText {
    color: #da1111;
  }

  .popMoviesTitle {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: #1515d3;
    text-transform: uppercase;
  }

  .popMoviesText {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: #1515d3;
  }
`;
