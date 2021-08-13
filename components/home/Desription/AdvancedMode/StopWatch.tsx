import React from "react";
import styled from "@emotion/styled";

function StopWatch() {
  return (
    <Styled.Root>
      <Styled.StopWatchText>
        ∙ 스톱워치를 사용하여, 20초동안 스크립트를 읽어주세요.
      </Styled.StopWatchText>
    </Styled.Root>
  );
}

export default StopWatch;

const Styled = {
  Root: styled.article``,
  StopWatchText: styled.div`
    margin-bottom: 4px;
    line-height: 2;
  `,
};
