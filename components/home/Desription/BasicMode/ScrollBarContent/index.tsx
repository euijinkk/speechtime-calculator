import React from "react";
import styled from "@emotion/styled";
import ScrollBarContainer from "./ScrollBarContainer";

function ScrollBarContent() {
  return (
    <>
      <Styled.SpeedText>
        {/* ∙ 말하는 속도를 지정해주세요. 해당 속도에 맞춰 전체 스크립트의 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;발표 시간이 계산됩니다. */}
        ∙ 말하는 속도를 지정해주세요. 해당 속도에 맞춰 전체 스크립트의 발표
        시간이 계산됩니다.
      </Styled.SpeedText>
      <ScrollBarContainer />
    </>
  );
}

export default ScrollBarContent;

const Styled = {
  SpeedText: styled.div`
    margin-bottom: 14px;
    line-height: 2;
  `,
};
