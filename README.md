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

The URL is stored with an auto-incrementing integer ID, and the code
is that ID encoded in base62. On redirect, the code is decoded back
to the ID to look up the original URL.

### Visit a short URL

```bash
curl -L http://localhost:3000/1
```

Redirects to the original URL.
