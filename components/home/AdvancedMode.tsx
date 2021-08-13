import React from "react";
import styled from "@emotion/styled";

function AdvancedMode() {
  return (
    <>
      <Styled.SpeedText>
        ∙ 스톱워치를 사용하여, 20초동안 스크립트를 읽어주세요.
      </Styled.SpeedText>
      <Styled.TableText>
        ∙ 20초동안 읽은 스크립트를 입력해주세요. 전체 스크립트의 PT - Time이
        계산됩니다.
      </Styled.TableText>
    </>
  );
}

export default AdvancedMode;

const Styled = {
  SpeedText: styled.div`
    margin-bottom: 4px;
    line-height: 2;
  `,
  TableText: styled.div`
    margin-bottom: 22px;
  `,
};
