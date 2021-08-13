import React from "react";
import styled from "@emotion/styled";
import ScrollBarConatiner from "./ScrollBarConatiner";
import SpeedTable from "./SpeedTable";

function BasicMode() {
  return (
    <>
      <Styled.SpeedText>
        ∙ 말하는 속도를 지정해주세요. 해당 속도에 맞춰 전체 스크립트의 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;PT Time이 계산됩니다.
      </Styled.SpeedText>
      <ScrollBarConatiner />
      <Styled.TableText>
        ∙ 말하는 속도와 문장/ PPT 사이의 간격과 시간을 고려해보세요.
      </Styled.TableText>
      <SpeedTable />
    </>
  );
}

export default BasicMode;

const Styled = {
  SpeedText: styled.div`
    margin-bottom: 4px;
    line-height: 2;
  `,
  TableText: styled.div`
    margin-bottom: 22px;
  `,
};
