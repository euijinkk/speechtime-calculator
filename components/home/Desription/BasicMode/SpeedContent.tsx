import React from "react";
import SpeedTable from "./SpeedTable";
import styled from "@emotion/styled";

function SpeedContent() {
  return (
    <>
      <Styled.TableText>
        ∙ 말하는 속도와 문장/ PPT 사이의 간격과 시간을 고려해보세요.
      </Styled.TableText>
      <SpeedTable />
    </>
  );
}

export default SpeedContent;

const Styled = {
  TableText: styled.div`
    margin-bottom: 22px;
  `,
};
