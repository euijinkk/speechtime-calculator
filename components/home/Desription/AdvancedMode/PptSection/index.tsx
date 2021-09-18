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
import PptItem from "./PptItem";

function PptSection() {
  const [pptNum, setPptNum] = useRecoilState(pptNumState);
  const [pptTerm, setPptTerm] = useRecoilState(pptTermState);
  const [watchTime, setWatchTime] = useRecoilState(watchTimeState);

  return (
    <Styled.Root>
      <Styled.PptText>
        ∙ PPT의 장수, 슬라이드 전환 시간, 자료 감상 시간이 전체 발표 시간에
        합산됩니다.
      </Styled.PptText>
      <Styled.PptTable>
        <PptItem
          type="PPT 수"
          unit="장"
          pptState={pptNum}
          setPptState={setPptNum}
        />
        <PptItem
          type="슬라이드 전환 시간"
          unit="초"
          pptState={pptTerm}
          setPptState={setPptTerm}
        />
        <PptItem
          type="자료 감상 시간"
          unit="초"
          pptState={watchTime}
          setPptState={setWatchTime}
        />
      </Styled.PptTable>
    </Styled.Root>
  );
}

export default PptSection;

const Styled = {
  Root: styled.section``,
  PptText: styled.div`
    margin-bottom: 12px;
    line-height: 1.8;
    @media ${responsiveSize.mobile} {
      margin-bottom: 14px;
    }
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

    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    input {
      outline: 0;
      border: 0;
      width: 26px;
      text-align: center;
    }

    & > div {
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 39px;
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
};
