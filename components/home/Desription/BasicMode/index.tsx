import React from "react";
import styled from "@emotion/styled";

import ScrollBarContent from "./ScrollBarContent";
import SpeedContent from "./SpeedContent";
import { responsiveSize } from "../../../../lib/constants/size";

function BasicMode() {
  return (
    <Styled.Root>
      <ScrollBarContent />
      <SpeedContent />
    </Styled.Root>
  );
}

export default BasicMode;

const Styled = {
  Root: styled.article`
    margin: auto;
    width: 100%;
    max-width: 450px;
    font-size: 14px;
    /* @media ${responsiveSize.tablet} {
      max-width: 1000px;
    } */
    @media ${responsiveSize.mobile} {
      /* min-width: 0px; */
      font-size: 12px;
    }
  `,
};
