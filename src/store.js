const codeToUrl = new Map();

export function saveUrl(code, url) {
  codeToUrl.set(code, url);
}

export function getUrl(code) {
  return codeToUrl.get(code);
}
