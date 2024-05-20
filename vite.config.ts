import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		globals: true,
	},
	build: {
		lib: {
			entry: './lib/main.ts',
			name: 'Counter',
			fileName: 'counter',
		},
	},
	resolve: {
		alias: {
			'@': '/src',
		},
	},
})
