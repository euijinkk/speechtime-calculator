export default function countBytes(text: string, blank = 0) {
  // blank === 0 -> 공백 미포함  ,  blank !== 1 -> 공백 포함
  if (blank === 0) {
    return text.replace(/\s+/g, "");
  }

  return text.length;
}
