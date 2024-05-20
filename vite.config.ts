import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
  },
  build: {
    lib: {
      // TODO: This should be a string
      entry: './lib/index.ts',
      name: 'toolmaker',
      fileName: 'toolmaker',
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
