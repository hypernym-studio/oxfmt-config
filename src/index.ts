import { defineConfig } from 'oxfmt'

export const ignorePatterns: string[] = [
  '**/node_modules/**',
  '**/.private/**',
  '**/dist/**',
  '**/CHANGELOG.md',
  '*.min.js',
]

const defaultConfig = defineConfig({
  printWidth: 80,
  semi: false,
  tabWidth: 2,
  singleQuote: true,
  sortPackageJson: false,
  ignorePatterns,
})

export { defineConfig, defaultConfig, defaultConfig as default }
