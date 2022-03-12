import { useRecoilValue } from "recoil";
import {
  cpm2State,
  cpmState,
  modeState,
  pptNumState,
  pptTermState,
  watchTimeState,
} from "../store";

export const useSpeechTime = (text: string) => {
  const mode = useRecoilValue(modeState);
  const cpmNum = useRecoilValue(cpmState);
  const cpmNum2 = useRecoilValue(cpm2State);
  const length = text ? text.trim().replace(/\s+/g, " ").length : 0;
  const pptNum = useRecoilValue(pptNumState);
  const pptTerm = useRecoilValue(pptTermState);
  const watchTime = useRecoilValue(watchTimeState);
  // 비효율적 코드 - Basic mode에서는 pptNum, pptTerm, watchTime, cpmNum2를 사용하지 않는데 한번에 선언해둠.

  if (mode === "Basic") {
    return splitMinAndSec((length / cpmNum) * 60, cpmNum);
  }

  if (!cpmNum2) {
    return "위 순서를 따라해보세요.";
  }

  return splitMinAndSec(
    (length / cpmNum2) * 60 + pptNum * pptTerm + watchTime,
    cpmNum2
  );
};

function splitMinAndSec(speechTime: number, cpm: number): string {
  if (speechTime >= 60) {
    return `${Math.floor(speechTime / 60)}분 ${Math.round(
      speechTime - Math.floor(speechTime / 60) * 60
    )}초 (${cpm} cpm)`;
  }
  return `${Math.round(speechTime)}초 (${cpm} cpm)`;
}
