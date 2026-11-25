# URL Shortener

A simple URL shortener server built with Node.js and Express.

## Setup

```bash
npm install
npm start
```

Server runs on `http://localhost:3000` by default (override with `PORT`).

## API

### Shorten a URL

```bash
curl -X POST http://localhost:3000/shorten \
  -H "Content-Type: application/json" \
  -d '{"url": "https://example.com"}'
```

Response:

```json
{
  "code": "3bnCZrcw0mriDNsNjC4eqTnNkb",
  "shortUrl": "http://localhost:3000/3bnCZrcw0mriDNsNjC4eqTnNkb",
  "url": "https://example.com"
}
```

The code is the URL's bytes encoded in base62, used as the key in the
store (value is the original URL). Encoding the same URL always
produces the same code.

### Visit a short URL

```bash
curl -L http://localhost:3000/3bnCZrcw0mriDNsNjC4eqTnNkb
```

Redirects to the original URL.
