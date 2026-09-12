import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// GitHub Pages also serves the .html filenames. Hydrate the canonical route's
// matching content if someone opens one of those aliases directly.
const canonicalHref = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href
if (canonicalHref) {
  const path = new URL(canonicalHref).pathname
  const alias = path === '/' ? '/index.html' : `${path}.html`
  if (window.location.pathname === alias) {
    window.history.replaceState(window.history.state, '', path + window.location.search + window.location.hash)
  }
}

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
