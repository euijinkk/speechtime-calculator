import React from "react";
import styled from "@emotion/styled";

function PptSection() {
  return (
    <Styled.Root>
      <Styled.PptText>
        ∙ PPT의 장수, 슬라이드 전환 시간, 자료 감상 시간을 고려해주세요.
      </Styled.PptText>
    </Styled.Root>
  );
}

export default PptSection;

const Styled = {
  Root: styled.section``,
  PptText: styled.div`
    margin-bottom: 22px;
  `,
};
