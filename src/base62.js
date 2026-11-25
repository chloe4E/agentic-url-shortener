const ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const BASE = 62n;

export function encode(buffer) {
  let num = 0n;
  for (const byte of buffer) {
    num = num * 256n + BigInt(byte);
  }

  if (num === 0n) return ALPHABET[0];

  let result = "";
  while (num > 0n) {
    result = ALPHABET[Number(num % BASE)] + result;
    num = num / BASE;
  }
  return result;
}
