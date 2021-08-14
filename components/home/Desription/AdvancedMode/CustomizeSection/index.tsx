import React from "react";
import styled from "@emotion/styled";
import { useRef } from "react";
import { colors } from "../../../../../lib/constants/colors";
import { cpmState } from "../../../../../store";
import { useRecoilState } from "recoil";

function CustomizeSection() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [cpm, setCpm] = useRecoilState(cpmState);

  return (
    <Styled.Root>
      <Styled.CustomizeText>
        ∙ 20초동안 읽은 스크립트를 입력해주세요. 전체 스크립트의 PT - Time이
        계산됩니다.
      </Styled.CustomizeText>
      <textarea
        placeholder="20초 동안 읽은 스크립트를 ‘정확히' 입력해주세요. "
        ref={textareaRef}
        onChange={() =>
          setCpm(
            Math.round(
              (textareaRef.current.value.trim().replace(/\s+/g, " ").length /
                20) *
                60
            )
          )
        }
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
