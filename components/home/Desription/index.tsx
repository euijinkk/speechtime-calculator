import React from "react";
import styled from "@emotion/styled";

import { colors } from "../../../lib/constants/colors";
import { useRecoilValue } from "recoil";
import { modeState } from "../../../store";
import BasicMode from "./BasicMode";
import AdvancedMode from "./AdvancedMode";
import { responsiveSize } from "../../../lib/constants/size";

function Description() {
  const mode = useRecoilValue(modeState);

  return (
    <Styled.Root mode={mode}>
      {mode && (mode === "Basic" ? <BasicMode /> : <AdvancedMode />)}
    </Styled.Root>
  );
}

export default Description;

const Styled = {
  Root: styled.section<{ mode: string }>`
    margin-right: 8px;
    border-radius: 10px;
    background-color: white;
    padding: 0 16px;
    padding-top: 28px;
    width: 484px;
    height: 100%;
    color: ${colors.gray_dark};

    @media (max-width: 900px) {
      margin-right: 0px;
      padding-bottom: 32px;
      width: 100%;
      min-width: 484px;
    }
    /* 480~590 사이에서 min-width:484 때문에 화면이 뭉개지는 현상 해결 */
    @media (max-width: 590px) {
      min-width: 0px;
    }
  `,
};
