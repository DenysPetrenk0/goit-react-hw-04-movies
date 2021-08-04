/** @format */

import { lazy } from "react";

export const mainRoutes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/homePage/HomePage")),
  },
  {
    name: "movies",
    path: "/movies",
    exact: true,
    component: lazy(() => import("../pages/moviesPage/MoviesPage")),
  },

  {
    path: "/movies/:id",
    exact: false,
    component: lazy(() => import("../pages/movieDetailsPage/MovieDetailsPage")),
  },
];
