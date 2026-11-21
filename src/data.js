export const BOLSAS = {
  blanca: { nombre: 'Bolsa blanca', desc: 'Aprovechables limpios y secos', clase: 'bg-white text-slate-800 ring-2 ring-slate-300' },
  verde: { nombre: 'Bolsa verde', desc: 'Orgánicos aprovechables', clase: 'bg-emerald-600 text-white' },
  negra: { nombre: 'Bolsa negra', desc: 'No aprovechables', clase: 'bg-slate-900 text-white' },
  especial: { nombre: 'Punto especial / Posconsumo', desc: 'Nunca a la bolsa ni a la calle', clase: 'bg-tierra text-white' },
}

export const CATEGORIAS = ['Plásticos', 'Orgánicos', 'Papel/Cartón', 'Vidrio/Metal', 'Peligrosos/Especiales', 'No aprovechables']

export const RESIDUOS = [
  { nombre: 'Botella PET', cat: 'Plásticos', bolsa: 'blanca', consejo: 'Vacíala, enjuágala y aplástala: el reciclador de oficio carga más material por viaje y lo vende a mejor precio.', impacto: 'Un PET tarda más de 400 años en degradarse; mal dispuesto es uno de los residuos más comunes en los espejos de agua de los humedales.' },
  { nombre: 'Bolsa plástica limpia', cat: 'Plásticos', bolsa: 'blanca', consejo: 'Junta varias bolsas dentro de una sola para que no se vuelen y el reciclador las clasifique rápido.', impacto: 'Las bolsas sueltas obstruyen canales y sumideros que desembocan en los humedales y asfixian a la fauna.' },
  { nombre: 'Envase de yogur enjuagado', cat: 'Plásticos', bolsa: 'blanca', consejo: 'Un enjuague rápido basta: un envase sucio contamina todo el lote y el reciclador pierde ese ingreso.', impacto: 'Evita que plástico aprovechable ocupe celda en Doña Juana, donde cada tonelada acorta la vida útil del relleno.' },
  { nombre: 'Icopor sucio', cat: 'No aprovechables', bolsa: 'negra', consejo: 'Contaminado con comida no tiene mercado. Prefiere recipientes reutilizables y no se lo entregues al reciclador.', impacto: 'Se fragmenta en microplásticos que llegan a los humedales; reducir su uso es la mejor estrategia.' },
  { nombre: 'Cáscaras de fruta', cat: 'Orgánicos', bolsa: 'verde', consejo: 'Sepáralas desde la cocina; si tienes espacio, compóstalas y devuelve nutrientes a la tierra.', impacto: 'La materia orgánica es el 45,83 % de lo que llega a Doña Juana y genera lixiviados y metano al descomponerse sin oxígeno.' },
  { nombre: 'Restos de comida', cat: 'Orgánicos', bolsa: 'verde', consejo: 'Escúrrelos bien antes de sacarlos: así no humedecen ni dañan el material de la bolsa blanca.', impacto: 'Menos orgánicos en el relleno significa menos olores y vectores para Mochuelo Alto y Mochuelo Bajo.' },
  { nombre: 'Cuncho de café y bolsitas de té', cat: 'Orgánicos', bolsa: 'verde', consejo: 'Son excelente abono para huertas comunitarias como las del Colectivo Caicas en Jaboque.', impacto: 'Convierte un residuo en recurso para la agricultura urbana en lugar de producir metano.' },
  { nombre: 'Hojas secas y poda', cat: 'Orgánicos', bolsa: 'verde', consejo: 'En volúmenes grandes coordina su recolección; en casa sirven como capa seca del compost.', impacto: 'Evita quemas y botaderos de poda en las rondas de los humedales.' },
  { nombre: 'Cartón limpio', cat: 'Papel/Cartón', bolsa: 'blanca', consejo: 'Desármalo, aplánalo y mantenlo seco: el cartón mojado pierde casi todo su valor para el reciclador.', impacto: 'Una tonelada de cartón recuperado evita talar árboles y libera espacio en el relleno.' },
  { nombre: 'Periódico y papel de oficina', cat: 'Papel/Cartón', bolsa: 'blanca', consejo: 'No lo arrugues ni lo mezcles con servilletas: entrégalo plano y seco.', impacto: 'El papel es de los materiales con mejor tasa de reincorporación a la cadena productiva.' },
  { nombre: 'Tetrapak limpio', cat: 'Papel/Cartón', bolsa: 'blanca', consejo: 'Ábrelo, enjuágalo y aplánalo; así se aprovechan sus capas de cartón, plástico y aluminio.', impacto: 'Un envase multicapa enjuagado deja de ser basura y se transforma en tejas y láminas.' },
  { nombre: 'Caja de pizza engrasada', cat: 'Papel/Cartón', bolsa: 'negra', consejo: 'Corta la tapa limpia para la bolsa blanca; la parte con grasa va a la negra.', impacto: 'La grasa contamina el lote de cartón; separar bien evita que todo termine en Doña Juana.' },
  { nombre: 'Botella de vidrio', cat: 'Vidrio/Metal', bolsa: 'blanca', consejo: 'Entrégala entera y sin tapa. Si está rota, envuélvela en papel y márcala para proteger las manos del reciclador.', impacto: 'El vidrio se recicla infinitas veces; enterrado nunca se degrada.' },
  { nombre: 'Lata de aluminio', cat: 'Vidrio/Metal', bolsa: 'blanca', consejo: 'Vacíala y aplástala. Es de los materiales mejor pagados: es ingreso digno para el reciclador de oficio.', impacto: 'Reciclar aluminio ahorra cerca del 95 % de la energía necesaria para producirlo nuevo.' },
  { nombre: 'Lata de conserva', cat: 'Vidrio/Metal', bolsa: 'blanca', consejo: 'Enjuágala y mete la tapa dentro de la lata para evitar cortaduras.', impacto: 'El metal recuperado no oxida suelos ni aporta metales a los lixiviados del relleno.' },
  { nombre: 'Servilletas y papel higiénico usados', cat: 'No aprovechables', bolsa: 'negra', consejo: 'Van a la negra. Mezclarlas con reciclables obliga al reciclador a manipular residuos sanitarios.', impacto: 'Separarlas bien protege la salud de quien recicla y la calidad del material aprovechable.' },
  { nombre: 'Pañales', cat: 'No aprovechables', bolsa: 'negra', consejo: 'Ciérralos bien y nunca los pongas en la bolsa blanca.', impacto: 'Su volumen es alto: considerar alternativas reutilizables reduce de forma notable la bolsa negra.' },
  { nombre: 'Pilas y baterías', cat: 'Peligrosos/Especiales', bolsa: 'especial', consejo: 'Llévalas a contenedores posconsumo de supermercados y centros comerciales; nunca a la bolsa.', impacto: 'Una pila filtra metales pesados que contaminan suelo y agua de la cuenca durante décadas.' },
  { nombre: 'Llantas', cat: 'Peligrosos/Especiales', bolsa: 'especial', consejo: 'Entrégalas en el taller o punto posconsumo autorizado: el fabricante está obligado a recogerlas.', impacto: 'En 2025 se retiraron 1.082 llantas de los humedales de Bogotá; abandonadas acumulan agua y vectores.' },
  { nombre: 'Escombros', cat: 'Peligrosos/Especiales', bolsa: 'especial', consejo: 'Solicita la recolección a la UAESP / operador de aseo o llévalos a un sitio autorizado de RCD.', impacto: 'Rellenar humedales con escombros destruye el ecosistema; en 2025 se retiraron 50 t de ellos.' },
  { nombre: 'Aceite de cocina usado', cat: 'Peligrosos/Especiales', bolsa: 'especial', consejo: 'Déjalo enfriar, guárdalo en botella cerrada y llévalo a un gestor autorizado. Nunca por el lavaplatos.', impacto: 'Un litro de aceite puede contaminar miles de litros de agua que terminan en los humedales y el río Bogotá.' },
  { nombre: 'Medicamentos vencidos', cat: 'Peligrosos/Especiales', bolsa: 'especial', consejo: 'Deposítalos en los contenedores posconsumo de droguerías (Punto Azul).', impacto: 'Evita que compuestos farmacéuticos lleguen a los lixiviados y a las fuentes de agua.' },
  { nombre: 'Ropa y textiles', cat: 'Peligrosos/Especiales', bolsa: 'especial', consejo: 'Si está en buen estado, dónala o intercámbiala; si no, búscale un punto de acopio textil.', impacto: 'Reutilizar textiles alarga su vida y saca volumen de la bolsa negra.' },
]

export const ODS = [
  { n: 11, nombre: 'Ciudades y comunidades sostenibles', principal: true, aporte: 'Gestión de residuos y protección de ecosistemas urbanos como los humedales.', color: '#F99D26' },
  { n: 12, nombre: 'Producción y consumo responsables', principal: true, aporte: 'Separación en la fuente, aprovechamiento y reducción de plásticos de un solo uso.', color: '#CF8D2A' },
  { n: 6, nombre: 'Agua limpia y saneamiento', aporte: 'Menos lixiviados y residuos en la cuenca del Tunjuelo y el río Bogotá.', color: '#26BDE2' },
  { n: 8, nombre: 'Trabajo decente', aporte: 'Reconocimiento y dignificación de los recicladores de oficio.', color: '#A21942' },
  { n: 13, nombre: 'Acción por el clima', aporte: 'Menos materia orgánica en el relleno, menos metano.', color: '#3F7E44' },
  { n: 15, nombre: 'Vida de ecosistemas terrestres', aporte: 'Conservación de las 17 Reservas Distritales de Humedal y su biodiversidad.', color: '#56C02B' },
  { n: 17, nombre: 'Alianzas para lograr los objetivos', aporte: 'Articulación entre ciudadanía, recicladores, colectivos y entidades distritales.', color: '#19486A' },
]

export const ESCENARIOS = [
  {
    id: 'dj',
    titulo: 'Doña Juana y Cuenca del Tunjuelo',
    lugar: 'Ciudad Bolívar',
    resumen: 'El Relleno Sanitario Doña Juana opera desde 1988 y recibe la mayor parte de los residuos de Bogotá bajo un modelo lineal de "producir, usar y enterrar".',
    puntos: [
      'Comunidades de Mochuelo Alto y Mochuelo Bajo conviven con olores, vectores y afectaciones a la salud.',
      'El deslizamiento de 1997 vertió millones de toneladas de basura y evidenció la fragilidad del modelo.',
      'Los lixiviados presionan la cuenca del río Tunjuelo y la descomposición orgánica genera metano.',
    ],
    accion: 'Reducir lo que llega al relleno separando en la fuente, en especial los orgánicos (45,83 %).',
  },
  {
    id: 'ja',
    titulo: 'Humedal Juan Amarillo / Tibabuyes',
    lugar: 'Suba',
    resumen: 'El humedal más extenso de la ciudad, rodeado de una fuerte presión urbana.',
    puntos: [
      'Acopios informales de reciclaje y residuos en sus bordes.',
      'Fragmentación del ecosistema por urbanización y vías.',
      'Necesidad de puntos ecológicos y rutas de recolección selectiva cercanas.',
    ],
    accion: 'Articular puntos ecológicos con organizaciones de recicladores para formalizar el acopio.',
  },
  {
    id: 'tu',
    titulo: 'Humedal El Tunjo – Sector La Libélula',
    lugar: 'Ciudad Bolívar / Tunjuelito',
    resumen: 'Un ecosistema donde convergen intereses de vivienda, conservación y uso del territorio.',
    puntos: [
      'Conflictos socioambientales por ocupación y disposición inadecuada de residuos.',
      'El diálogo de saberes entre comunidad, academia e instituciones como camino de solución.',
      'Gestión participativa del conflicto en lugar de intervenciones impuestas.',
    ],
    accion: 'Usar el reporte ciudadano como insumo para mesas de diálogo comunitario.',
  },
  {
    id: 'jb',
    titulo: 'Humedal Jaboque',
    lugar: 'Engativá',
    resumen: 'Referente de gestión comunitaria gracias al trabajo del Colectivo Caicas.',
    puntos: [
      'Huertas comunitarias que aprovechan residuos orgánicos.',
      'Aulas ambientales para niñas, niños y vecinos.',
      'Una práctica cotidiana del Buen Vivir: cuidado mutuo entre comunidad y naturaleza.',
    ],
    accion: 'Replicar el modelo de colectivo + huerta + aula en otros humedales.',
  },
]

// Nombres oficiales de las 17 Reservas Distritales de Humedal (SDA, ambientebogota.gov.co).
// shortcut: la página de la SDA no publica localidades; Tingua Azul e Hyntiba – El Escritorio quedan sin ella hasta verificarla.
export const PUNTOS = [
  'Torca y Guaymaral — Usaquén / Suba',
  'Tibanica — Bosa',
  'La Vaca — Kennedy',
  'El Burro — Kennedy',
  'Techo — Kennedy',
  'Capellanía o La Cofradía — Fontibón',
  'Meandro del Say — Fontibón',
  'Santa María del Lago — Engativá',
  'Córdoba y Niza — Suba',
  'Jaboque — Engativá',
  'Juan Amarillo o Tibabuyes — Suba / Engativá',
  'La Conejera — Suba',
  'Complejo de Humedales El Tunjo (La Libélula) — Ciudad Bolívar / Tunjuelito',
  'Salitre — Barrios Unidos',
  'Chiguasuque - La Isla — Bosa',
  'Tingua Azul',
  'Hyntiba - El Escritorio',
  'Cuenca del Tunjuelo / Doña Juana — Ciudad Bolívar',
  'Otro punto (indicar en la descripción)',
]

export const TIPOS_REPORTE = {
  'Basura ordinaria': 'UAESP',
  Escombros: 'UAESP',
  Llantas: 'SDA',
  'Punto crítico en ronda o cuerpo de agua': 'EAAB / SDA',
}

export const AUTORES = [
  { ref: 'Gudynas & Acosta (2011)', idea: 'Alternativa al desarrollo', texto: 'El Buen Vivir no es una versión "verde" del crecimiento: cuestiona el desarrollo mismo. Por eso la propuesta no se limita a la eficiencia técnica del relleno, sino a cambiar la relación de la ciudad con lo que desecha.' },
  { ref: 'Acosta (2012)', idea: 'Sumak Kawsay y reciprocidad', texto: 'La naturaleza es sujeto de derechos y la relación con ella es de reciprocidad. Los humedales no son "lotes vacíos": son seres vivos que sostienen agua, aves y comunidad.' },
  { ref: 'Domínguez & Caria (2018)', idea: 'Desarrollo a Escala Humana', texto: 'Satisfacer necesidades desde la autodependencia comunitaria: colectivos como Caicas y las organizaciones de recicladores son protagonistas, no beneficiarios.' },
  { ref: 'Oviedo Freire (2014)', idea: 'Más allá del reduccionismo', texto: 'Evitar convertir el Buen Vivir en un eslogan o en una mercancía. Su valor se demuestra en hábitos reales: separar, compostar, reducir y cuidar.' },
]

export const FASES = [
  { titulo: 'Validación comunitaria', quien: 'Colectivos de humedales y asociaciones de recicladores', texto: 'Socializar el prototipo, ajustar contenidos y lenguaje con quienes habitan y trabajan en el territorio.' },
  { titulo: 'Piloto territorial', quien: 'UAESP · SDA · alcaldías locales', texto: 'Probar el clasificador y el reporte ciudadano en una o dos localidades (p. ej. Suba y Engativá) con metas medibles.' },
  { titulo: 'Integración institucional', quien: 'UAESP · SDA · EAAB', texto: 'Conectar los reportes a un backend oficial con trazabilidad, protección de datos y respuesta de la entidad competente.' },
  { titulo: 'Escalamiento y evaluación', quien: 'Todas las partes', texto: 'Extender a los 17 humedales, publicar indicadores abiertos y evaluar el impacto en la reducción de residuos en Doña Juana.' },
]
