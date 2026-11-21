import { useState } from 'react'
import { AlertTriangle, Bird, Building2, Info, MapPin, Send, Trash2 } from 'lucide-react'
import { ESCENARIOS, PUNTOS, TIPOS_REPORTE } from './data.js'
import { useStoredList } from './useStored.js'

export default function Gobernanza() {
  const [tab, setTab] = useState(ESCENARIOS[0].id)
  const esc = ESCENARIOS.find((e) => e.id === tab)
  const [reportes, setReportes] = useStoredList('hv-reportes')
  const [form, setForm] = useState({ punto: PUNTOS[0], tipo: Object.keys(TIPOS_REPORTE)[0], desc: '' })

  const enviar = (e) => {
    e.preventDefault()
    const desc = form.desc.trim().slice(0, 500)
    if (!desc) return
    setReportes([{ ...form, desc, id: Date.now(), fecha: new Date().toLocaleString('es-CO') }, ...reportes])
    setForm({ ...form, desc: '' })
  }

  return (
    <section id="gobernanza" className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-agua">Gobernanza ambiental</p>
      <h2 className="mt-1 text-3xl font-bold text-bosque">Las 17 Reservas Distritales de Humedal</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {[
          [Bird, '17', 'Reservas Distritales de Humedal en Bogotá: ecosistemas que regulan el agua y albergan aves endémicas y migratorias.'],
          [MapPin, '11', 'de ellas en la lista internacional Ramsar (Decreto 1468 de 2018), por su importancia mundial.'],
          [Building2, '3', 'entidades clave: UAESP (aseo y residuos), SDA (autoridad ambiental) y EAAB (administración de humedales).'],
        ].map(([Icon, n, t]) => (
          <div key={n} className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200">
            <Icon className="h-8 w-8 shrink-0 text-agua" aria-hidden />
            <p><b className="text-2xl text-bosque">{n}</b> <span className="text-slate-600">{t}</span></p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-white p-2 ring-1 ring-slate-200">
        <div role="tablist" aria-label="Escenarios críticos" className="flex gap-1 overflow-x-auto">
          {ESCENARIOS.map((e) => (
            <button key={e.id} role="tab" id={`tab-${e.id}`} aria-selected={tab === e.id} aria-controls="panel-escenario" onClick={() => setTab(e.id)}
              className={`shrink-0 rounded-xl px-4 py-2 text-sm font-medium ${tab === e.id ? 'bg-bosque text-white' : 'text-slate-600 hover:bg-emerald-50'}`}>
              {e.titulo}
            </button>
          ))}
        </div>
        <div role="tabpanel" id="panel-escenario" aria-labelledby={`tab-${esc.id}`} className="p-5">
          <p className="flex items-center gap-1 text-sm text-slate-500"><MapPin className="h-4 w-4" aria-hidden /> {esc.lugar}</p>
          <h3 className="text-xl font-bold text-bosque">{esc.titulo}</h3>
          <p className="mt-2 text-slate-700">{esc.resumen}</p>
          <ul className="mt-4 space-y-2">
            {esc.puntos.map((p) => <li key={p} className="flex gap-2"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-tierra" />{p}</li>)}
          </ul>
          <p className="mt-4 rounded-lg bg-emerald-50 p-3 text-sm text-bosque"><b>Acción propuesta:</b> {esc.accion}</p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <form onSubmit={enviar} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
          <h3 className="flex items-center gap-2 text-xl font-bold text-bosque"><AlertTriangle className="h-5 w-5 text-tierra" aria-hidden /> Reporte Ciudadano de Punto Crítico</h3>
          <p className="mt-2 flex gap-2 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
            <Info className="h-4 w-4 shrink-0" aria-hidden />
            Módulo prototipo para adopción institucional: los reportes se guardan solo en este navegador y aún no llegan a ninguna entidad.
          </p>
          <label className="mt-4 block text-sm font-medium">Humedal / localidad
            <select value={form.punto} onChange={(e) => setForm({ ...form, punto: e.target.value })} className="mt-1 w-full rounded-lg border border-slate-300 bg-white p-2">
              {PUNTOS.map((p) => <option key={p}>{p}</option>)}
            </select>
          </label>
          <label className="mt-3 block text-sm font-medium">Tipo de residuo
            <select value={form.tipo} onChange={(e) => setForm({ ...form, tipo: e.target.value })} className="mt-1 w-full rounded-lg border border-slate-300 bg-white p-2">
              {Object.keys(TIPOS_REPORTE).map((t) => <option key={t}>{t}</option>)}
            </select>
          </label>
          <label className="mt-3 block text-sm font-medium">Descripción
            <textarea required maxLength={500} rows={3} value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })}
              placeholder="¿Qué observaste y dónde exactamente?" className="mt-1 w-full rounded-lg border border-slate-300 p-2" />
          </label>
          <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-tierra px-4 py-2 font-medium text-white hover:bg-amber-700">
            <Send className="h-4 w-4" aria-hidden /> Registrar reporte
          </button>
        </form>

        <div>
          <h3 className="font-semibold text-bosque">Reportes registrados ({reportes.length})</h3>
          <ul className="mt-3 max-h-[28rem] space-y-3 overflow-y-auto pr-1">
            {!reportes.length && <li className="rounded-lg bg-white p-4 text-sm text-slate-500 ring-1 ring-slate-200">Aún no hay reportes en este dispositivo.</li>}
            {reportes.map((r) => (
              <li key={r.id} className="rounded-lg bg-white p-4 ring-1 ring-slate-200">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-medium">{r.tipo} · <span className="text-slate-600">{r.punto}</span></p>
                  <button onClick={() => setReportes(reportes.filter((x) => x.id !== r.id))} aria-label="Eliminar reporte" className="text-slate-400 hover:text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <p className="mt-1 break-words text-sm text-slate-700">{r.desc}</p>
                <p className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span className="rounded-full bg-sky-100 px-2 py-0.5 font-medium text-agua">Entidad destinataria sugerida: {TIPOS_REPORTE[r.tipo] ?? 'UAESP / SDA / EAAB'}</span>
                  {r.fecha}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
