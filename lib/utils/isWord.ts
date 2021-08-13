export default function isWord(str) {
  let alphaNumericFound = false;
  for (let i = 0; i < str.length; i++) {
    if (/[0-9a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]/.test(str[i])) {
      alphaNumericFound = true;
      return alphaNumericFound;
    }
  }
  return alphaNumericFound;
}
