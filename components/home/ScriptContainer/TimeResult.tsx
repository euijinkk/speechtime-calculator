import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../../../lib/constants/colors";
import { useSpeechTime } from "../../../hooks/useSpeechTime";
import { useRecoilValue } from "recoil";
import { cpm2State, cpmState, modeState } from "../../../store";

interface Props {
  text?: string;
}

function TimeResult({ text }: Props) {
  const [speechTime, setSpeechTime] = useState("0초");
  const speechResult = useSpeechTime(text);

  useEffect(() => {
    setSpeechTime(speechResult);
  }, [speechResult]);

  return (
    <Styled.Root>
      <div>Speech Time</div>
      <div>{speechTime}</div>
    </Styled.Root>
  );
}

export default TimeResult;

const Styled = {
  Root: styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    color: ${colors.sub_navy};
    font-size: 18px;
    font-weight: bold;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
    }

    div:nth-of-type(1) {
      background-color: ${colors.main_yellow};
      width: 40%;
    }
    div:nth-of-type(2) {
      background-color: white;
      width: 60%;
    }
  `,
};
