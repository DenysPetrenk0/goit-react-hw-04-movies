/** @format */

import { lazy } from "react";

export const movieDetailsRoutes = [
  {
    name: "cast",
    path: "/cast",
    exact: true,
    component: lazy(() => import("../Components/cast/Cast")),
  },
  {
    name: "reviews",
    path: "/reviews",
    exact: true,
    component: lazy(() => import("../Components/reviews/Reviews")),
  },
];
