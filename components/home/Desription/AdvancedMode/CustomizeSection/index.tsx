import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useRef } from "react";
import { colors } from "../../../../../lib/constants/colors";
import { cpm2State, textState } from "../../../../../store";
import { useRecoilState, useSetRecoilState } from "recoil";
import { responsiveSize } from "../../../../../lib/constants/size";

function CustomizeSection() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const setCpm2 = useSetRecoilState(cpm2State);
  const text = useRef<string | null | undefined>(null);
  // useRef는 unmount될때에도 값을 가지고 올 수 있다. useState는 가지고 올 수 없다.
  const [text3, setText3] = useRecoilState(textState);
  // mount될때 값을 가지고 오기 위하여 전역적으로 변수를 관라

  // textarea가 unmount될 때, value가 사라지는 것을 방지하기 위해서
  // 비효율적 코드 - unmount 될 때 textarea 값을 기억하기 위해서, useRef 변수, recoil 변수를 추가한 것
  useEffect(() => {
    textareaRef.current.value = text3;
    text.current = text3;
    return () => {
      setText3(text.current);
    };
  }, []);

  const handleChange = () => {
    text.current = textareaRef.current?.value;
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
        •&nbsp; 20초동안 읽은 스크립트를 입력해주세요. 전체 스크립트의 발표
        시간이 계산됩니다.
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
      margin-bottom: 26px;
      border: 2px solid ${colors.gray_light};
      border-radius: 10px;
      padding: 12px 15px;
      width: 100%;
      height: 109px;
      resize: none;
      @media ${responsiveSize.mobile} {
        margin-bottom: 22px;
      }
    }
  `,
  CustomizeText: styled.div`
    margin-bottom: 12px;
    line-height: 1.8;
  `,
};
