/** @format */

import React, { Suspense, lazy } from "react";
import { MainStyled } from "./MainStyled";
import { Switch, Route } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import ContentSwitcher from "../../contentSwitcher/ContentSwitcher";

const Main = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainStyled>
        <Switch>
          <Route
            path="/movies/:id"
            component={lazy(() => import("../../pages/MovieDetailsPage"))}
            exact={false}
          />
        </Switch>
        <ContentSwitcher routes={mainRoutes} />
      </MainStyled>
    </Suspense>
  );
};

export default Main;
