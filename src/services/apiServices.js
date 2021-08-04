/** @format */

import axios from "axios";

const API_KEY = "1f012808e02fe47b316d5e12ca7214e4";
const BASE_URL = "https://api.themoviedb.org/3/movie/";

const fetchPopularMovie = () => {
  return axios.get(
    `${BASE_URL}popular?api_key=${API_KEY}&language=en-US&page=1`
  );
};

const fetchMovieDetails = (id) => {
  return axios.get(
    `
    ${BASE_URL}${id}?api_key=${API_KEY}&language=en-US
  `
  );
};

const fetchCast = (id) => {
  return axios.get(`
  ${BASE_URL}${id}/credits?api_key=${API_KEY}&language=en-US
  `);
};

const fetchReviews = (id) => {
  return axios.get(`
  ${BASE_URL}${id}/reviews?api_key=${API_KEY}&language=en-US&page=1
  `);
};

const findMovie = (query) => {
  return axios.get(`
  https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false

  `);
};

const toExport = {
  fetchPopularMovie,
  fetchMovieDetails,
  fetchCast,
  fetchReviews,
  findMovie,
};

export default toExport;
