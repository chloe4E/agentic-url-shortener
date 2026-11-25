const ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const BASE = ALPHABET.length;

export function encode(num) {
  if (num === 0) return ALPHABET[0];

  let result = "";
  while (num > 0) {
    result = ALPHABET[num % BASE] + result;
    num = Math.floor(num / BASE);
  }
  return result;
}

export function decode(code) {
  let num = 0;
  for (const char of code) {
    num = num * BASE + ALPHABET.indexOf(char);
  }
  return num;
}
