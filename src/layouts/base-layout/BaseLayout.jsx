import React from "react";
import { Outlet } from "react-router";

import * as S from "./BaseLayout.styled";

function BaseLayout() {
  return (
    <>
    <S.BaseLayoutWrapper>
      <Outlet />
    </S.BaseLayoutWrapper>
    </>
  );
}

export default BaseLayout;