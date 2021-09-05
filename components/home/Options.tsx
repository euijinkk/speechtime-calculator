import React, { useState } from "react";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { modeState } from "../../store";
import { colors } from "../../lib/constants/colors";
import { css } from "@emotion/react";
import { responsiveSize } from "../../lib/constants/size";

function Options() {
  const [language, setLanguage] = useState<String>("한국어");
  const [mode, setMode] = useRecoilState(modeState);

  return (
    <Styled.Root mode={mode}>
      <button onClick={() => setMode("Basic")}>Basic Mode</button>
      <button onClick={() => setMode("Advanced")}>Advanced Mode</button>
      <div>
        <button>{language}</button>
      </div>
      {/* dropdown은 따로 컴포넌트 분리할까? */}
    </Styled.Root>
  );
}

export default Options;

const Styled = {
  Root: styled.section<{ mode: String }>`
    display: flex;
    margin-bottom: 8px;
    width: 100%;
    & > button {
      margin-right: 8px;
      outline: 0;
      border: 0;
      border-radius: 10px;
      background-color: white;
      cursor: pointer;
      width: 17.5%;
      min-width: 277px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      color: ${colors.sub_navy};

      @media ${responsiveSize.tablet} {
        flex: 1;
        min-width: 0px;
      }

      @media ${responsiveSize.mobile} {
        height: 45px;
        line-height: 45px;
        font-size: 14px;
      }
    }

    & > button:nth-of-type(1) {
      ${({ mode }) =>
        mode === "Basic"
          ? css`
              background-color: ${colors.main_yellow};
              font-weight: bold;
            `
          : css`
              background-color: white;
              font-weight: normal;
            `}
    }

    & > button:nth-of-type(2) {
      @media ${responsiveSize.tablet} {
        margin-right: 0;
      }
      ${({ mode }) =>
        mode === "Basic"
          ? css`
              background-color: white;
              font-weight: normal;
            `
          : css`
              background-color: ${colors.main_yellow};
              font-weight: bold;
            `}
    }
    & > div {
      flex: 1;
      margin: 0;
      border-radius: 10px;
      background-color: white;
      padding-right: 24px;
      height: 50px;
      text-align: right;
      line-height: 50px;

      & > button {
        display: inline;
        outline: 0;
        border: 0;
        background-color: white;
        cursor: pointer;
        color: ${colors.gray_dark};
        font-weight: bold;
      }

      @media ${responsiveSize.tablet} {
        display: none;
      }
    }
  `,
};
