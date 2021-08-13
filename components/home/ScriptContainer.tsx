import React, { useRef } from "react";
import styled from "@emotion/styled";
import { colors } from "../../lib/constants/colors";
import CountResult from "./CountResult";
import { useState } from "react";
import countWords from "../../lib/utils/countWords";
import countBytes from "../../lib/utils/countBytes";

function ScriptContainer() {
  const [wordsNum, setWordsNum] = useState(0);
  const [bytesNum, setBytesNum] = useState(0);
  const [bytesNumWithBlank, setBytesNumWithBlank] = useState(0);
  const [charactersNum, setCharactersNum] = useState(0);
  const [charactersNumWithBlank, setCharactersNumWithBlank] = useState(0);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const analyzeText = () => {
    setWordsNum(countWords(textareaRef.current?.value));
    setBytesNum(countBytes(textareaRef.current?.value, 0)); // 공백 미포함
    setBytesNumWithBlank(countBytes(textareaRef.current?.value, 1)); // 공백 포함
    setCharactersNum(countBytes(textareaRef.current?.value, 0)); // 공백 미포함
    setCharactersNumWithBlank(countBytes(textareaRef.current?.value, 1)); // 공백 포함
  };

  return (
    <Styled.Root>
      <div>
        <textarea
          placeholder="스크립트를 입력하면 글자 수, 단어 수, 리딩 타임을 측정합니다."
          ref={textareaRef}
          onChange={analyzeText}
        ></textarea>
        <CountResult wordsNum={wordsNum} />
      </div>
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

    & > div {
      position: relative;
    }

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
