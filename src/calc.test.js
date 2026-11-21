import { test } from 'node:test'
import assert from 'node:assert/strict'
import { calcularImpacto, HABITOS } from './calc.js'

const near = (a, b) => assert.ok(Math.abs(a - b) < 1e-6, `${a} ≈ ${b}`)

test('sin hábitos no se desvía nada', () => {
  const r = calcularImpacto(4, [])
  near(r.generadoMes, (4 * 0.9 * 365) / 12)
  near(r.desviadoAnio, 0)
  near(r.metanoAnio, 0)
})

test('todos los hábitos suman ~54,4 % y no superan el 60,59 % de potencial', () => {
  const r = calcularImpacto(1, HABITOS.map((h) => h.id))
  near(r.reduccionPct, (0.1476 + 0.4583 * 0.8 + 0.03) * 100)
  assert.ok(r.reduccionPct < 60.59)
  near(r.desviadoAnio, 0.9 * 365 * r.reduccionPct / 100)
})

test('solo los orgánicos reducen metano y escalan con personas', () => {
  assert.equal(calcularImpacto(3, ['blanca']).metanoAnio, 0)
  near(calcularImpacto(2, ['verde']).metanoAnio, 2 * calcularImpacto(1, ['verde']).metanoAnio)
})
