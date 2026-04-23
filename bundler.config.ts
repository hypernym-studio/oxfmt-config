import { defineConfig } from '@hypernym/bundler'
import { devDependencies } from './package.json'

export default defineConfig({
  externals: [...Object.keys(devDependencies)],
  entries: [
    { input: './src/index.js' },
    {
      dts: './src/types.ts',
      output: './dist/index.d.ts',
    },
  ],
})
