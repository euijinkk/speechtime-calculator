import React from "react";
import styled from "@emotion/styled";

import { colors } from "../../../lib/constants/colors";
import { useRecoilValue } from "recoil";
import { modeState } from "../../../store";
import BasicMode from "./BasicMode/BasicMode";
import AdvancedMode from "./AdvancedMode/AdvancedMode";

function Description() {
  const mode = useRecoilValue(modeState);

  return (
    <Styled.Root>
      {mode === "Basic" ? <BasicMode /> : <AdvancedMode />}
    </Styled.Root>
  );
}

export default Description;

const Styled = {
  Root: styled.section`
    margin-right: 8px;
    border-radius: 10px;
    background-color: white;
    padding: 0 16px;
    padding-top: 54px;
    width: 480px;
    height: 100%;
    color: ${colors.gray_dark};
  `,
};
