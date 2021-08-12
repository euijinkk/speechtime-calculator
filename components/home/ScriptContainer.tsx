import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../lib/constants/colors";

function ScriptContainer() {
  return (
    <Styled.Root>
      <textarea placeholder="스크립트를 입력하면 글자 수, 단어 수, 리딩 타임을 측정합니다."></textarea>
      <Styled.TimeResult>
        <div>Speech Time</div>
        <div>0 sec</div>
      </Styled.TimeResult>
    </Styled.Root>
  );
}

export default ScriptContainer;

const Styled = {
  Root: styled.section`
    flex: 1;

    height: 100%;

    textarea {
      outline: 0;
      border: 0;
      border-radius: 10px;
      background-color: white;
      padding: 20px;
      width: 100%;
      height: 90%;
      resize: none;
    }
  `,
  TimeResult: styled.div`
    display: flex;
    width: 100%;
    height: 10%;
    color: ${colors.sub_navy};
    font-size: 20px;
    font-weight: bold;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
    }

    & > div {
      background-color: ${colors.main_yellow};
      width: 40%;
    }
    div:nth-of-type(2) {
      background-color: white;
      width: 60%;
    }
  `,
};
