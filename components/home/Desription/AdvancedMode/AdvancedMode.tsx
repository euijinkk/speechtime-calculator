import React from "react";
import styled from "@emotion/styled";
import StopWatch from "./StopWatch";
import CustomizeSection from "./CustomizeSection";
import PptSection from "./PptSection";

function AdvancedMode() {
  return (
    <Styled.Root>
      <StopWatch />
      <CustomizeSection />
      <PptSection />
    </Styled.Root>
  );
}

export default AdvancedMode;

const Styled = {
  Root: styled.article``,
  StopWatchText: styled.div`
    margin-bottom: 4px;
    line-height: 2;
  `,
  CustomizeText: styled.div`
    margin-bottom: 22px;
  `,
  PptText: styled.div`
    margin-bottom: 22px;
  `,
};
