import isWord from "../../lib/utils/isWord";

export default function countWords(text: string) {
  let wordCount = 0;
  let arr = text.trim().split(/\s+/);

  for (let i = 0; i < arr.length; i++) {
    isWord(arr[i]) && wordCount++;
  }
  return wordCount;
}
