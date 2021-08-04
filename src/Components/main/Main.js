/** @format */

import React, { Suspense } from "react";
import { MainStyled } from "./MainStyled";
import { mainRoutes } from "../../routes/mainRoutes";
import ContentSwitcher from "../../contentSwitcher/ContentSwitcher";

const Main = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainStyled>
        <ContentSwitcher routes={mainRoutes} />
      </MainStyled>
    </Suspense>
  );
};

export default Main;
