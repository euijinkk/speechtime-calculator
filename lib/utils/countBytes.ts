export default function countBytes(text: string, blank = 0) {
  // blank === 0 -> 공백 미포함  ,  blank !== 1 -> 공백 포함
  let byte = 0;
  if (blank === 0) {
    text = text.replace(/\s+/g, "");
  }

  for (let i = 0; i < text.length; i++) {
    // if (/[ㄱ-ㅎㅏ-ㅣ가-힣一-龥ぁ-ゔァ-ヴー々〆〤]/.test(text[i])) {
    //     byte = byte+2
    // } else {
    //     byte++
    // }
    // 한자, 일본어, 한글는 2글자 나머지는 1글자로 하는 법

    // 공백, 영어, 숫자, 키보드에 있는 특수문자는 1글자, 나머지는 2글자로 하는법
    // 키보드에 없는 특수문자는 2바이트가 넘기 때문에 좀 더 정확한 방법
    // 하지만, emoji, 기타 특수문자, 타언어 등이 포함되면 다른 결과가 나올 수 있다.
    // if (/[\sa-zA-Z0-9`~!@#$%^&*()_+-={}\[\];':",./<>?]/.test(text[i])) {
    //   byte++;
    // } else {
    //   byte = byte + 2;
    // }
    /[\sa-zA-Z0-9`~!@#$%^&*()_+-={}\[\];':",./<>?]/.test(text[i])
      ? byte++
      : (byte = byte + 2);
  }
  return byte;
}
