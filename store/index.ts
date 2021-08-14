import { atom } from "recoil";

export const modeState = atom<string>({
  key: "modeState",
  default: "Basic",
});

export const cpmState = atom<number>({
  key: "cpmState",
  default: 430,
});

export const cpm2State = atom<number>({
  key: "cpm2State",
  default: 0,
});

export const pptNumState = atom<number>({
  key: "pptNumState",
  default: 0,
});

export const pptTermState = atom<number>({
  key: "pptTermState",
  default: 0,
});

export const watchTimeState = atom<number>({
  key: "watchTimeState",
  default: 0,
});

export const textState = atom<string>({
  key: "textState",
  default: "",
});
