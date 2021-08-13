import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../../../../lib/constants/colors";

function SpeedTable() {
  return (
    <Styled.Root>
      <div>매우 느림</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~ 390</div>
      <div>느림</div>
      <div>390 ~ 420</div>
      <div>보통</div>
      <div>420 ~ 450</div>
      <div>빠름</div>
      <div>450 ~ 480</div>
      <div>매우 빠름</div>
      <div>480 ~&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
    </Styled.Root>
  );
}

export default SpeedTable;

const Styled = {
  Root: styled.div`
    display: grid;
    grid-template-rows: repeat(5, 39px);
    grid-template-columns: repeat(1, 178px 270px);
    align-items: center;
    justify-content: center;
    /* row-gap: 2px; */
    border: 1px solid ${colors.gray_light};
    border-radius: 10px;
    overflow: hidden;
    color: ${colors.gray_dark};
    /* 넘치는 것을 hidden 함으로써, container의 border-radius가 item에 정확히 적용되도록 한다 */

    div {
      width: 100%;
      height: 100%;
      /* align-self: stretch; */
      /* justify-self: stretch; */
      text-align: center;
      line-height: 39px;
      font-size: 14px;
    }
    div:nth-child(odd) {
      border-bottom: 2px solid white;
      background-color: ${colors.gray_light};
    }
    div:nth-child(even) {
      border-bottom: 2px solid ${colors.gray_light};
      /* background-color: ${colors.gray_light}; */
    }
    div:nth-of-type(9),
    div:nth-of-type(10) {
      border: 0;
    }
  `,
};
