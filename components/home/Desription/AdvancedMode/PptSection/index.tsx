import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../../../../lib/constants/colors";
import { useRecoilState } from "recoil";
import {
  pptNumState,
  pptTermState,
  watchTimeState,
} from "../../../../../store";
import { responsiveSize } from "../../../../../lib/constants/size";

function PptSection() {
  const [pptNum, setPptNum] = useRecoilState(pptNumState);
  const [pptTerm, setPptTerm] = useRecoilState(pptTermState);
  const [watchTime, setWatchTime] = useRecoilState(watchTimeState);

  const handleClick = (type: string, operator: string) => {
    // 함수명에 변수명을 동적으로 할당하는 방법은 무엇일까?
    if (operator === "+") {
      switch (type) {
        case "pptNum":
          setPptNum((prev) => prev + 1);
          break;
        case "pptTerm":
          setPptTerm((prev) => prev + 1);
          break;
        case "watchTime":
          setWatchTime((prev) => prev + 1);
          break;
      }
    } else {
      switch (type) {
        case "pptNum":
          pptNum > 0 && setPptNum((prev) => prev - 1);
          break;
        case "pptTerm":
          pptTerm > 0 && setPptTerm((prev) => prev - 1);
          break;
        case "watchTime":
          watchTime > 0 && setWatchTime((prev) => prev - 1);
          break;
      }
    }
  };

  return (
    <Styled.Root>
      <Styled.PptText>
        ∙ PPT의 장수, 슬라이드 전환 시간, 자료 감상 시간을 고려해주세요.
      </Styled.PptText>
      {/* 여기 컴포넌트 분리해서 재사용성을 높이면 좋을 것 같은데, 어떻게 변수를 지정해야할지 모르겠다. */}
      <Styled.PptTable>
        <div> PPT 수</div>
        <div>
          <Styled.OperatorContainer
            operator="left"
            onClick={() => handleClick("pptNum", "-")}
          >
            <Styled.HLine />
          </Styled.OperatorContainer>
          <div>{pptNum} 장</div>
          <Styled.OperatorContainer
            operator="right"
            onClick={() => handleClick("pptNum", "+")}
          >
            <Styled.HLine />
            <Styled.VLine />
          </Styled.OperatorContainer>
        </div>
        <div>슬라이드 전환 시간</div>
        <div>
          <Styled.OperatorContainer
            operator="left"
            onClick={() => handleClick("pptTerm", "-")}
          >
            <Styled.HLine />
          </Styled.OperatorContainer>
          <div>{pptTerm} 초</div>
          <Styled.OperatorContainer
            operator="right"
            onClick={() => handleClick("pptTerm", "+")}
          >
            <Styled.HLine />
            <Styled.VLine />
          </Styled.OperatorContainer>
        </div>
        <div>자료 감상 시간</div>
        <div>
          <Styled.OperatorContainer
            operator="left"
            onClick={() => handleClick("watchTime", "-")}
          >
            <Styled.HLine />
          </Styled.OperatorContainer>
          <div>{watchTime} 초</div>
          <Styled.OperatorContainer
            operator="right"
            onClick={() => handleClick("watchTime", "+")}
          >
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
    line-height: 2;
  `,
  PptTable: styled.div`
    display: grid;
    grid-template-rows: repeat(3, 39px);
    grid-template-columns: repeat(1, 1fr 1.5fr);
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
    & > div:nth-of-type(odd) {
      border-bottom: 2px solid white;
      background-color: ${colors.gray_light};
    }
    & > div:nth-of-type(even) {
      display: flex;
      position: relative;
      justify-content: space-evenly;
      border-bottom: 2px solid ${colors.gray_light};
      padding: 0 20px;
    }
    & > div:nth-of-type(5),
    & > div:nth-of-type(6) {
      border: 0;
    }
  `,
  OperatorContainer: styled.div<{ operator: string }>`
    display: flex;
    position: relative;
    align-items: center;
    transform: translateY(12px);
    cursor: pointer;
    width: 15px;
    height: 15px;
  `,
  HLine: styled.div`
    background-color: #333333;
    width: 15px;
    height: 2px;
  `,
  VLine: styled.div`
    position: absolute;
    left: 6.5px;
    background-color: #333333;
    width: 2px;
    height: 15px;
  `,
};
