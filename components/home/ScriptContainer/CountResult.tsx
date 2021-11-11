import React from "react";
import styled from "@emotion/styled";
import { responsiveSize } from "../../../lib/constants/size";
import { colors } from "../../../lib/constants/colors";

interface Props {
  wordsNum: number;
  bytesNum: number;
  bytesNumWithBlank: number;
  charactersNum: number;
  charactersNumWithBlank: number;
}

function CountResult({
  wordsNum,
  bytesNum,
  bytesNumWithBlank,
  charactersNum,
  charactersNumWithBlank,
}: Props) {
  return (
    <Styled.Root>
      <div>단어수 : {wordsNum}개</div>
      <div>
        공백 포함 : {charactersNumWithBlank}자/{bytesNumWithBlank}bytes
      </div>
      <div>
        공백 미포함 : {charactersNum}자/{bytesNum}bytes
      </div>
    </Styled.Root>
  );
}

export default CountResult;

const Styled = {
  Root: styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
    margin-bottom: 12px;
    white-space: nowrap;
    color: ${colors.gray_dark};
    font-size: 12px;

    & > div {
      margin-right: 20px;
    }

    @media (min-width: 480px) {
      & > div:nth-last-child(1) {
        margin-right: 0px;
      }
    }

    @media (max-width: 1020px) and (min-width: 900px) {
      white-space: normal;
    }

    @media ${responsiveSize.mobile} {
      flex-direction: column;
      align-items: flex-end;
      margin-right: 14px;
      margin-bottom: 12px;
      & > div {
        margin-right: 0;
      }
      & > div + div {
        margin-top: 6px;
      }
    }
  `,
};
