# Humedal Vivo – Bogotá Circular

Prototipo cívico y pedagógico (React + Vite + Tailwind CSS + lucide-react) de la Cátedra IBERO: Buen vivir,
Corporación Universitaria Iberoamericana, 2026.

```bash
npm install
npm run dev     # desarrollo
npm test        # pruebas del modelo de la calculadora
npm run build   # genera dist/ para Vercel o Netlify (salida: dist)
```

Los reportes ciudadanos y las firmas del pacto se guardan solo en el `localStorage` del navegador:
es un módulo prototipo para adopción institucional (UAESP, SDA, EAAB).

**GitHub Pages:** cada push a `main` publica en https://lichundead.github.io/humedal-vivo/
mediante `.github/workflows/deploy.yml` (requiere Settings → Pages → Source: GitHub Actions).
