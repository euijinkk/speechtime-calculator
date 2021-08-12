import { atom } from "recoil";

export const modeState = atom<String>({
  key: "modeState",
  default: "Basic",
});

export const cpmState = atom<number>({
  key: "modeState",
  default: 430,
});
