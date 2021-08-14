import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../../../../lib/constants/colors";
import { useRecoilState } from "recoil";
import {
  pptNumState,
  pptTermState,
  watchTimeState,
} from "../../../../../store";

function PptSection() {
  const [pptNum, setPptNum] = useRecoilState(pptNumState);
  const [pptTerm, setPptTerm] = useRecoilState(pptTermState);
  const [watchTime, setWatchTime] = useRecoilState(watchTimeState);

  return (
    <Styled.Root>
      <Styled.PptText>
        ∙ PPT의 장수, 슬라이드 전환 시간, 자료 감상 시간을 고려해주세요.
      </Styled.PptText>
      <Styled.PptTable>
        <div>PPT 수</div>
        <div>
          <Styled.OperatorContainer operator="left">
            <Styled.HLine />
          </Styled.OperatorContainer>
          0 장
          <Styled.OperatorContainer operator="right">
            <Styled.HLine />
            <Styled.VLine />
          </Styled.OperatorContainer>
        </div>
        <div>슬라이드 전환 시간</div>
        <div>
          <Styled.OperatorContainer operator="left">
            <Styled.HLine />
          </Styled.OperatorContainer>
          0 초
          <Styled.OperatorContainer operator="right">
            <Styled.HLine />
            <Styled.VLine />
          </Styled.OperatorContainer>
        </div>
        <div>자료 감상 시간</div>
        <div>
          <Styled.OperatorContainer operator="left">
            <Styled.HLine />
          </Styled.OperatorContainer>
          0 초
          <Styled.OperatorContainer operator="right">
            <Styled.HLine />
            <Styled.VLine />
          </Styled.OperatorContainer>
        </div>
      </Styled.PptTable>
    </Styled.Root>
  );
}

export default PptSection;

const Styled = {
  Root: styled.section``,
  PptText: styled.div`
    margin-bottom: 22px;
  `,
  PptTable: styled.div`
    display: grid;
    grid-template-rows: repeat(3, 39px);
    grid-template-columns: repeat(1, 178px 270px);
    align-items: center;
    justify-content: center;
    border: 1px solid ${colors.gray_light};
    border-radius: 10px;
    overflow: hidden;
    color: ${colors.gray_dark};
    /* 넘치는 것을 hidden 함으로써, container의 border-radius가 item에 정확히 적용되도록 한다 */

    & > div {
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 39px;
      font-size: 14px;
    }
    & > div:nth-child(odd) {
      border-bottom: 2px solid white;
      background-color: ${colors.gray_light};
    }
    & > div:nth-child(even) {
      position: relative;
      border-bottom: 2px solid ${colors.gray_light};
    }
    & > div:nth-of-type(5),
    & > div:nth-of-type(6) {
      border: 0;
    }
  `,
  OperatorContainer: styled.div<{ operator: string }>`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    transform: translate(
      ${({ operator }) => (operator === "left" ? "75px" : "180px")},
      12px
    );
    cursor: pointer;
    width: 15px;
    height: 15px;
  `,
  HLine: styled.div`
    position: absolute;
    background-color: #333333;
    width: 15px;
    height: 1px;
  `,
  VLine: styled.div`
    position: absolute;
    left: 7.5px;
    background-color: #333333;
    width: 1px;
    height: 15px;
  `,
};
