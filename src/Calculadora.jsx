import { useState } from 'react'
import { Calculator, Flame, ShoppingBag, Users } from 'lucide-react'
import { calcularImpacto, HABITOS, KG_PERSONA_DIA, KG_POR_BOLSA } from './calc.js'

const fmt = (n, d = 0) => n.toLocaleString('es-CO', { maximumFractionDigits: d, minimumFractionDigits: d })

export default function Calculadora() {
  const [personas, setPersonas] = useState(4)
  const [activos, setActivos] = useState(['blanca'])
  const r = calcularImpacto(personas, activos)
  const toggle = (id) => setActivos((a) => (a.includes(id) ? a.filter((x) => x !== id) : [...a, id]))

  return (
    <section id="calculadora" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-agua">Tu aporte cuenta</p>
        <h2 className="mt-1 text-3xl font-bold text-bosque">Calculadora de impacto en el hogar</h2>
        <p className="mt-2 max-w-3xl text-slate-600">
          Con un promedio estimado de {fmt(KG_PERSONA_DIA, 1)} kg de residuos por persona al día en Bogotá, calcula cuánto
          dejarías de enviar a Doña Juana.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-crema p-6 ring-1 ring-slate-200">
            <label htmlFor="personas" className="flex items-center justify-between font-medium">
              <span className="flex items-center gap-2"><Users className="h-5 w-5 text-salvia" aria-hidden /> Personas en el hogar</span>
              <span className="rounded-md bg-bosque px-3 py-1 text-white">{personas}</span>
            </label>
            <input id="personas" type="range" min="1" max="8" value={personas} onChange={(e) => setPersonas(+e.target.value)}
              className="mt-3 w-full accent-salvia" />
            <p className="mt-1 text-sm text-slate-500">Tu hogar genera ~{fmt(r.generadoMes)} kg de residuos al mes.</p>

            <fieldset className="mt-6 space-y-3">
              <legend className="font-medium">Hábitos de mi hogar</legend>
              {HABITOS.map((h) => (
                <label key={h.id} className="flex cursor-pointer gap-3 rounded-lg bg-white p-3 ring-1 ring-slate-200 has-[:checked]:ring-2 has-[:checked]:ring-salvia">
                  <input type="checkbox" checked={activos.includes(h.id)} onChange={() => toggle(h.id)} className="mt-1 h-4 w-4 accent-salvia" />
                  <span>
                    <span className="block font-medium">{h.label}</span>
                    <span className="text-sm text-slate-500">{h.detalle}</span>
                  </span>
                </label>
              ))}
            </fieldset>
          </div>

          <div className="space-y-4" aria-live="polite">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-bosque p-5 text-white">
                <p className="text-sm text-emerald-200">Desviado de Doña Juana</p>
                <p className="text-3xl font-bold">{fmt(r.desviadoMes, 1)} kg</p>
                <p className="text-sm">al mes</p>
              </div>
              <div className="rounded-2xl bg-salvia p-5 text-white">
                <p className="text-sm text-emerald-200">Desviado de Doña Juana</p>
                <p className="text-3xl font-bold">{fmt(r.desviadoAnio)} kg</p>
                <p className="text-sm">al año</p>
              </div>
            </div>

            <div className="rounded-2xl bg-crema p-5 ring-1 ring-slate-200">
              <p className="flex justify-between font-medium"><span>Reducción de tu bolsa negra</span><span className="text-bosque">{fmt(r.reduccionPct, 1)} %</span></p>
              <div className="mt-3 h-4 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full rounded-full bg-gradient-to-r from-salvia to-agua transition-all" style={{ width: `${r.reduccionPct}%` }} />
              </div>
              <p className="mt-2 text-xs text-slate-500">El potencial máximo de la ciudad es 60,59 %.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-sky-50 p-5 ring-1 ring-sky-100">
                <ShoppingBag className="h-6 w-6 text-agua" aria-hidden />
                <p className="mt-2 text-2xl font-bold text-agua">{fmt(r.bolsasAnio)}</p>
                <p className="text-sm">bolsas negras evitadas al año</p>
              </div>
              <div className="rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-100">
                <Flame className="h-6 w-6 text-tierra" aria-hidden />
                <p className="mt-2 text-2xl font-bold text-tierra">{fmt(r.metanoAnio, 1)} kg CH₄</p>
                <p className="text-sm">menos metano al año (≈ {fmt(r.co2eAnio)} kg CO₂e)</p>
              </div>
            </div>

            <p className="flex gap-2 rounded-lg bg-white p-3 text-xs text-slate-500 ring-1 ring-slate-200">
              <Calculator className="h-4 w-4 shrink-0" aria-hidden />
              Estimación pedagógica: composición de Doña Juana (45,83 % orgánicos, 14,76 % plásticos), bolsa de {KG_POR_BOLSA} kg,
              0,05 kg de CH₄ por kg de orgánico enterrado (IPCC) y GWP del metano = 28.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
