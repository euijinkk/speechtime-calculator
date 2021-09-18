import React from "react";
import styled from "@emotion/styled";
import Description from "./Desription";
import ScriptContainer from "./ScriptContainer";
import { responsiveSize } from "../../lib/constants/size";

function Main() {
  return (
    <Styled.Root>
      <Description />
      <ScriptContainer />
    </Styled.Root>
  );
}

export default Main;

const Styled = {
  Root: styled.main`
    display: flex;
    width: 100%;
    height: 594px;
    @media ${responsiveSize.horizontalTablet} {
      flex-direction: column;
      align-items: center;
      height: 100%;
    }

    @media ${responsiveSize.mobile} {
      height: 100%;
    }
  `,
};
