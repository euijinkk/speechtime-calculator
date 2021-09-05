import React from "react";
import styled from "@emotion/styled";
import Description from "./Desription";
import ScriptContainer from "./ScriptContainer";
import { responsiveSize } from "../../lib/constants/size";
import { useRecoilValue } from "recoil";
import { modeState } from "../../store";

function Main() {
  const mode = useRecoilValue(modeState);

  return (
    <Styled.Root mode={mode}>
      <Description />
      <ScriptContainer />
    </Styled.Root>
  );
}

export default Main;

const Styled = {
  Root: styled.main<{ mode: string }>`
    display: flex;
    width: 100%;
    height: 594px;
    @media ${responsiveSize.horizontalTablet} {
      flex-direction: column;
      align-items: center;
      height: 100%;
    }

    @media ${responsiveSize.mobile} {
      /* height: 1007px; */
      height: 100%;
    }
  `,
};
