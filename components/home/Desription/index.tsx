import React from "react";
import styled from "@emotion/styled";

import { colors } from "../../../lib/constants/colors";
import { useRecoilValue } from "recoil";
import { isAccordianOpenedState, modeState } from "../../../store";
import BasicMode from "./BasicMode";
import AdvancedMode from "./AdvancedMode";
import { responsiveSize } from "../../../lib/constants/size";

function Description() {
  const mode = useRecoilValue(modeState);
  const isAccordianOpened = useRecoilValue(isAccordianOpenedState);

  return (
    <Styled.Root mode={mode} isAccordianOpened={isAccordianOpened}>
      {mode && (mode === "Basic" ? <BasicMode /> : <AdvancedMode />)}
    </Styled.Root>
  );
}

export default Description;

const Styled = {
  Root: styled.section<{ mode: string; isAccordianOpened: boolean }>`
    margin-right: 8px;
    border-radius: 10px;
    background-color: white;
    padding: 0 25px;
    padding-top: 20px;
    width: 480px;
    /* height: 100%; */
    color: ${colors.gray_dark};

    @media ${responsiveSize.horizontalTablet} {
      margin-right: 0px;
      margin-bottom: 8px;
      padding-bottom: ${({ isAccordianOpened }) =>
        isAccordianOpened ? "32px" : "0px"};
      width: 100%;
      min-width: 480px;
    }
    /* 480~590 사이에서 min-width:484 때문에 화면이 뭉개지는 현상 해결 */
    @media (max-width: 590px) {
      padding-top: ${({ isAccordianOpened }) =>
        isAccordianOpened ? "20px" : "0px"};
      min-width: 0px;
    }
  `,
};
