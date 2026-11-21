import { useState } from 'react'
import { Droplets, HandHeart, Search, ShoppingBag } from 'lucide-react'
import { BOLSAS, CATEGORIAS, RESIDUOS } from './data.js'

const sinTildes = (s) => s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase()

export default function Clasificador() {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState(null)
  const [sel, setSel] = useState(null)

  const lista = RESIDUOS.filter((r) => (!cat || r.cat === cat) && sinTildes(r.nombre).includes(sinTildes(q.trim())))
  const actual = lista.includes(sel) ? sel : lista[0]
  const bolsa = actual && BOLSAS[actual.bolsa]

  return (
    <section id="clasificador" className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-agua">Resolución 2184 de 2019</p>
      <h2 className="mt-1 text-3xl font-bold text-bosque">Clasificador interactivo de residuos</h2>
      <p className="mt-2 max-w-3xl text-slate-600">
        Busca un residuo o filtra por categoría y descubre en qué bolsa va, cómo apoyar el trabajo del reciclador de
        oficio y qué impacto evitas.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-2" role="group" aria-label="Filtrar por categoría">
        <label className="relative w-full sm:w-72">
          <span className="sr-only">Buscar residuo</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Ej.: cartón, pilas, aceite…"
            className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 focus:border-agua focus:outline-none focus:ring-2 focus:ring-sky-200" />
        </label>
        {[null, ...CATEGORIAS].map((c) => (
          <button key={c ?? 'todas'} onClick={() => setCat(c)} aria-pressed={cat === c}
            className={`rounded-full px-3 py-1.5 text-sm font-medium ${cat === c ? 'bg-bosque text-white' : 'bg-white text-slate-700 ring-1 ring-slate-300 hover:bg-emerald-50'}`}>
            {c ?? 'Todas'}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-5">
        <ul className="grid content-start gap-2 sm:grid-cols-2 lg:col-span-3">
          {lista.map((r) => (
            <li key={r.nombre}>
              <button onClick={() => setSel(r)} aria-pressed={r === actual}
                className={`flex w-full items-center justify-between gap-2 rounded-lg px-4 py-3 text-left ${r === actual ? 'bg-emerald-50 ring-2 ring-salvia' : 'bg-white ring-1 ring-slate-200 hover:ring-salvia'}`}>
                <span>
                  <span className="block font-medium">{r.nombre}</span>
                  <span className="text-xs text-slate-500">{r.cat}</span>
                </span>
                <span className={`h-4 w-4 shrink-0 rounded-full ${BOLSAS[r.bolsa].clase}`} title={BOLSAS[r.bolsa].nombre} />
              </button>
            </li>
          ))}
          {!lista.length && <li className="rounded-lg bg-white p-4 text-slate-500 ring-1 ring-slate-200 sm:col-span-2">No encontramos ese residuo. Prueba con otra palabra o categoría.</li>}
        </ul>

        {actual && (
          <article className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200 lg:sticky lg:top-20 lg:col-span-2 lg:self-start" aria-live="polite">
            <p className="text-sm text-slate-500">{actual.cat}</p>
            <h3 className="text-2xl font-bold text-bosque">{actual.nombre}</h3>
            <div className={`mt-4 flex items-center gap-3 rounded-xl p-4 ${bolsa.clase}`}>
              <ShoppingBag className="h-8 w-8" aria-hidden />
              <div>
                <p className="font-bold">{bolsa.nombre}</p>
                <p className="text-sm opacity-90">{bolsa.desc}</p>
              </div>
            </div>
            <div className="mt-4 flex gap-3">
              <HandHeart className="h-5 w-5 shrink-0 text-salvia" aria-hidden />
              <p className="text-sm"><b>Dignifica al reciclador de oficio:</b> {actual.consejo} <span className="text-slate-500">(Auto 275 de 2011)</span></p>
            </div>
            <div className="mt-3 flex gap-3">
              <Droplets className="h-5 w-5 shrink-0 text-agua" aria-hidden />
              <p className="text-sm"><b>Impacto que evitas:</b> {actual.impacto}</p>
            </div>
          </article>
        )}
      </div>
    </section>
  )
}
