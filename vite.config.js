import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { getHtmlFileName, locationPageConfigs } from './src/components/locationPageData.js'

const rootDir = fileURLToPath(new URL('.', import.meta.url))
const locationRoutes = new Map(
  locationPageConfigs.map((page) => [
    page.path,
    {
      sourceHtml: resolve(rootDir, getHtmlFileName(page)),
      distHtml: resolve(rootDir, 'dist', getHtmlFileName(page)),
    },
  ]),
)

const requestPath = (url = '') => url.split('?')[0]

const websiteDevelopmentLocationRoutes = () => ({
  name: 'website-development-location-routes',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      const routePath = requestPath(req.url)
      const route = locationRoutes.get(routePath)

      if (!route) {
        return next()
      }

      const html = readFileSync(route.sourceHtml, 'utf-8')
      const transformedHtml = await server.transformIndexHtml(routePath, html)

      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end(transformedHtml)
    })
  },
  configurePreviewServer(server) {
    server.middlewares.use((req, res, next) => {
      const route = locationRoutes.get(requestPath(req.url))

      if (!route || !existsSync(route.distHtml)) {
        return next()
      }

      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end(readFileSync(route.distHtml, 'utf-8'))
    })
  },
})

const locationHtmlInputs = Object.fromEntries(
  locationPageConfigs.map((page) => [page.slug, resolve(rootDir, getHtmlFileName(page))]),
)

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), websiteDevelopmentLocationRoutes()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        ...locationHtmlInputs,
      },
    },
  },
  server: {
    port: 3000,
  },
})
