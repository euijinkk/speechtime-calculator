import React from "react";
import styled from "@emotion/styled";
import StopWatch from "./StopWatch";

function StopWatchSection() {
  return (
    <Styled.Root>
      <Styled.StopWatchText>
        ∙ 스톱워치를 사용하여, 20초동안 스크립트를 읽어주세요.
      </Styled.StopWatchText>
      <StopWatch />
    </Styled.Root>
  );
}

export default StopWatchSection;

const Styled = {
  Root: styled.section``,
  StopWatchText: styled.div`
    margin-bottom: 4px;
    line-height: 2;
  `,
};
