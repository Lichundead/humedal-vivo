import { useState } from 'react'
import { Coins, Droplets, GraduationCap, Leaf, Menu, Recycle, Trash2, X } from 'lucide-react'
import { ODS } from './data.js'
import Clasificador from './Clasificador.jsx'
import Calculadora from './Calculadora.jsx'
import Gobernanza from './Gobernanza.jsx'
import BuenVivir from './BuenVivir.jsx'

const LINKS = [
  ['#diagnostico', 'Diagnóstico'],
  ['#clasificador', 'Clasificador'],
  ['#calculadora', 'Calculadora'],
  ['#gobernanza', 'Humedales'],
  ['#buen-vivir', 'Buen Vivir'],
]

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-bosque/95 text-white backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4" aria-label="Principal">
        <a href="#diagnostico" className="flex items-center gap-2 font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-salvia"><Leaf className="h-5 w-5" aria-hidden /></span>
          <span>Humedal Vivo <span className="hidden text-emerald-200 sm:inline">– Bogotá Circular</span></span>
        </a>
        <ul className="hidden gap-1 md:flex">
          {LINKS.map(([href, label]) => (
            <li key={href}><a href={href} className="rounded-md px-3 py-2 text-sm text-emerald-50 hover:bg-white/10">{label}</a></li>
          ))}
        </ul>
        <button className="rounded-md p-2 hover:bg-white/10 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu-movil" aria-label="Abrir menú">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <ul id="menu-movil" className="border-t border-white/10 px-4 pb-3 md:hidden">
          {LINKS.map(([href, label]) => (
            <li key={href}><a href={href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 hover:bg-white/10">{label}</a></li>
          ))}
        </ul>
      )}
    </header>
  )
}

const KPIS = [
  { icon: Trash2, valor: '6.769 t/día', titulo: 'dispuestas en Doña Juana', nota: '1.089 t/día provienen de botaderos clandestinos.', color: 'text-bosque bg-emerald-100' },
  { icon: Recycle, valor: '60,59 %', titulo: 'de potencial desaprovechado', nota: '45,83 % materia orgánica + 14,76 % plásticos reciclables.', color: 'text-agua bg-sky-100' },
  { icon: Droplets, valor: '~2.000 t', titulo: 'retiradas de los 17 humedales (2025)', nota: 'Además de 50 t de escombros y 1.082 llantas.', color: 'text-tierra bg-amber-100' },
  { icon: Coins, valor: '$10.660 M', titulo: 'COP para limpieza correctiva 2026', nota: 'Recursos proyectados para corregir lo que la prevención podría evitar.', color: 'text-salvia bg-emerald-100' },
]

const COMPOSICION = [
  ['Orgánicos', 45.83, 'bg-emerald-600'],
  ['Plásticos', 14.76, 'bg-agua'],
  ['Otros', 39.41, 'bg-slate-400'],
]

function Hero() {
  const [ods, setOds] = useState(ODS[0])
  return (
    <section id="diagnostico" className="bg-gradient-to-b from-bosque via-salvia to-crema pt-16">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 text-white">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-emerald-100">
          <GraduationCap className="h-4 w-4" aria-hidden /> Prototipo cívico y pedagógico · Cátedra IBERO: Buen vivir
        </p>
        <h1 className="max-w-4xl text-3xl font-bold leading-tight sm:text-5xl">
          De Doña Juana a los 17 Humedales: Bogotá hacia la Economía Circular y el Buen Vivir
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-emerald-50">
          ¿Cómo puede Bogotá pasar de la disposición lineal de residuos en el Relleno Sanitario Doña Juana a un modelo de
          aprovechamiento circular, con gobernanza ambiental y educación ciudadana, desde la perspectiva del Sumak Kawsay?
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {KPIS.map(({ icon: Icon, valor, titulo, nota, color }) => (
            <article key={valor} className="rounded-2xl bg-white p-5 text-slate-800 shadow-lg">
              <span className={`grid h-11 w-11 place-items-center rounded-xl ${color}`}><Icon className="h-6 w-6" aria-hidden /></span>
              <p className="mt-4 text-3xl font-bold text-bosque">{valor}</p>
              <p className="font-medium">{titulo}</p>
              <p className="mt-2 text-sm text-slate-500">{nota}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 text-slate-800 shadow-lg">
            <h2 className="font-semibold text-bosque">Composición de los residuos que llegan a Doña Juana</h2>
            <div className="mt-4 flex h-8 overflow-hidden rounded-full" role="img" aria-label="Orgánicos 45,83 %, plásticos 14,76 %, otros 39,41 %">
              {COMPOSICION.map(([n, p, c]) => <div key={n} className={c} style={{ width: `${p}%` }} />)}
            </div>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
              {COMPOSICION.map(([n, p, c]) => (
                <li key={n} className="flex items-center gap-2"><span className={`h-3 w-3 rounded-full ${c}`} />{n} <b>{p.toLocaleString('es-CO')} %</b></li>
              ))}
            </ul>
            <p className="mt-3 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
              Más de la mitad de lo que se entierra podría aprovecharse con separación en la fuente.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-slate-800 shadow-lg">
            <h2 className="font-semibold text-bosque">Objetivos de Desarrollo Sostenible priorizados</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {ODS.map((o) => (
                <button key={o.n} onClick={() => setOds(o)} aria-pressed={ods.n === o.n}
                  className={`rounded-lg px-3 py-2 text-sm font-bold text-white transition ${ods.n === o.n ? 'scale-105 ring-4 ring-offset-1 ring-slate-300' : 'opacity-80 hover:opacity-100'}`}
                  style={{ backgroundColor: o.color }}>
                  ODS {o.n}{o.principal && ' ★'}
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-lg bg-crema p-4" aria-live="polite">
              <p className="font-semibold">ODS {ods.n} · {ods.nombre} <span className="text-xs font-normal text-slate-500">{ods.principal ? '(principal)' : '(complementario)'}</span></p>
              <p className="mt-1 text-sm text-slate-600">{ods.aporte}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-bosque text-emerald-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 text-lg font-semibold text-white"><Leaf className="h-5 w-5" aria-hidden /> Humedal Vivo – Bogotá Circular</p>
          <p className="mt-2 text-sm text-emerald-200">Prototipo cívico y pedagógico para su transferencia a entidades distritales y organizaciones comunitarias de Bogotá.</p>
        </div>
        <div>
          <p className="font-semibold text-white">Equipo</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Luz Neida Florez Carrascal</li>
            <li>Daniel Mateo Arias Ortega</li>
            <li>Sebastian Vallejo Ricaurte</li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-white">Contexto académico</p>
          <p className="mt-2">Ingeniería de Software · Corporación Universitaria Iberoamericana</p>
          <p>Cátedra IBERO: Buen vivir, camino hacia el desarrollo sostenible</p>
          <p>Docente: Mónica Guzmán</p>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-emerald-200">© 2026 · Proyecto académico sin fines comerciales</p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Clasificador />
        <Calculadora />
        <Gobernanza />
        <BuenVivir />
      </main>
      <Footer />
    </>
  )
}
