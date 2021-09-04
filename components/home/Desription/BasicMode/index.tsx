import React from "react";
import styled from "@emotion/styled";

import ScrollBarContent from "./ScrollBarContent";
import SpeedContent from "./SpeedContent";

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
  `,
};
