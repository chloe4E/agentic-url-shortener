import express from "express";
import { encode, decode } from "./base62.js";
import { saveUrl, getUrlById } from "./store.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

function isValidUrl(value) {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

app.post("/shorten", (req, res) => {
  const { url } = req.body ?? {};

  if (!url || !isValidUrl(url)) {
    return res.status(400).json({ error: "A valid 'url' field is required" });
  }

  const id = saveUrl(url);
  const code = encode(id);

  res.status(201).json({
    code,
    shortUrl: `${req.protocol}://${req.get("host")}/${code}`,
    url,
  });
});

app.get("/:code", (req, res) => {
  const id = decode(req.params.code);
  const url = getUrlById(id);

  if (!url) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  res.redirect(302, url);
});

app.listen(PORT, () => {
  console.log(`URL shortener listening on port ${PORT}`);
});
