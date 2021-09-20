import React from "react";
import styled from "@emotion/styled";
import CustomizeSection from "./CustomizeSection";
import StopWatchSection from "./StopWatchSection";
import PptSection from "./PptSection";
import { colors } from "../../../../lib/constants/colors";
import { responsiveSize } from "../../../../lib/constants/size";

function AdvancedMode() {
  return (
    <Styled.Root>
      <StopWatchSection />
      <CustomizeSection />
      <PptSection />
    </Styled.Root>
  );
}

export default AdvancedMode;

const Styled = {
  Root: styled.article`
    margin: auto;
    max-width: 450px;
    color: ${colors.gray_dark};
    font-size: 14px;

    @media ${responsiveSize.mobile} {
      font-size: 13px;
    }
  `,
};
