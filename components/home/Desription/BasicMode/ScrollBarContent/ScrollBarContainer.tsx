import React from "react";
import styled from "@emotion/styled";
import { useRecoilState, useRecoilValue } from "recoil";
import { cpmState } from "../../../../../store";
import { colors } from "../../../../../lib/constants/colors";
import { responsiveSize } from "../../../../../lib/constants/size";
import DiscreteSlider from "./DiscreteSlider";

function ScrollBarContainer() {
  const cpm = useRecoilValue(cpmState);

  return (
    <Styled.Root>
      <Styled.CpmContainer>
        <div>speed (Characters Per Minute)</div>
        <div>{cpm} cpm</div>
      </Styled.CpmContainer>
      <Styled.ScrollBar>
        <DiscreteSlider />
      </Styled.ScrollBar>
    </Styled.Root>
  );
}

export default ScrollBarContainer;

const Styled = {
  Root: styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 36px;
    border: 2px solid ${colors.gray_light};
    border-radius: 10px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    @media ${responsiveSize.mobile} {
      margin-bottom: 24px;
    }
  `,
  CpmContainer: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    height: 48px;
    div {
      line-height: 48px;
    }
    div:nth-of-type(2) {
      color: ${colors.main_yellow};
      font-weight: bold;
    }
  `,
  ScrollBar: styled.div`
    display: flex;
    align-items: center;
    /* margin: auto; */
    background-color: ${colors.gray_light};
    padding: 0 20px;
    height: 52px;

    @media ${responsiveSize.mobile} {
      height: 44px;
    }
  `,
};
