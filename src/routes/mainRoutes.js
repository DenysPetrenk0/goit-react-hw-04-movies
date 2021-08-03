/** @format */

import { lazy } from "react";

export const mainRoutes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/HomePage")),
  },
  {
    name: "movies",
    path: "/movies",
    exact: true,
    component: lazy(() => import("../pages/MoviesPage")),
  },
];
