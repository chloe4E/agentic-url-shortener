const idToUrl = new Map();
let nextId = 1;

export function saveUrl(url) {
  const id = nextId++;
  idToUrl.set(id, url);
  return id;
}

export function getUrlById(id) {
  return idToUrl.get(id);
}
