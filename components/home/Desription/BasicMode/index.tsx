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
    max-width: 484px;
    font-size: 14px;
    @media ${responsiveSize.mobile} {
      font-size: 12px;
    }
  `,
};
