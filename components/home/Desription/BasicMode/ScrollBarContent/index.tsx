import React from "react";
import styled from "@emotion/styled";
import ScrollBarContainer from "./ScrollBarContainer";
import { responsiveSize } from "../../../../../lib/constants/size";
import { useMobile } from "../../../../../hooks/DeviceType";
import { useSetRecoilState } from "recoil";
import { isAccordianOpenedState } from "../../../../../store";

function ScrollBarContent() {
  const isMobile = useMobile();
  const setIsAccordianOpened = useSetRecoilState(isAccordianOpenedState);

  return (
    <>
      <Styled.SpeedText>
        {/* ∙ 말하는 속도를 지정해주세요. 해당 속도에 맞춰 전체 스크립트의 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;발표 시간이 계산됩니다. */}
        <div>
          ∙ 말하는 속도를 지정해주세요. 해당 속도에 맞춰 전체 스크립트의 발표
          시간이 계산됩니다.
        </div>
        {isMobile && <button onClick={() => setIsAccordianOpened(false)} />}
      </Styled.SpeedText>
      <ScrollBarContainer />
    </>
  );
}

export default ScrollBarContent;

const Styled = {
  SpeedText: styled.div`
    position: relative;
    margin-bottom: 14px;
    line-height: 2;

    @media ${responsiveSize.mobile} {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      & > div {
        width: 270px;
        white-space: normal;
      }
      & > button {
        position: absolute;
        top: 5px;
        right: 0px;
        margin-left: 10px;
        background-color: white;
        background-image: url("/assets/icons/arrowTop.svg");
        width: 20px;
        height: 20px;
      }
    }
  `,
};
