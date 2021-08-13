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
  Root: styled.article``,
  SpeedText: styled.div`
    margin-bottom: 4px;
    line-height: 2;
  `,
  TableText: styled.div`
    margin-bottom: 22px;
  `,
};
