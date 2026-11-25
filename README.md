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
  "code": "1",
  "shortUrl": "http://localhost:3000/1",
  "url": "https://example.com"
}
```

Codes are generated from a base62-encoded incrementing counter.

### Visit a short URL

```bash
curl -L http://localhost:3000/1
```

Redirects to the original URL.
