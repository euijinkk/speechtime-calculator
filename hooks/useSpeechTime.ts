import { useRecoilValue } from "recoil";
import { cpm2State, cpmState, modeState } from "../store";

export const useSpeechTime = (text: string) => {
  const mode = useRecoilValue(modeState);
  const cpmNum = useRecoilValue(cpmState);
  const cpmNum2 = useRecoilValue(cpm2State);

  const getCpm = () => {
    if (mode === "Basic") {
      return cpmNum;
    }
    return cpmNum2;
  };

  const cpm = getCpm();
  if (cpm === 0 && mode === "Advanced") {
    return "입력";
  }

  const length = text ? text.trim().replace(/\s+/g, " ").length : 0;
  return splitMinAndSec((length / cpm) * 60);
};

function splitMinAndSec(speechTime: number) {
  if (speechTime >= 60) {
    return `${Math.floor(speechTime / 60)}분 ${Math.round(
      speechTime - Math.floor(speechTime / 60) * 60
    )}초`;
  }
  return `${Math.round(speechTime)}초`;
}
