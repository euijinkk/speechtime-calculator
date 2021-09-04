import React from "react";
import styled from "@emotion/styled";
import { responsiveSize } from "../../../lib/constants/size";

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
    position: absolute;
    right: -20px;
    bottom: 13px;
    justify-content: flex-end;
    margin-right: 20px;
    white-space: nowrap;
    font-size: 14px;
    & > div {
      margin-right: 20px;
    }

    @media (max-width: 1020px) and (min-width: 900px) {
      white-space: normal;
    }

    @media ${responsiveSize.tablet} {
      font-size: 12px;
    }

    @media ${responsiveSize.mobile} {
      font-size: 10px;
    }
  `,
};
