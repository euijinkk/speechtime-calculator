import { atom } from "recoil";

export const modeState = atom<String>({
  key: "modeState",
  default: "Basic",
});
