import { useState } from 'react'
import { BookOpen, CheckCircle2, Handshake, PenLine } from 'lucide-react'
import { AUTORES, FASES } from './data.js'
import { useStoredList } from './useStored.js'

export default function BuenVivir() {
  const [firmas, setFirmas] = useStoredList('hv-pacto')
  const [nombre, setNombre] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [abierto, setAbierto] = useState(false)
  const [gracias, setGracias] = useState(false)

  const firmar = (e) => {
    e.preventDefault()
    if (!nombre.trim() || !ciudad.trim()) return
    setFirmas([{ nombre: nombre.trim().slice(0, 80), ciudad: ciudad.trim().slice(0, 60), fecha: Date.now() }, ...firmas])
    setNombre(''); setCiudad(''); setAbierto(false); setGracias(true)
  }

  return (
    <section id="buen-vivir" className="bg-gradient-to-b from-white to-emerald-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-agua">Sumak Kawsay</p>
        <h2 className="mt-1 text-3xl font-bold text-bosque">El enfoque del Buen Vivir</h2>
        <p className="mt-2 max-w-3xl text-slate-600">La propuesta se fundamenta en los autores de la unidad: la economía circular como práctica de cuidado y reciprocidad, no solo como técnica.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AUTORES.map((a) => (
            <article key={a.ref} className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
              <BookOpen className="h-6 w-6 text-salvia" aria-hidden />
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-agua">{a.ref}</p>
              <h3 className="font-bold text-bosque">{a.idea}</h3>
              <p className="mt-2 text-sm text-slate-600">{a.texto}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-bosque p-6 text-white sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold">Pacto Ciudadano por los Humedales y el Buen Vivir</h3>
              <p className="mt-2 text-emerald-100">Me comprometo a separar en la fuente, entregar limpio al reciclador de oficio, reducir los plásticos de un solo uso y cuidar los humedales de mi ciudad.</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-emerald-300" aria-live="polite">{firmas.length.toLocaleString('es-CO')}</p>
              <p className="text-sm text-emerald-100">firmas en este dispositivo</p>
            </div>
          </div>

          {gracias && !abierto && <p className="mt-4 flex items-center gap-2 text-emerald-200"><CheckCircle2 className="h-5 w-5" aria-hidden /> ¡Gracias por sumarte al pacto!</p>}

          {abierto ? (
            <form onSubmit={firmar} className="mt-6 grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
              <label><span className="sr-only">Nombre</span>
                <input required maxLength={80} value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Tu nombre" className="w-full rounded-lg p-2 text-slate-800 bg-white" />
              </label>
              <label><span className="sr-only">Ciudad</span>
                <input required maxLength={60} value={ciudad} onChange={(e) => setCiudad(e.target.value)} placeholder="Tu ciudad" className="w-full rounded-lg p-2 text-slate-800 bg-white" />
              </label>
              <button className="rounded-lg bg-tierra px-4 py-2 font-medium hover:bg-amber-700">Firmar</button>
            </form>
          ) : (
            <button onClick={() => { setAbierto(true); setGracias(false) }} className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-300 px-5 py-3 font-semibold text-bosque hover:bg-emerald-200">
              <PenLine className="h-5 w-5" aria-hidden /> Firmar Pacto Ciudadano por los Humedales y el Buen Vivir
            </button>
          )}

          {firmas.length > 0 && (
            <p className="mt-4 text-sm text-emerald-200">Últimas firmas: {firmas.slice(0, 3).map((f) => `${f.nombre} (${f.ciudad})`).join(' · ')}</p>
          )}
        </div>

        <div className="mt-12">
          <h3 className="flex items-center gap-2 text-2xl font-bold text-bosque"><Handshake className="h-6 w-6 text-agua" aria-hidden /> Plan de Transferencia a Entidades de Bogotá</h3>
          <p className="mt-2 max-w-3xl text-slate-600">
            Como el equipo reside fuera de Bogotá, el prototipo se diseña para ejecutarse a distancia y ser adoptado por UAESP,
            SDA, EAAB, asociaciones de recicladores de oficio y colectivos locales.
          </p>
          <ol className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {FASES.map((f, i) => (
              <li key={f.titulo} className="relative rounded-2xl bg-white p-5 ring-1 ring-slate-200">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-agua font-bold text-white">{i + 1}</span>
                <h4 className="mt-3 font-bold text-bosque">{f.titulo}</h4>
                <p className="text-xs font-medium text-tierra">{f.quien}</p>
                <p className="mt-2 text-sm text-slate-600">{f.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
