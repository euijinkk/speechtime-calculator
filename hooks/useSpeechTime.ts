import { useRecoilValue } from "recoil";
import { cpmState } from "../store";

export const useSpeechTime = (text: string) => {
  const cpm = useRecoilValue(cpmState);
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
