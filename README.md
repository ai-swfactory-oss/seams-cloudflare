# seams-cloudflare

Seams for Cloudflare: Pages, KV and Wrangler. Each seam is a typed SDK with a fake under `./testing`, so code that talks to Cloudflare can be tested without it.

This repository holds only the guarded skeleton so far: `createSeamsCloudflare` returns a seam that lists no projects, `createSeamsWrangler` returns a seam whose run exits 0 with no output, and each package's `./testing` holds a fake of its seam.

## Packages

- `@ai-swfactory-oss/seams-cloudflare`: the Cloudflare seam (Pages and KV).
- `@ai-swfactory-oss/seams-cloudflare-wrangler`: the Wrangler seam.

## Licence

MIT
