/** @format */

import React from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import Navigation from "../navigation/Navigation";
import { HeaderStyled } from "./HeaderStyled";
import { withRouter } from "react-router-dom";

const Heder = ({ location }) => {
  return (
    <HeaderStyled>
      <Navigation routes={mainRoutes} prevPathname={location.pathname} />
    </HeaderStyled>
  );
};

export default withRouter(Heder);
