import { defineConfig } from 'oxfmt'

export const ignorePatterns: string[] = [
  '**/node_modules/**',
  '**/.private/**',
  '**/dist/**',
  '**/CHANGELOG.md',
  '*.min.js',
]

export default defineConfig({
  printWidth: 80,
  semi: false,
  tabWidth: 2,
  singleQuote: true,
  sortPackageJson: false,
  ignorePatterns,
})

export { defineConfig } from 'oxfmt'
