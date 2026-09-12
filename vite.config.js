import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { existsSync, readFileSync, statSync } from "node:fs";
import { resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { buildPages } from "./src/seo/pageCatalog.js";

const rootDir = fileURLToPath(new URL(".", import.meta.url));
const routeFiles = new Map(buildPages.map(page => [page.path, page.htmlFileName]));
const requestPath = (url = "") => url.split("?")[0];

const staticPageRoutes = () => ({
  name: "static-page-routes",
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      const path = requestPath(req.url);
      const file = routeFiles.get(path);
      if (!file) return next();
      try {
        const html = readFileSync(resolve(rootDir, file), "utf8");
        res.statusCode = path === "/404" ? 404 : 200;
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end(await server.transformIndexHtml(path, html));
      } catch (error) { next(error); }
    });
  },
  configurePreviewServer(server) {
    server.middlewares.use((req, res, next) => {
      const path = requestPath(req.url);
      const file = routeFiles.get(path);
      if (file) {
        res.statusCode = path === "/404" ? 404 : 200;
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        return res.end(readFileSync(resolve(rootDir, "dist", file), "utf8"));
      }
      // Existing assets are handled by Vite; unknown URLs keep a real 404 status.
      const distDir = resolve(rootDir, "dist");
      let filePath;
      try { filePath = resolve(distDir, `.${decodeURIComponent(path)}`); }
      catch { filePath = ""; }
      if (filePath.startsWith(distDir + sep) && existsSync(filePath) && statSync(filePath).isFile() && path !== "/404.html") return next();
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(readFileSync(resolve(rootDir, "dist/404.html"), "utf8"));
    });
  },
});

export default defineConfig({
  base: "/",
  plugins: [react(), staticPageRoutes()],
  build: {
    manifest: true,
    rollupOptions: { input: Object.fromEntries(buildPages.map(page => [page.htmlFileName, resolve(rootDir, page.htmlFileName)])) },
  },
  server: { port: 3000 },
});
