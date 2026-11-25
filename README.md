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
  "code": "abc1234",
  "shortUrl": "http://localhost:3000/abc1234",
  "url": "https://example.com"
}
```

### Visit a short URL

```bash
curl -L http://localhost:3000/abc1234
```

Redirects to the original URL.
