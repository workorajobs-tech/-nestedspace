import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = fileURLToPath(new URL('.', import.meta.url))
const keralaRoute = '/website-development-kerala'
const keralaRouteHtml = resolve(rootDir, 'website-development-kerala.html')
const keralaRouteDistHtml = resolve(rootDir, 'dist/website-development-kerala.html')

const requestPath = (url = '') => url.split('?')[0]

const websiteDevelopmentKeralaRoute = () => ({
  name: 'website-development-kerala-route',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (requestPath(req.url) !== keralaRoute) {
        return next()
      }

      const html = readFileSync(keralaRouteHtml, 'utf-8')
      const transformedHtml = await server.transformIndexHtml(keralaRoute, html)

      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end(transformedHtml)
    })
  },
  configurePreviewServer(server) {
    server.middlewares.use((req, res, next) => {
      if (requestPath(req.url) !== keralaRoute || !existsSync(keralaRouteDistHtml)) {
        return next()
      }

      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end(readFileSync(keralaRouteDistHtml, 'utf-8'))
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), websiteDevelopmentKeralaRoute()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        websiteDevelopmentKerala: keralaRouteHtml,
      },
    },
  },
  server: {
    port: 3000,
  },
})
