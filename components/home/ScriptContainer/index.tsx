import React, { useRef } from "react";
import styled from "@emotion/styled";
import CountResult from "./CountResult";
import { useState } from "react";
import countWords from "../../../lib/utils/countWords";
import countBytes from "../../../lib/utils/countBytes";
import countCharacters from "../../../lib/utils/countCharacters";
import TimeResult from "./TimeResult";
import { responsiveSize } from "../../../lib/constants/size";
import { colors } from "../../../lib/constants/colors";

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
    setCharactersNum(countCharacters(textareaRef.current?.value, 0)); // 공백 미포함
    setCharactersNumWithBlank(countCharacters(textareaRef.current?.value, 1)); // 공백 포함
  };

  return (
    <Styled.Root>
      <div>
        <Styled.textareaContainer>
          <textarea
            placeholder="스크립트를 입력하면 글자 수, 단어 수, 리딩 타임을 측정합니다."
            ref={textareaRef}
            onChange={analyzeText}
          />
        </Styled.textareaContainer>
        <CountResult
          wordsNum={wordsNum}
          bytesNum={bytesNum}
          bytesNumWithBlank={bytesNumWithBlank}
          charactersNum={charactersNum}
          charactersNumWithBlank={charactersNumWithBlank}
        />
      </div>
      <TimeResult text={textareaRef.current?.value} />
    </Styled.Root>
  );
}

export default ScriptContainer;

const Styled = {
  Root: styled.section`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    height: 100%;

    & > div:nth-of-type(1) {
      display: flex;
      position: relative;
      flex-direction: column;
      margin-bottom: 8px;
      border-radius: 10px;
      background-color: white;
      height: 88%;
      @media ${responsiveSize.horizontalTablet} {
        height: 440px;
      }
      @media ${responsiveSize.mobile} {
        height: 390px;
      }
    }
  `,
  textareaContainer: styled.div`
    border-radius: 10px;
    background-color: white;
    width: 100%;
    height: 100%;
    padding-bottom: 10px;
    & > textarea {
      outline: 0;
      border: 0;
      border-radius: 10px;
      background-color: white;
      padding: 20px;
      width: 100%;
      height: 100%;
      resize: none;
      font-size: 14px;
      &::placeholder {
        color: ${colors.gray_placeholder};
      }

      @media ${responsiveSize.mobile} {
        font-size: 13px;
        padding-top: 16px;
      }
    }
  `,
};
