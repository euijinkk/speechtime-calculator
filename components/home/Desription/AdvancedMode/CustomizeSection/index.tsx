import React from "react";
import styled from "@emotion/styled";

function CustomizeSection() {
  return (
    <Styled.Root>
      <Styled.CustomizeText>
        ∙ 20초동안 읽은 스크립트를 입력해주세요. 전체 스크립트의 PT - Time이
        계산됩니다.
      </Styled.CustomizeText>
    </Styled.Root>
  );
}

export default CustomizeSection;

const Styled = {
  Root: styled.section``,
  CustomizeText: styled.div`
    margin-bottom: 22px;
  `,
};
