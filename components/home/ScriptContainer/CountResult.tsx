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
      <div>
        공백 포함 : {charactersNumWithBlank}자/{bytesNumWithBlank}bytes
      </div>
      <div>
        공백 미포함 : {charactersNum}자/{bytesNum}bytes
      </div>
      <div>단어수 : {wordsNum}개</div>
    </Styled.Root>
  );
}

export default CountResult;

const Styled = {
  Root: styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 26px;
    margin-bottom: 12px;
    white-space: nowrap;
    color: ${colors.gray_dark};
    font-size: 12px;

    & > div + div {
      margin-left: 14px;
    }

    @media (max-width: 1020px) and (min-width: 900px) {
      white-space: normal;
    }

    @media ${responsiveSize.mobile} {
      flex-direction: column-reverse;

      align-items: flex-end;
      margin-right: 14px;
      margin-bottom: 12px;

      & > div + div {
        margin-bottom: 6px;
      }
    }
  `,
};
