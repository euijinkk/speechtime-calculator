import { atom } from "recoil";

export const modeState = atom<string>({
  key: "modeState",
  default: "Basic",
});

export const cpmState = atom<number>({
  key: "cpmState",
  default: 430,
});
