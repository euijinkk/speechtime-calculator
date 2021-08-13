import React from "react";
import styled from "@emotion/styled";
import ScrollBarConatiner from "./ScrollBarConatiner";

function ScrollBarContent() {
  return (
    <>
      <Styled.SpeedText>
        ∙ 말하는 속도를 지정해주세요. 해당 속도에 맞춰 전체 스크립트의 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;PT Time이 계산됩니다.
      </Styled.SpeedText>
      <ScrollBarConatiner />
    </>
  );
}

export default ScrollBarContent;

const Styled = {
  SpeedText: styled.div`
    margin-bottom: 4px;
    line-height: 2;
  `,
};
