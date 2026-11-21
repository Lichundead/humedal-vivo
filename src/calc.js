// Supuestos del modelo (estimaciones pedagógicas, no mediciones):
export const KG_PERSONA_DIA = 0.9 // promedio estimado de generación en Bogotá
export const ORGANICOS = 0.4583 // fracción orgánica en Doña Juana
export const PLASTICOS = 0.1476 // fracción de plásticos reciclables
export const KG_POR_BOLSA = 4 // bolsa negra doméstica típica
export const KG_CH4_POR_KG_ORGANICO = 0.05 // IPCC (DOC 0,15 · DOCf 0,5 · F 0,5 · 16/12)
export const GWP_CH4 = 28 // potencial de calentamiento a 100 años (IPCC AR5)

export const HABITOS = [
  { id: 'blanca', label: 'Separo reciclables en bolsa blanca', fraccion: PLASTICOS * (2 / 3), detalle: 'Recupera ~2/3 de los plásticos reciclables (9,8 % del total).' },
  { id: 'verde', label: 'Aprovecho/composto orgánicos en bolsa verde', fraccion: ORGANICOS * 0.8, detalle: 'Desvía ~80 % de la materia orgánica (36,7 % del total).' },
  { id: 'reciclador', label: 'Entrego limpio a reciclador de oficio', fraccion: PLASTICOS / 3, detalle: 'El material limpio no se rechaza en la ECA: +4,9 % del total.' },
  { id: 'unUso', label: 'Evito plásticos de un solo uso', fraccion: 0.03, detalle: 'Reduce en ~3 % lo que se genera desde la fuente.' },
]

export function calcularImpacto(personas, activos) {
  const generadoDia = personas * KG_PERSONA_DIA
  const fraccion = HABITOS.filter((h) => activos.includes(h.id)).reduce((s, h) => s + h.fraccion, 0)
  const desviadoAnio = generadoDia * 365 * fraccion
  const metanoAnio = activos.includes('verde') ? generadoDia * 365 * ORGANICOS * 0.8 * KG_CH4_POR_KG_ORGANICO : 0
  return {
    generadoMes: (generadoDia * 365) / 12,
    desviadoMes: desviadoAnio / 12,
    desviadoAnio,
    reduccionPct: fraccion * 100,
    bolsasAnio: desviadoAnio / KG_POR_BOLSA,
    metanoAnio,
    co2eAnio: metanoAnio * GWP_CH4,
  }
}
