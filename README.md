<h1 align="center">@hypernym/oxfmt-config</h1>

<p align="center">Hypernym's internal config for OXFmt.</p>

<p align="center">
  <a href="https://github.com/hypernym-studio/oxfmt-config">Repository</a>
  <span>|</span>
  <a href="https://www.npmjs.com/package/@hypernym/oxfmt-config">Package</a>
  <span>|</span>
  <a href="https://github.com/hypernym-studio/oxfmt-config/releases">Releases</a>
  <span>|</span>
  <a href="https://github.com/hypernym-studio/oxfmt-config/discussions">Discussions</a>
</p>

<br>

<pre align="center">pnpm add -D @hypernym/oxfmt-config</pre>

<br>

## Usage

### Formatting Commands

Add a `format` command for manual formatting (optional):

```js
// package.json

{
  "scripts": {
    "format": "oxfmt"
  }
}
```

## Default Config

```ts
// oxfmt.config.ts

export { default } from '@hypernym/oxfmt-config'
```

## Custom Setup

```ts
// oxfmt.config.ts

import {
  defineConfig,
  default as defaultConfig,
  ignorePatterns,
} from '@hypernym/oxfmt-config'

export default defineConfig({
  ...defaultConfig,
  singleQuote: false,
  ignorePatterns: [...ignorePatterns, '**/dir/', '**/file.ts'],
  // ...
})
```

## License

Developed in 🇭🇷 Croatia, © Hypernym Studio.

Released under the [MIT](LICENSE.txt) license.
