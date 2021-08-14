import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRef } from "react";
import { colors } from "../../../../../lib/constants/colors";
import { cpm2State, textState } from "../../../../../store";
import { useRecoilState } from "recoil";

function CustomizeSection() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [cpm2, setCpm2] = useRecoilState(cpm2State);
  const text = useRef<string | null | undefined>(null);
  const [text2, setText2] = useState("");
  const [text3, setText3] = useRecoilState(textState);
  // text.current = textareaRef.current?.value;
  useEffect(() => {
    textareaRef.current.value = text3;
    text.current = text3;
    console.log(`text3 Mount`, text3);
    return () => {
      // console.log(`textareaRef.current?.value`, textareaRef.current?.value);
      // console.log(`text?.current`, text?.current);

      !text.current === null || console.log(123);
      setText3(text.current);
      console.log(`text UnMount`, text.current);
    };
  }, []);

  const handleChange = () => {
    text.current = textareaRef.current?.value;
    setText2(textareaRef.current.value);
    setText3(textareaRef.current.value);
    setCpm2(
      Math.round(
        (textareaRef.current.value.trim().replace(/\s+/g, " ").length / 20) * 60
      )
    );
  };

  return (
    <Styled.Root>
      <Styled.CustomizeText>
        ∙ 20초동안 읽은 스크립트를 입력해주세요. 전체 스크립트의 PT - Time이
        계산됩니다.
      </Styled.CustomizeText>
      <textarea
        placeholder="20초 동안 읽은 스크립트를 ‘정확히' 입력해주세요. "
        ref={textareaRef}
        onChange={handleChange}
      />
    </Styled.Root>
  );
}

export default CustomizeSection;

const Styled = {
  Root: styled.section`
    textarea {
      margin-bottom: 40px;
      outline: 0;
      border: 1px solid ${colors.gray_light};
      border-radius: 10px;
      padding: 12px 15px;
      width: 448px;
      height: 109px;
      resize: none;
      font-size: 14px;
    }
  `,
  CustomizeText: styled.div`
    margin-bottom: 12px;
    line-height: 2;
  `,
};
