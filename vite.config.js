import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages sirve el sitio en /humedal-vivo/; Vercel/Netlify y local lo sirven en la raíz.
export default defineConfig({ base: process.env.GITHUB_ACTIONS ? '/humedal-vivo/' : '/', plugins: [react(), tailwindcss()] })
