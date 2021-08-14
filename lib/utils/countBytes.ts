export default function countBytes(text: string, blank = 0) {
  // blank === 0 -> 공백 미포함  ,  blank !== 1 -> 공백 포함
  let byte = 0;
  if (blank === 0) {
    text = text.replace(/\s+/g, "");
  }

  for (let i = 0; i < text.length; i++) {
    /[\sa-zA-Z0-9`~!@#$%^&*()_+-={}\[\];':",./<>?]/.test(text[i])
      ? byte++
      : (byte = byte + 2);
  }
  return byte;
}
