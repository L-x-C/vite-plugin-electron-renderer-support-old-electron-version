import { defineConfig } from 'vite'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer-support-old-electron-version'

export default defineConfig({
  build: {
    minify: false,
  },
  plugins: [
    electron({
      // Multiple entry needed Vite >= 3.2.0
      entry: [
        'electron/main.ts',
        'electron/worker.ts',
      ],
    }),
    renderer({
      nodeIntegration: true,
    }),
  ],
})
