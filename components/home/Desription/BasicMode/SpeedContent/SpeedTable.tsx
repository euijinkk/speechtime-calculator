import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../../../../lib/constants/colors";
import { responsiveSize } from "../../../../../lib/constants/size";

function SpeedTable() {
  return (
    <Styled.Root>
      <div>매우 느림</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~ 390</div>
      <div>느림</div>
      <div>390 ~ 420</div>
      <div>보통</div>
      <div>420 ~ 450</div>
      <div>빠름</div>
      <div>450 ~ 480</div>
      <div>매우 빠름</div>
      <div>480 ~&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
    </Styled.Root>
  );
}

export default SpeedTable;

const Styled = {
  Root: styled.div`
    display: grid;
    grid-template-rows: repeat(5, 39px);
    grid-template-columns: repeat(1, 1fr 1.5fr);
    align-items: center;
    justify-content: center;
    border: 2px solid ${colors.gray_light};
    border-radius: 10px;
    width: 100%;
    overflow: hidden;
    color: ${colors.gray_dark};

    & > div {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    & > div:nth-of-type(odd) {
      border-bottom: 2px solid white;
      background-color: ${colors.gray_light};
    }
    & > div:nth-of-type(even) {
      border-bottom: 2px solid ${colors.gray_light};
    }
    & > div:nth-of-type(9),
    & > div:nth-of-type(10) {
      border: 0;
    }
    /* 넘치는 것을 hidden 함으로써, container의 border-radius가 item에 정확히 적용되도록 한다 */

    @media ${responsiveSize.mobile} {
      grid-template-rows: repeat(5, 36px);
      line-height: 36px;
    }
  `,
};
