import React from "react";
import styled from "@emotion/styled";

import { colors } from "../../../lib/constants/colors";
import { useRecoilValue } from "recoil";
import { modeState } from "../../../store";
import BasicMode from "./BasicMode";
import AdvancedMode from "./AdvancedMode";

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
    padding-top: ${({ mode }) => (mode === "Basic" ? "54px" : "32px")};
    width: 480px;
    height: 100%;
    color: ${colors.gray_dark};
  `,
};
