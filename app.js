/**
 * MANUAL DeCA — GUÍA PRÁCTICA INTERACTIVA (VERSIÓN 5 DE OCTUBRE DE 2026)
 * Single Page Application (SPA) sin dependencias externas.
 * Contiene el dataset estructurado íntegro de los 8 bloques y herramientas operativas.
 */

// =============================================================================
// 1. DATASET ESTRUCTURADO COMPLETO DEL MANUAL DeCA
// =============================================================================
const DECA_DATA = {
  meta: {
    titulo: "Manual DeCA — Guía práctica",
    version: "5 de octubre de 2026",
    subtitulo: "Del documento de control administrativo en papel (DCA) al documento electrónico de control administrativo (DeCA) en el transporte público de mercancías por carretera.",
    avisoLegal: "Este manual es informativo y no constituye asesoramiento jurídico. Está elaborado exclusivamente a partir de los textos oficiales indicados y refleja la situación a 5 de octubre de 2026, fecha de corte. Para cualquier caso concreto, consulte los textos vigentes o a un profesional del sector.",
    fechaLimite: "2026-10-05T00:00:00+02:00"
  },

  textosOficiales: [
    { id: "fom2861", norma: "Orden FOM/2861/2012, de 13 de diciembre", detalle: "Documento de control administrativo en el transporte público de mercancías por carretera (arts. 1, 2, 4, 5, 6, 7, 8 y 9)." },
    { id: "res2026", norma: "Resolución de 5 de junio de 2026 (BOE-A-2026-12784)", detalle: "Dirección General de Transporte por Carretera y Ferrocarril. Desarrollo técnico del DeCA: formato, QR, URL, repositorio, modificaciones y sustituciones." },
    { id: "rd1211", norma: "Real Decreto 1211/1990 (Reglamento de la LOTT)", detalle: "Texto consolidado (ref. BOE-A-1990-24442). Arts. 19, 198.21, 222.1 y 222.2 (introducido por RD 70/2019 sobre soporte electrónico e integridad)." },
    { id: "ley16_1987", norma: "Ley 16/1987 (LOTT)", detalle: "Texto consolidado. Arts. 33.3 (colaboración con inspección), 140 a 143 (régimen sancionador) y 147.1 (obligación de llevar documentación a bordo)." },
    { id: "ley15_2009", norma: "Ley 15/2009, de 11 de noviembre", detalle: "Contrato de transporte terrestre de mercancías. Arts. 10 y 10 bis (carta de porte) y 10.6 (conservación de 1 año)." },
    { id: "ley9_2025", norma: "Ley 9/2025, de Movilidad Sostenible", detalle: "Disposición transitoria octava: digitalización obligatoria a los 10 meses de entrada en vigor. Título VIII y Disposición Final cuarta." },
    { id: "eidas", norma: "Reglamento (UE) 910/2014 (eIDAS)", detalle: "Firma electrónica avanzada (AdES, arts. 3.11 y 26) y firma electrónica cualificada (QES, arts. 3.12 y 25.2)." },
    { id: "efti", norma: "Reglamento (UE) 2020/1056 (eFTI)", detalle: "Información electrónica relativa al transporte de mercancías. Sustitución directa del DeCA a nivel de la Unión Europea sin adaptar QR/URL." },
    { id: "adr2025", norma: "Acuerdo ADR 2025, capítulo 5.4 (BOE-A-2025-77)", detalle: "Transporte de mercancías peligrosas. Carta de porte ADR, validez en papel y condiciones acumulativas para sustituir al DeCA." },
    { id: "faq_mitms", norma: "Preguntas Frecuentes (FAQ) del Ministerio de Transportes y Movilidad Sostenible", detalle: "Criterio interpretativo oficial orientativo sin efectos jurídicos normativos directos." }
  ],

  bloques: [
    {
      id: "bloque-1",
      numero: 1,
      titulo: "¿Quién debe emitir el DCA/DeCA?",
      lead: "Ámbito de aplicación, transportes excluidos, sujetos obligados y la regla de oro en las cadenas de subcontratación.",
      categoria: "obligacion",
      tags: ["Ámbito", "Subcontratación", "Cargador contractual", "Transportista efectivo", "Exenciones"],
      secciones: [
        {
          subtitulo: "¿A qué transportes se aplica?",
          tipo: "texto",
          contenido: [
            "**Transporte público de mercancías por carretera:** La Orden FOM/2861/2012 (art. 1) lo hace expresamente exigible en este tipo de transporte.",
            "**Transportes interiores, cabotaje incluido:** La Resolución de 5-jun-2026 (exposición de motivos) los define como los que tienen origen y destino en España (art. 65 LOTT) y confirma que el cabotaje por territorio español está expresamente incluido.",
            "**Transportes internacionales que discurren parcialmente por España:** Quedan fuera del DeCA; utilizan los documentos de control de los convenios internacionales suscritos por España (CMR, etc.).",
            "**Transporte privado complementario:** Queda fuera (FAQ del Ministerio en relación con el art. 1 de la Orden). En este caso debe llevarse a bordo la documentación acreditativa prevista en el art. 102.2 a), c) y d) de la LOTT.",
            "**La aplicación la pone cada empresa:** El DeCA no es una plataforma o software central del Ministerio ni requiere registro previo en ninguna sede gubernamental; cada empresa utiliza su propia aplicación de software o contrata un proveedor tecnológico."
          ]
        },
        {
          subtitulo: "Cadena del marco normativo",
          tipo: "pasos",
          pasos: [
            { orden: "1", titulo: "RD 1211/1990, art. 222.1 párrafo 2º", detalle: "Obliga a llevar a bordo del vehículo los documentos de control administrativo que se determinen reglamentariamente." },
            { orden: "2", titulo: "Orden FOM/2861/2012", detalle: "Desarrolla el documento en papel: objeto (art. 1), sujetos obligados (art. 4), responsabilidad compartida (art. 7)." },
            { orden: "3", titulo: "RD 1211/1990, art. 222.2 (RD 70/2019)", detalle: "Habilita el formato electrónico exigiendo disponibilidad, integridad, inalterabilidad e inviolabilidad del contenido." },
            { orden: "4", titulo: "Ley 9/2025, disposición transitoria octava", detalle: "Obliga de manera imperativa a la digitalización total del DCA a los 10 meses de su entrada en vigor." },
            { orden: "5", titulo: "Resolución de 5-jun-2026 (DGTCF)", detalle: "Desarrollo técnico de generación del DeCA: fichero digital antes del inicio del servicio, código QR, URL segura y repositorios." }
          ]
        },
        {
          subtitulo: "Sujetos obligados (Orden FOM/2861/2012, art. 4)",
          tipo: "texto",
          contenido: [
            "La normativa define con total precisión **dos figuras obligadas, no una sola**:",
            "• **Transportista efectivo (art. 4.a):** Persona física o jurídica titular de la autorización de transporte a cuyo amparo se realiza material y físicamente el desplazamiento.",
            "• **Cargador contractual (art. 4.b):** Quien contrata directamente con el transportista efectivo. Puede ser el cargador efectivo (propietario o expedidor de la mercancía) o cualquier intermediario de transporte: otro transportista, agencia de transportes, cooperativa, transitario, operador logístico, etc."
          ]
        },
        {
          subtitulo: "Regla clave en cadenas de subcontratación",
          tipo: "alerta",
          estilo: "warning",
          contenido: "La relación documental del DCA/DeCA se ancla SIEMPRE al ÚLTIMO ESLABÓN de la cadena de contratación: quien contrata directamente con quien ejecuta físicamente el transporte. Los eslabones mercantiles anteriores quedan completamente fuera de la obligación documental de ese envío específico."
        },
        {
          subtitulo: "Responsabilidad repartida (Orden FOM/2861/2012, art. 7)",
          tipo: "tabla_responsabilidad",
          cabeceras: ["Sujeto Obligado", "Datos del Art. 6 de los que responde ante Inspección"],
          filas: [
            { sujeto: "Cargador contractual", datos: "a) Identificación y NIF del cargador<br>b) Identificación y NIF del transportista<br>c) Lugar de origen y destino del envío<br>d) Naturaleza y peso de la mercancía" },
            { sujeto: "Transportista efectivo", datos: "e) Autorización especial de circulación (si aplica)<br>f) Fecha de realización del transporte<br>g) Matrícula del vehículo (tractor + semirremolque/remolque)" }
          ],
          nota: "Si el documento no se formaliza, son responsables solidarios el cargador contractual y el transportista efectivo. Lo mismo ocurre si no se lleva a bordo, salvo que el cargador contractual demuestre que el documento fue emitido en plazo, quedando eximido de responsabilidad (art. 7.1)."
        },
        {
          subtitulo: "Exenciones de emisión (Orden FOM/2861/2012, art. 2)",
          tipo: "lista_exenciones",
          items: [
            { letra: "a", texto: "Transportes sin necesidad de título habilitante (autorización)." },
            { letra: "b", texto: "Transportes de mudanzas." },
            { letra: "c", texto: "Transporte de vehículos accidentados o averiados trasladados a taller." },
            { letra: "d", texto: "Servicios de paquetería y paquetería de bultos reducidos manipulables por una sola persona." }
          ]
        },
        {
          subtitulo: "El 'atajo legal' de la carta de porte (art. 2.2 de la Orden)",
          tipo: "texto",
          contenido: [
            "Si el transporte ya va documentado con una carta de porte u otra documentación acreditativa que contenga **todos los datos requeridos por el art. 6**, ese documento sirve legalmente como documento de control.",
            "**Condición crítica desde el 5 de octubre de 2026:** Solo es válido si además está emitido en formato electrónico (DeCA digital), cumpliendo los requisitos técnicos de la Resolución de 5-jun-2026 (apartado Octavo)."
          ]
        },
        {
          subtitulo: "Casos prácticos de subcontratación",
          tipo: "casos_practicos",
          casos: [
            {
              id: "caso1",
              titulo: "Caso 1 — Subcontratación simple",
              esquema: ["Empresa A (Dueño carga)", "Agencia B (Intermediario)", "Transportista C (Efectivo)"],
              enlace: "B ➔ C",
              resultado: "Cargador contractual = B | Transportista efectivo = C.",
              explicacion: "A queda fuera de la obligación DeCA (aunque sea el dueño de la mercancía), porque A no contrata directamente con quien ejecuta físicamente el transporte."
            },
            {
              id: "caso2",
              titulo: "Caso 2 — Cadena larga con múltiples intermediarios",
              esquema: ["Cliente A", "Operador B", "Agencia C", "Transportista D"],
              enlace: "C ➔ D",
              resultado: "Cargador contractual = C | Transportista efectivo = D.",
              explicacion: "Se genera UN SOLO DeCA anclado al último eslabón (C-D). Los contratos previos A-B y B-C son relaciones mercantiles contractuales previas que NO generan documento de control propio."
            }
          ]
        }
      ]
    },

    {
      id: "bloque-2",
      numero: 2,
      titulo: "Datos obligatorios y responsabilidad",
      lead: "Estructura del artículo 6, principio de libre edición, casos límite (peso difícil determinación, cambio de vehículo) y emisión de ejemplares.",
      categoria: "datos",
      tags: ["Art. 6", "Formato libre", "Peso difícil determinación", "Cambio vehículo", "Ejemplares"],
      secciones: [
        {
          subtitulo: "Formato libre (Orden FOM/2861/2012, art. 5)",
          tipo: "texto",
          contenido: [
            "«*El documento de control será de libre edición, pudiendo ajustarse al modelo, formato y denominación que más convenga.*»",
            "No existe un formulario o plantilla oficial homologada exclusiva por la Administración. Cualquier formato digital es válido (incluyendo cartas de porte adaptadas), siempre que contenga todos los datos preceptivos del artículo 6 y cumpla con los requisitos técnicos del DeCA electrónico."
          ]
        },
        {
          subtitulo: "Contenido obligatorio completo (artículo 6)",
          tipo: "tabla_art6",
          items: [
            { ref: "a)", dato: "Nombre o denominación social, NIF y domicilio del cargador contractual.", sujeto: "Cargador contractual", obligado: true },
            { ref: "b)", dato: "Nombre o denominación social y NIF del transportista efectivo.", sujeto: "Cargador contractual", obligado: true },
            { ref: "c)", dato: "Lugar de origen y destino del envío de transporte.", sujeto: "Cargador contractual", obligado: true },
            { ref: "d)", dato: "Naturaleza y peso de la mercancía transportada.", sujeto: "Cargador contractual", obligado: true },
            { ref: "e)", dato: "Identificación de la autorización especial de circulación (si por dimensiones o masa resulta aplicable).", sujeto: "Transportista efectivo", obligado: false, condicion: "Solo si aplica" },
            { ref: "f)", dato: "Fecha de realización material del transporte.", sujeto: "Transportista efectivo", obligado: true },
            { ref: "g)", dato: "Matrícula del vehículo de motor (tractor + semirremolque/remolque en vehículos articulados).", sujeto: "Transportista efectivo", obligado: true },
            { ref: "h)", dato: "Observaciones y reservas que los intervinientes deseen hacer constar.", sujeto: "Quien la incluya", obligado: false, condicion: "Solo si algún sujeto lo solicita expresamente" }
          ]
        },
        {
          subtitulo: "Matices reglamentarios y casos límite",
          tipo: "cards_matices",
          items: [
            {
              titulo: "Peso de difícil determinación (art. 6.d)",
              icono: "⚖️",
              descripcion: "Si por las circunstancias de la carga resulta difícil o imposible determinar el peso exacto en origen (por ejemplo, graneles agrícolas, tolvas sin báscula, madera en monte), se admite consignar «otro tipo de magnitud» (número de bultos, volumen en m³, metros lineales, etc.).",
              aviso: "La excepción exime exclusivamente del dato de peso exacto; bajo ningún concepto exime de declarar con total precisión la naturaleza de la mercancía."
            },
            {
              titulo: "Cambio de vehículo en ruta (art. 6.g)",
              icono: "🔄",
              descripcion: "Si se produce una avería, trasbordo o cambio de tractora/remolque una vez iniciado el servicio de transporte, la empresa transportista debe hacer constar la nueva matrícula en el documento de control.",
              aviso: "Debe gestionarse obligatoriamente mediante uno de los dos mecanismos reglamentarios de modificación del DeCA (Resolución 5-jun-2026, apartado Quinto)."
            },
            {
              titulo: "Observaciones y reservas (art. 6.h)",
              icono: "📝",
              descripcion: "Es el único dato no obligatorio por defecto de todo el artículo 6. Solo se incorporará al DeCA si el cargador contractual o el transportista efectivo lo solicitan expresamente al formalizar el documento.",
              aviso: "Responde de su exactitud jurídica únicamente la parte que solicita su inclusión."
            }
          ]
        },
        {
          subtitulo: "Emisión y ejemplares (artículo 8)",
          tipo: "texto",
          contenido: [
            "Es legalmente obligatorio emitir **dos ejemplares**:",
            "• **Primer ejemplar:** Para el cargador contractual.",
            "• **Segundo ejemplar:** Para el transportista efectivo, quien debe llevarlo a bordo del vehículo durante todo el desplazamiento (art. 3.1: naturaleza administrativa de control, acompañando materialmente a la carga).",
            "**En el DeCA electrónico, dos ejemplares NO significan dos papeles:** Cada parte accede al fichero digital desde un repositorio compartido común o custodia su copia en su propio repositorio tecnológico independiente (Resolución 5-jun-2026, apartado Segundo.4). Al conductor se le facilita una copia digital (móvil/tablet) o impresa con su código QR (apartado Séptimo)."
          ]
        },
        {
          subtitulo: "Caso práctico resuelto del PDF",
          tipo: "caso_resuelto",
          situacion: "Mercancía a granel (tornillos de acero) cargada directamente desde una tolva industrial en una cantera/fábrica sin báscula operativa en el punto de origen. Peso exacto indeterminado al momento de iniciar viaje.",
          solucion: "Conforme al art. 6.d de la Orden FOM/2861/2012, se declara con total precisión la naturaleza de la mercancía («tornillos de acero a granel») y, en sustitución del peso exacto en kilogramos, se hace constar otra magnitud verificable, como el volumen estimado en metros cúbicos o la capacidad de carga del compartimento. La naturaleza sigue siendo obligatoria sin excepción."
        }
      ]
    },

    {
      id: "bloque-3",
      numero: 3,
      titulo: "Digitalización y plazos",
      lead: "Mandato legal de la Ley 9/2025, cálculo matemático de la fecha de obligatoriedad, antecedentes de 2023 y los 8 requisitos técnicos del DeCA.",
      categoria: "tecnico",
      tags: ["Ley 9/2025", "Plazo 5-oct-2026", "Requisitos técnicos", "URL y QR", "Copia a bordo"],
      secciones: [
        {
          subtitulo: "El mandato legal imperativo (Ley 9/2025, Disposición Transitoria 8ª)",
          tipo: "cita_legal",
          texto: "«El Documento de control administrativo exigible para la realización de transporte público de mercancías por carretera, regulado en la Orden FOM/2861/2012, de 13 de diciembre, deberá ser necesariamente digital a los diez meses desde la entrada en vigor de esta ley.»",
          aclaracion: "Es un mandato de cumplimiento forzoso, no una opción voluntaria ni una recomendación facultativa."
        },
        {
          subtitulo: "Cálculo cronológico del plazo de entrada en vigor",
          tipo: "cronograma",
          hitos: [
            { fecha: "4 de diciembre de 2025", evento: "Publicación oficial en el Boletín Oficial del Estado (BOE núm. 291)." },
            { fecha: "5 de diciembre de 2025", evento: "Entrada en vigor según Disposición Final 22ª (al día siguiente de su publicación)." },
            { fecha: "10 meses de plazo legal", evento: "Plazo de transición fijado por la Disposición Transitoria Octava." },
            { fecha: "5 de octubre de 2026", evento: "Fecha límite improrrogable: Digitalización plena y obligatoria del DeCA en España." }
          ],
          nota: "El Ministerio confirma formalmente esta fecha en su documento oficial de Preguntas Frecuentes (FAQ)."
        },
        {
          subtitulo: "Habilitación técnica previa (RD 1211/1990, art. 222.2)",
          tipo: "texto",
          contenido: [
            "Introducido por el Real Decreto 70/2019 («ROTT»), habilitó legalmente la cumplimentación por medios electrónicos de los documentos de control siempre que los soportes aseguren cuatro principios técnicos fundamentales: **disponibilidad**, **integridad**, **inalterabilidad** e **inviolabilidad** del contenido, garantizando además que los agentes de la Inspección de Transporte puedan obtener copia fidedigna inmediata."
          ]
        },
        {
          subtitulo: "Antecedente: La Resolución de 2026 sustituye a la de 2023",
          tipo: "texto",
          contenido: [
            "La Resolución de 5-jun-2026 (apartado Décimo) deroga y sustituye íntegramente a la Resolución de 22 de mayo de 2023.",
            "Esto demuestra que el marco técnico del documento electrónico no se inventó de la nada en 2026: ya existía una arquitectura consolidada desde 2023. La nueva Resolución de 2026 la perfecciona, la amplía y la sincroniza con el mandato imperativo de la Ley 9/2025."
          ]
        },
        {
          subtitulo: "Momento exacto de generación electrónica",
          tipo: "alerta",
          estilo: "danger",
          contenido: "Los datos deben transformarse en fichero electrónico «en cuanto sean conocidos y SIEMPRE ANTES DEL INICIO EFECTIVO DEL SERVICIO» (Resolución 5-jun-2026, apartado Primero.2). El software de emisión debe registrar cronológicamente la fecha y hora de generación (y de cualquier cambio posterior) mediante marcas de tiempo verificables para acreditar que la emisión precedió al transporte físico."
        },
        {
          subtitulo: "¿Qué ocurre con el papel desde el 5 de octubre de 2026?",
          tipo: "texto",
          contenido: [
            "• **Hasta el 4-oct-2026:** El DCA clásico en soporte papel tradicional regulado por la Orden FOM/2861/2012 continuó siendo plenamente válido.",
            "• **Desde el 5-oct-2026:** El único documento legalmente exigible es el DeCA electrónico (fichero digital nativo con URL única y código QR verificable). Un documento que únicamente exista en papel físico sin fichero electrónico, sin URL y sin QR **no cumple la legalidad vigente**.",
            "• **Copia impresa del DeCA:** El conductor puede portar en cabina una copia impresa en papel del DeCA, **a condición inexcusable de que incluya el código QR legible** (apartado Séptimo). Las anotaciones manuscritas añadidas a bolígrafo sobre esa copia impresa carecen de toda validez legal ante una inspección.",
            "• **Consecuencia sancionadora:** Llevar un papel manuscrito ordinario sin soporte digital puede ser tipificado como carencia del documento exigible a bordo (art. 141.17 LOTT, sanción grave de 401 a 600 €)."
          ]
        },
        {
          subtitulo: "Lista rápida: Los 8 Requisitos Técnicos del DeCA",
          tipo: "checklist_8",
          items: [
            { num: 1, titulo: "Generación previa con marca temporal", detalle: "Generarlo en cuanto se conozcan los datos y siempre antes del inicio físico del transporte, con registro fehaciente de fecha y hora de creación y modificaciones.", ref: "Apartado Primero.2" },
            { num: 2, titulo: "Contenido completo del Art. 6", detalle: "Incluir sin excepción todos los datos preceptivos del art. 6 de la Orden FOM/2861/2012.", ref: "Apartado Primero.1 y Bloque 2" },
            { num: 3, titulo: "Repositorio accesible para inspección", detalle: "Almacenarlo en un repositorio electrónico disponible para su descarga en inspecciones en carretera. El dominio web es libre y no requiere comunicación previa al Ministerio.", ref: "Apartado Primero.3" },
            { num: 4, titulo: "URL única y protocolo seguro", detalle: "URL individual y específica para cada fichero, servida bajo protocolo HTTPS con TLS 1.2 o superior, accesible a agentes habilitados y sin caducidad previa al fin del servicio.", ref: "Apartados Primero.4, Tercero.1 y Tercero.2" },
            { num: 5, titulo: "Código QR asociado", detalle: "Generar e incorporar en el documento un código QR que apunte directamente a la descarga o visualización de la URL del fichero electrónico.", ref: "Apartado Tercero" },
            { num: 6, titulo: "Entrega preceptiva al conductor", detalle: "Entregar al conductor, antes de iniciar el viaje, una copia electrónica (en smartphone/tablet) o impresa en papel que contenga obligatoriamente el QR.", ref: "Apartado Séptimo" },
            { num: 7, titulo: "Trazabilidad de modificaciones", detalle: "Si se alteran datos en ruta, actualizar el fichero existente conservando datos tachados o emitir un nuevo PDF trazable vinculado al original.", ref: "Apartado Quinto y Bloque 5" },
            { num: 8, titulo: "Conservación mínima durante 1 año", detalle: "Custodiar en repositorio todos los ficheros y versiones generadas durante al menos un año natural a disposición de la Inspección.", ref: "Orden art. 9.1 y Segundo.4" }
          ]
        }
      ]
    },

    {
      id: "bloque-4",
      numero: 4,
      titulo: "Firma electrónica",
      lead: "Regla general de no obligatoriedad, supuestos de excepción, niveles eIDAS admitidos (AdES y QES) y aclaraciones del Ministerio.",
      categoria: "firma",
      tags: ["Firma opcional", "eIDAS 910/2014", "Firma Avanzada AdES", "Firma Cualificada QES", "Carta de porte"],
      secciones: [
        {
          subtitulo: "La firma electrónica NO es obligatoria por defecto",
          tipo: "alerta",
          estilo: "info",
          contenido: "Resolución de 5-jun-2026 (exposición de motivos): «*La firma de los documentos de control administrativo no es obligatoria, puesto que ni la Orden FOM/2861/2012 [...] ni la Orden FOM/1230/2013 [...] establecen requisitos de firma para la validez del documento de control.*» Por tanto, el DeCA estándar tiene plena validez jurídica sin requerir firma."
        },
        {
          subtitulo: "¿Cuándo sí es obligatoria la firma? (Resolución 5-jun-2026, apartado Cuarto)",
          tipo: "texto",
          contenido: [
            "Únicamente se vuelve preceptiva cuando «*por la operativa del servicio de transporte o por la regulación aplicable, el documento electrónico de control administrativo (DeCA) también se utilice con una finalidad contractual y se deban incluir firmas*».",
            "El ejemplo típico y más habitual ocurre cuando el DeCA se utiliza simultáneamente como **carta de porte digital**, asumiendo efectos mercantiles de entrega y recepción de la carga (conforme a la posibilidad del apartado Octavo)."
          ]
        },
        {
          subtitulo: "Los dos niveles admitidos (Reglamento eIDAS 910/2014)",
          tipo: "comparativa_firmas",
          firmas: [
            {
              nombre: "Firma Electrónica Avanzada (AdES)",
              nivel: "Mínimo legal exigido",
              base: "Arts. 3.11 y 26 del Reglamento (UE) 910/2014",
              requisitos: [
                "a) Estar vinculada al firmante de manera única.",
                "b) Permitir la identificación unívoca del firmante.",
                "c) Haber sido creada utilizando datos de creación que el firmante puede utilizar bajo su control exclusivo.",
                "d) Estar vinculada con los datos firmados de modo tal que cualquier modificación posterior de los mismos sea detectable."
              ],
              soporte: "Según la FAQ del Ministerio, la AdES no requiere certificado cualificado; se admiten métodos telemáticos habituales como códigos OTP (One Time Password vía SMS/email) o firma biométrica sobre pantalla táctil."
            },
            {
              nombre: "Firma Electrónica Cualificada (QES)",
              nivel: "Máxima seguridad jurídica",
              base: "Arts. 3.12 y 25.2 del Reglamento (UE) 910/2014",
              requisitos: [
                "Es una firma avanzada creada mediante un dispositivo cualificado de creación de firmas electrónicas.",
                "Se basa en un certificado cualificado de firma electrónica expedido por un prestador de confianza acreditado."
              ],
              soporte: "Equivalencia legal plena con la firma manuscrita sobre papel (art. 25.2 eIDAS). Requiere certificado digital reconocido (ej. DNIe, FNMT o prestadores eIDAS)."
            }
          ]
        },
        {
          subtitulo: "Efecto jurídico comparado (eIDAS art. 25)",
          tipo: "texto",
          contenido: [
            "• **Art. 25.2:** «*Una firma electrónica cualificada tendrá un efecto jurídico equivalente al de una firma manuscrita.*» Solo la QES goza de esta presunción de equivalencia directa y automática.",
            "• **Art. 25.1:** La firma electrónica avanzada (AdES) no queda privada de efectos jurídicos ni de admisibilidad como prueba en juicio por el mero hecho de ser electrónica, pero en caso de litigio su autoría puede requerir prueba pericial de auditoría."
          ]
        },
        {
          subtitulo: "Resumen práctico de la firma",
          tipo: "bullets_resumen",
          items: [
            "**DeCA exclusivamente como documento de control administrativo:** NO hace falta firmarlo. Totalmente válido en blanco.",
            "**DeCA que también asume función contractual / carta de porte:** Requiere como mínimo firma electrónica avanzada (AdES).",
            "**Máximo blindaje probatorio en caso de juicio:** Firma electrónica cualificada (QES), equiparada de pleno derecho a la firma en tinta.",
            "**Criterio FAQ del Ministerio (orientativo):** Para la AdES valen sistemas sencillos y ágiles en almacén (firma biométrica en tablet o SMS OTP), sin necesidad de instalar certificados a los chóferes."
          ]
        }
      ]
    },

    {
      id: "bloque-5",
      numero: 5,
      titulo: "Modificaciones y agrupación de envíos",
      lead: "Los 2 métodos para cambiar datos en ruta, invalidez absoluta de notas a mano, y la regla estricta de agrupación de mercancías.",
      categoria: "operativa",
      tags: ["Modificación en ruta", "PDF trazable", "Agrupación", "Mismo cargador", "Orden no fija ruta"],
      secciones: [
        {
          subtitulo: "Modificación de datos del DeCA durante el servicio (apartado Quinto)",
          tipo: "metodos_modificacion",
          intro: "Si durante la ejecución material del transporte surge un imprevisto (cambio de tractor, avería, variación en destino o datos de carga), existen exclusivamente dos métodos legales admitidos, a elección de la empresa:",
          metodos: [
            {
              numero: "1",
              nombre: "Modificar el fichero existente",
              procedimiento: "Se añaden los nuevos datos directamente al mismo fichero PDF, haciendo constar de forma expresa el motivo del cambio y manteniendo los datos antiguos claramente visibles pero marcados como no válidos (tachados/invalidados).",
              ventaja: "La URL de descarga y el código QR original permanecen inalterados."
            },
            {
              numero: "2",
              nombre: "Generar un nuevo fichero electrónico",
              procedimiento: "Se genera un archivo PDF nuevo con todos los datos debidamente actualizados. Al ser un fichero informático independiente, generará una nueva URL segura y un nuevo código QR.",
              obligacion: "Es legalmente obligatorio conservar el PDF original en el archivo para garantizar la trazabilidad de la modificación."
            }
          ],
          notaConductor: "En cualquiera de los dos casos, el PDF actualizado (modificado o nuevo) debe remitirse telemáticamente al conductor para que pueda exhibirlo en carretera en su teléfono móvil o tablet. No es obligatorio volver a imprimirlo en papel."
        },
        {
          subtitulo: "Prohibición categórica: Notas manuscritas",
          tipo: "alerta",
          estilo: "danger",
          contenido: "Las anotaciones manuscritas realizadas a bolígrafo sobre una copia impresa del DeCA NO TIENEN NINGUNA VALIDEZ LEGAL ante la Inspección. Cualquier corrección debe efectuarse obligatoriamente por el Método 1 o Método 2 en el sistema informático."
        },
        {
          subtitulo: "Agrupación de varios envíos en un mismo DeCA (apartado Sexto.1)",
          tipo: "texto",
          contenido: [
            "Es posible incluir múltiples envíos de mercancías en un solo documento DeCA agrupado, siempre y cuando se cumpla esta condición indispensable:",
            "**CONDICIÓN DE ORO:** El **cargador contractual** y el **transportista efectivo** deben ser EXACTAMENTE LOS MISMOS en todos y cada uno de los envíos agrupados.",
            "Si en alguno de los envíos cambia el cargador contractual (o el transportista), ese envío jamás puede integrarse en el mismo DeCA; requerirá un documento de control independiente.",
            "**Identificación interna:** Cumplida la condición, dentro del DeCA se identificarán con total claridad, envío por envío:",
            "• Origen y destino de cada envío singular.",
            "• Naturaleza y peso/magnitud de cada mercancía.",
            "• Cualquier otro dato del art. 6 que varíe según el punto de carga/descarga."
          ]
        },
        {
          subtitulo: "El orden de la lista no fija la ruta de reparto",
          tipo: "alerta",
          estilo: "info",
          contenido: "La Resolución aclara expresamente que el orden en que figuren relacionados los envíos dentro del DeCA agrupado no impone ningún orden de ejecución física ni ruta predeterminada de reparto. Es una relación documental administrativa, no una hoja de ruta logística."
        }
      ]
    },

    {
      id: "bloque-6",
      numero: 6,
      titulo: "Compatibilidad con otros formatos de transporte",
      lead: "Condiciones para que una Carta de Porte, ADR, eFTI, SANDACH o DI de residuos sustituyan legalmente al DeCA.",
      categoria: "formatos",
      tags: ["ADR mercancías peligrosas", "eFTI UE", "Carta de porte", "SANDACH", "Residuos DI"],
      secciones: [
        {
          subtitulo: "Regla general: Principio de libre edición (apartado Octavo)",
          tipo: "texto",
          contenido: [
            "Puesto que el documento de control es de libre edición (art. 5 Orden FOM/2861/2012), la normativa permite utilizar como DeCA cualquier formato ya consolidado en otros regímenes de transporte:",
            "• Carta de porte ordinaria.",
            "• Documento de transporte ADR (mercancías peligrosas).",
            "• Documento de Identificación (DI) de traslado de residuos.",
            "• Documento comercial SANDACH (subproductos de origen animal no destinados al consumo humano).",
            "• Cualquier otro formato sectorial análogo."
          ]
        },
        {
          subtitulo: "Condición única del apartado Octavo",
          tipo: "alerta",
          estilo: "warning",
          contenido: "Para que un formato alternativo sustituya válidamente al DeCA, debe: (1) Incluir TODOS los datos preceptivos del artículo 6 de la Orden FOM/2861/2012, diferenciando de forma expresa al cargador contractual del transportista efectivo; y (2) Tener carácter plenamente ELECTRÓNICO (Resolución 5-jun-2026 y Ley 9/2025)."
        },
        {
          subtitulo: "El documento ADR: Las dos condiciones acumulativas",
          tipo: "adr_analisis",
          problema: "La carta de porte ADR estándar (capítulo 5.4 del Acuerdo ADR) NO cumple por sí sola el art. 6: solo menciona expedidor, destinatario y transportista, pero no exige NIF de ninguno, ni distingue cargador contractual de transportista efectivo, ni recoge fecha ni autorizaciones especiales de circulación.",
          condiciones: [
            { num: "1", titulo: "Completitud de Contenido", desc: "El documento ADR debe incorporar todos los campos del art. 6 (incluyendo NIFs completos y la diferenciación nítida cargador contractual / transportista efectivo)." },
            { num: "2", titulo: "Tratamiento pleno de DeCA Electrónico", desc: "No basta con añadir los datos en papel. Al hacer las funciones de DeCA, hereda todas las exigencias de la Resolución de 5-jun-2026: PDF nativo digital, URL única bajo HTTPS TLS 1.2+, código QR, conservación de un año completo (no los 3 meses del ADR) y procedimiento formal de modificación." }
          ],
          conclusion: "Si no se cumplen ambas condiciones cumulativas a la vez, NO sirve como DeCA. En ese caso, la empresa debe emitir DOS documentos independientes: el ADR físico por un lado y el DeCA digital por otro."
        },
        {
          subtitulo: "Zona clara: El ADR y la carta de porte en papel siguen siendo válidos",
          tipo: "texto",
          contenido: [
            "• **ADR en papel (5.4.0.1 Acuerdo ADR):** Sigue siendo plenamente legal y válido por sí mismo para el transporte de materias peligrosas sin condiciones añadidas. Lo que no puede hacer es suplir al DeCA.",
            "• **Carta de porte en papel (Ley 15/2009 arts. 10 y 10 bis):** Mantiene su validez mercantil para documentar el contrato mercantil entre las partes. Sin embargo, no sirve para cumplir con el control administrativo del transporte si no es electrónica."
          ]
        },
        {
          subtitulo: "Reglamento eFTI (apartado Noveno) — Sustitución directa sin adaptar nada",
          tipo: "alerta",
          estilo: "success",
          contenido: "Si los datos del artículo 6 se procesan a través de una plataforma certificada bajo el Reglamento Europeo eFTI (UE 2020/1056), NO HACE FALTA presentar el DeCA con el QR y la URL de la normativa española. El eFTI es una plataforma reconocida directamente por la Unión Europea y las autoridades españolas están legalmente obligadas a admitirlo de forma directa e incondicional (art. 1.a eFTI)."
        },
        {
          subtitulo: "SANDACH y Documento de Identificación de Residuos (DI)",
          tipo: "texto",
          contenido: [
            "El apartado Octavo menciona ambos documentos como susceptibles de sustituir al DeCA. Aunque sus normas sectoriales no se detallan en la guía, por analogía con el ADR deben satisfacer idénticos requisitos: incorporar los datos del art. 6 y recibir tratamiento completo de DeCA digital (PDF, QR, URL segura y conservación de un año)."
          ]
        }
      ]
    },

    {
      id: "bloque-7",
      numero: 7,
      titulo: "Conservación de documentos",
      lead: "Plazo general de 1 año, los 3 esquemas de repositorio admitidos, requisitos de la URL y comparativa exhaustiva de plazos.",
      categoria: "conservacion",
      tags: ["Conservación 1 año", "Repositorio digital", "URL TLS 1.2", "Auditoría Inspección", "ADR 3 meses"],
      secciones: [
        {
          subtitulo: "Regla general de conservación (art. 9 Orden y Segundo.4 Resolución)",
          tipo: "texto",
          contenido: [
            "Tanto el **cargador contractual** como el **transportista efectivo** tienen la obligación legal de conservar todos los ficheros del DeCA durante al menos **UN AÑO natural**.",
            "El archivo debe mantener la información de manera íntegra, inalterada y legible, quedando permanentemente a disposición de los Servicios de Inspección del Transporte Terrestre cuando sea requerida."
          ]
        },
        {
          subtitulo: "¿Dónde y cómo se guardan? Los 3 esquemas admitidos",
          tipo: "esquemas_guardado",
          esquemas: [
            { num: "1", nombre: "Repositorio común", desc: "El fichero se mantiene en el mismo servidor o nube donde se generó originalmente al inicio del servicio, permitiendo al otro interviniente acceder y descargar libremente los archivos durante el año de vigencia." },
            { num: "2", nombre: "Repositorios independientes", desc: "Cada sujeto (cargador y transportista) descarga y almacena una copia exacta del archivo digital en sus propios servidores o sistemas informáticos locales." },
            { num: "3", nombre: "Repositorio de tercero habilitado", desc: "Se confía la custodia a una plataforma tecnológica o entidad de servicios electrónicos en la nube, garantizando el acceso de ambas partes y de la Inspección." }
          ]
        },
        {
          subtitulo: "Requisitos técnicos del repositorio y de la URL",
          tipo: "requisitos_url",
          items: [
            "**Disponibilidad absoluta para descarga:** Debe permitir la descarga inmediata del fichero PDF durante las inspecciones a pie de carretera.",
            "**Libertad de dominio:** El dominio web del servidor puede ser cualquiera elegido por la empresa; no requiere registro, homologación ni comunicación previa al Ministerio de Transportes.",
            "**Protocolo cifrado seguro:** Cada fichero contará con una URL única y específica servida bajo protocolo seguro HTTPS con encriptación TLS 1.2 o superior.",
            "**Vigencia temporal:** La URL nunca podrá caducar o expirar antes de la finalización efectiva del servicio de transporte.",
            "**Marcas de tiempo auditables:** El software debe registrar internamente la fecha y hora de creación de cada fichero y de sus sucesivas modificaciones."
          ]
        },
        {
          subtitulo: "¿Qué ficheros deben conservarse?",
          tipo: "alerta",
          estilo: "warning",
          contenido: "Deben conservarse TODOS los ficheros generados para un mismo servicio, no únicamente el último. Si hubo modificaciones mediante generación de un nuevo PDF (Método 2), debe archivarse obligatoriamente tanto el PDF original inicial como el nuevo PDF rectificado para posibilitar la trazabilidad completa ante una inspección."
        },
        {
          subtitulo: "Lo que NO cuenta legalmente como conservación",
          tipo: "texto",
          contenido: [
            "La copia que el conductor lleva en el teléfono móvil o impresa en papel sirve para el control en carretera, **pero no satisface la obligación de conservación del art. 9 de la Orden**.",
            "Las anotaciones manuscritas en copias en papel carecen de validez legal: la custodia debe ser informática y documental conforme al apartado Séptimo."
          ]
        },
        {
          subtitulo: "Tabla comparativa de plazos legales de conservación",
          tipo: "tabla_plazos",
          filas: [
            { doc: "DeCA (Documento electrónico de control)", plazo: "1 año", norma: "Orden FOM/2861/2012, art. 9.1; Resolución 5-jun-2026, Segundo.4" },
            { doc: "Datos de la Carta de Porte terrestre", plazo: "1 año", norma: "Ley 15/2009, de 11 de noviembre, art. 10.6" },
            { doc: "Documento ADR (mercancías peligrosas)", plazo: "3 meses (reproducible en papel si se archiva electrónico)", norma: "Acuerdo ADR, apartados 5.4.4.1 y 5.4.4.2" }
          ],
          nota: "¡Atención! Si un documento ADR se utiliza para sustituir al DeCA, hereda automáticamente la exigencia de conservación de 1 año (y no de solo 3 meses)."
        }
      ]
    },

    {
      id: "bloque-8",
      numero: 8,
      titulo: "Marco normativo y régimen sancionador",
      lead: "Cadena de remisiones normativas, régimen de infracciones en la LOTT (100 € a 18.000 €), papel y análisis de zonas grises.",
      categoria: "sanciones",
      tags: ["LOTT", "RD 1211/1990", "Multas", "Infracción Leve", "Infracción Grave", "Infracción Muy Grave", "Zonas grises"],
      secciones: [
        {
          subtitulo: "La cadena normativa: ¿De dónde nace la obligación?",
          tipo: "cadena_normas",
          filas: [
            { nivel: "Ley", norma: "LOTT, art. 147.1", aporta: "Fija el mandato básico: durante el servicio de transporte público deben llevarse a bordo los documentos de control que reglamentariamente se determinen." },
            { nivel: "Real Decreto", norma: "RD 1211/1990, art. 222.1 (párrafo 2º)", aporta: "Reitera la obligación de portar a bordo los documentos de control administrativo «que, en su caso, se establezcan»." },
            { nivel: "Real Decreto", norma: "RD 1211/1990, art. 222.2 (RD 70/2019)", aporta: "Habilita la vía electrónica exigiendo disponibilidad, integridad, inalterabilidad e inviolabilidad, y acceso a copia para la Inspección." },
            { nivel: "Habilitación", norma: "RD 1211/1990, disp. adicional 11ª", aporta: "Faculta al Ministro para dictar normas de aplicación y desarrollo." },
            { nivel: "Orden Ministerial", norma: "Orden FOM/2861/2012 (arts. 1, 6, 7 y 9)", aporta: "Regula en detalle el ámbito de aplicación, los 8 datos obligatorios, el reparto de responsabilidad y el plazo de conservación de 1 año." },
            { nivel: "Resolución", norma: "Resolución de 5-jun-2026 (DGTCF)", aporta: "Define los requisitos técnicos y operativos concretos (PDF nativo, URL https/TLS, QR, modificaciones, repositorios)." },
            { nivel: "Ley", norma: "Ley 9/2025, disp. transitoria 8ª", aporta: "Impone la obligatoriedad imperativa digital a los 10 meses de su entrada en vigor (fecha límite: 5 de octubre de 2026)." },
            { nivel: "Reglamentos UE", norma: "eIDAS 910/2014 y eFTI 2020/1056", aporta: "Marco de firma electrónica (AdES/QES) y vía directa de cumplimiento supranacional reconocida en toda Europa." }
          ],
          aclaracion: "Cada norma remite a la siguiente: la LOTT habilita al reglamento; el reglamento a la Orden ministerial; la Orden es desarrollada técnicamente por la Resolución; y la Ley 9/2025 no redefine el documento, sino que hace obligatorio en formato digital el documento regulado en la Orden."
        },
        {
          subtitulo: "Deber de colaboración con la Inspección",
          tipo: "texto",
          contenido: [
            "Conforme a los **arts. 33.3 de la LOTT y 19 del RD 1211/1990**, el deber de exhibir y aportar los documentos de control y colaborar activamente con los servicios de inspección alcanza tanto a los titulares de la autorización de transporte como a quienes ocupen la posición de cargador, remitente, destinatario o consignatario."
          ]
        },
        {
          subtitulo: "Régimen sancionador aplicable según la LOTT",
          tipo: "tabla_sanciones",
          notaPrevia: "No existe una sanción redactada con el nombre específico «DeCA». Al DeCA se le aplica el régimen general de la documentación de control administrativo tipificado en la LOTT y reproducido en el RD 1211/1990.",
          infracciones: [
            {
              gravedad: "Leve",
              conducta: "Infracción del art. 141 que, por su naturaleza, ocasión o circunstancias, no deba calificarse como grave (exige resolución motivada y justificación del instructor).",
              articulos: "LOTT 142.19",
              cuantia: "100 a 400 €",
              escalado: "100 a 200 €, 201 a 300 € o 301 a 400 € según graduación (art. 143.1.k)"
            },
            {
              gravedad: "Grave",
              conducta: "Carencia, falta de diligenciado o falta de datos esenciales de la documentación de control; ocultación o falta de conservación durante 1 año; empresas que no velen por que los conductores dispongan de ella en formato papel o electrónico.",
              articulos: "LOTT 141.17 y RD 1211/1990 art. 198.21",
              cuantia: "401 a 600 €",
              escalado: "Sanción económica fija graduada según circunstancias (art. 143.1.d)"
            },
            {
              gravedad: "Muy Grave",
              conducta: "Falseamiento de documentos de control que la empresa esté legalmente obligada a llevar, o de los datos consignados en los mismos.",
              articulos: "LOTT 140.9",
              cuantia: "4.001 a 6.000 €",
              escalado: "Hasta 18.000 € (de 6.001 a 18.000 €) si el responsable ya fue sancionado por otra infracción muy grave en los 12 meses anteriores (art. 143.1.j)"
            }
          ]
        },
        {
          subtitulo: "Precisiones jurídicas fundamentales",
          tipo: "bullets_resumen",
          items: [
            "**No llevar el documento, no formalizarlo o no conservarlo 1 año** constituye infracción **GRAVE (401 a 600 €)**.",
            "**Lo MUY GRAVE es falsearlo deliberadamente (4.001 a 18.000 €)** alterando matrículas, NIFs o mercancías.",
            "El art. 141.17 de la LOTT **NO figura** entre los supuestos que facultan la inmovilización cautelar obligatoria del camión en carretera (art. 143.4.a LOTT).",
            "**Régimen diferenciado de la Carta de Porte:** No formalizar carta de porte cuando sea obligatoria se sanciona con 801 a 1.000 € (art. 141.28); omitir el precio del transporte acarrea 601 a 800 € (art. 141.29); y omitir menciones del art. 10 bis de la Ley 15/2009 supone 401 a 600 € (art. 141.30)."
          ]
        },
        {
          subtitulo: "El papel a efectos sancionadores y análisis de Zonas Grises",
          tipo: "zonas_grises",
          items: [
            {
              titulo: "1. ¿Qué sanción exacta se impone si se lleva solo un DCA en papel a partir del 5-oct-2026?",
              detalle: "Desde el 5-oct-2026 un DCA que solo existe en papel no cumple el mandato legal. Sin embargo, ningún artículo sancionador tipifica de manera literal «llevar papel en lugar de formato electrónico». El art. 141.17 de la LOTT tipifica la carencia de documentación de control y menciona textualmente «formato papel o electrónico». La interpretación más plausible de la Administración es sancionarlo como carencia del documento reglamentario exigible (Infracción Grave, 401 a 600 €), criterio que la FAQ del Ministerio adelanta al advertir que se incoarán expedientes sancionadores."
            },
            {
              titulo: "2. Franja de la infracción leve (art. 142.19 LOTT)",
              detalle: "Dependerá exclusivamente de que el instructor aprecie circunstancias atenuantes que justifiquen degradar la infracción de grave a leve, exigiendo expediente motivado."
            },
            {
              titulo: "3. Criterio real de aplicación por la Inspección",
              detalle: "No consta en los textos analizados cuál será el criterio operativo real de los servicios de Inspección."
            }
          ]
        }
      ]
    }
  ]
};

// =============================================================================
// 2. ESTADO DE LA APLICACIÓN (SPA STATE)
// =============================================================================
const AppState = {
  currentView: "dashboard", // "dashboard", "block-detail", "wizard", "checklist", "sanctions-calc", "legal-sources", "faq-notes", "search-results"
  currentBlockId: null,
  activeCategory: "all",
  searchQuery: "",
  theme: localStorage.getItem("deca_theme") || "light",
  favorites: JSON.parse(localStorage.getItem("deca_favorites") || "[]"),
  checklistProgress: JSON.parse(localStorage.getItem("deca_checklist") || "{}"),
  wizardStep: 1,
  wizardAnswers: {}
};

// =============================================================================
// 3. INICIALIZACIÓN DE LA APLICACIÓN
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initCountdownTimer();
  renderSidebarNav();
  setupGlobalEvents();
  routeView("dashboard");
  updateFavoritesBadge();
});

// =============================================================================
// 4. GESTIÓN DEL TEMA (LIGHT / DARK)
// =============================================================================
function initTheme() {
  document.body.setAttribute("data-theme", AppState.theme);
  updateThemeIcon();
}

function toggleTheme() {
  AppState.theme = AppState.theme === "light" ? "dark" : "light";
  document.body.setAttribute("data-theme", AppState.theme);
  localStorage.setItem("deca_theme", AppState.theme);
  updateThemeIcon();
  showToast(`Modo ${AppState.theme === "dark" ? "oscuro" : "claro"} activado`);
}

function updateThemeIcon() {
  const icon = document.getElementById("theme-icon");
  if (icon) {
    icon.textContent = AppState.theme === "dark" ? "☀️" : "🌙";
  }
}

// =============================================================================
// 5. CUENTA ATRÁS HASTA EL 5 DE OCTUBRE DE 2026
// =============================================================================
function initCountdownTimer() {
  const timerElem = document.getElementById("countdown-timer");
  if (!timerElem) return;

  const targetDate = new Date(DECA_DATA.meta.fechaLimite).getTime();

  function update() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      timerElem.textContent = "¡Plazo en vigor obligatorio!";
      timerElem.parentElement.classList.add("in-force");
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    timerElem.textContent = `${days}d ${hours}h ${minutes}m restantes`;
  }

  update();
  setInterval(update, 60000);
}

// =============================================================================
// 6. RENDERIZADO DE LA NAVEGACIÓN LATERAL
// =============================================================================
function renderSidebarNav() {
  const container = document.getElementById("blocks-nav-list");
  if (!container) return;

  container.innerHTML = DECA_DATA.bloques.map(b => `
    <button class="nav-item" data-view="block-detail" data-block-id="${b.id}" id="nav-${b.id}">
      <span class="block-number-tag">B${b.numero}</span>
      <span class="nav-text" title="Bloque ${b.numero} — ${b.titulo}">Bloque ${b.numero}: ${b.titulo}</span>
    </button>
  `).join("");
}

// =============================================================================
// 7. GESTIÓN DE EVENTOS Y RUTAS DE VISTA
// =============================================================================
function setupGlobalEvents() {
  // Sidebar links delegación
  document.querySelector(".sidebar-nav").addEventListener("click", (e) => {
    const btn = e.target.closest(".nav-item");
    if (!btn) return;

    const view = btn.dataset.view;
    const blockId = btn.dataset.blockId || null;

    closeMobileSidebar();
    routeView(view, blockId);
  });

  // Toggle menú responsive móvil
  const sidebarToggleBtn = document.getElementById("sidebar-toggle-btn");
  const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
  const sidebar = document.getElementById("app-sidebar");

  if (sidebarToggleBtn) {
    sidebarToggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }

  if (sidebarCloseBtn) {
    sidebarCloseBtn.addEventListener("click", closeMobileSidebar);
  }

  // Buscador global en tiempo real
  const searchInput = document.getElementById("global-search-input");
  const clearSearchBtn = document.getElementById("clear-search-btn");
  const clearSearchLink = document.getElementById("clear-search-link");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.trim();
      AppState.searchQuery = q;

      if (q.length > 0) {
        clearSearchBtn.classList.remove("hidden");
        executeSearch(q);
      } else {
        clearSearchBtn.classList.add("hidden");
        hideSearchFeedback();
        routeView(AppState.currentView === "search-results" ? "dashboard" : AppState.currentView);
      }
    });

    // Tecla rápida /
    window.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
      }
      if (e.key === "Escape") {
        closeModal();
        closeMobileSidebar();
      }
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", resetSearch);
  }
  if (clearSearchLink) {
    clearSearchLink.addEventListener("click", resetSearch);
  }

  // Filtro de categorías
  const categorySelect = document.getElementById("category-filter-select");
  if (categorySelect) {
    categorySelect.addEventListener("change", (e) => {
      AppState.activeCategory = e.target.value;
      if (AppState.currentView === "dashboard") {
        renderDashboardView();
      } else {
        routeView("dashboard");
      }
    });
  }

  // Botón modo oscuro/claro
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme);
  }

  // Botón imprimir
  const printBtn = document.getElementById("print-view-btn");
  if (printBtn) {
    printBtn.addEventListener("click", () => window.print());
  }

  // Botón favoritos
  const favBtn = document.getElementById("favorites-toggle-btn");
  if (favBtn) {
    favBtn.addEventListener("click", showFavoritesModal);
  }

  // Modal cerrar
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalActionClose = document.getElementById("modal-action-close");
  const modalBackdrop = document.getElementById("app-modal");

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modalActionClose) modalActionClose.addEventListener("click", closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }
}

function closeMobileSidebar() {
  const sidebar = document.getElementById("app-sidebar");
  if (sidebar) sidebar.classList.remove("open");
}

function resetSearch() {
  const searchInput = document.getElementById("global-search-input");
  const clearSearchBtn = document.getElementById("clear-search-btn");
  if (searchInput) searchInput.value = "";
  if (clearSearchBtn) clearSearchBtn.classList.add("hidden");
  AppState.searchQuery = "";
  hideSearchFeedback();
  routeView("dashboard");
}

function hideSearchFeedback() {
  const bar = document.getElementById("search-feedback-bar");
  if (bar) bar.classList.add("hidden");
}

// =============================================================================
// 8. ENRUTADOR DE VISTAS (SPA ROUTING)
// =============================================================================
function routeView(view, blockId = null) {
  AppState.currentView = view;
  AppState.currentBlockId = blockId;

  // Actualizar clase activa en menú lateral
  document.querySelectorAll(".sidebar-nav .nav-item").forEach(item => {
    item.classList.remove("active");
  });

  if (blockId) {
    const activeBlockNav = document.getElementById(`nav-${blockId}`);
    if (activeBlockNav) activeBlockNav.classList.add("active");
  } else {
    const activeNav = document.querySelector(`.sidebar-nav [data-view="${view}"]`);
    if (activeNav) activeNav.classList.add("active");
  }

  // Actualizar breadcrumbs
  updateBreadcrumbs(view, blockId);

  // Renderizar la vista correspondiente
  const main = document.getElementById("main-content-view");
  window.scrollTo({ top: 0, behavior: "smooth" });

  switch (view) {
    case "dashboard":
      renderDashboardView();
      break;
    case "block-detail":
      renderBlockDetailView(blockId);
      break;
    case "wizard":
      renderWizardView();
      break;
    case "checklist":
      renderChecklistView();
      break;
    case "sanctions-calc":
      renderSanctionsCalcView();
      break;
    case "legal-sources":
      renderLegalSourcesView();
      break;
    case "faq-notes":
      renderFaqNotesView();
      break;
    case "search-results":
      // Ya gestionado por executeSearch
      break;
    default:
      renderDashboardView();
  }
}

function updateBreadcrumbs(view, blockId) {
  const crumbCurrent = document.getElementById("current-crumb");
  if (!crumbCurrent) return;

  if (blockId) {
    const block = DECA_DATA.bloques.find(b => b.id === blockId);
    crumbCurrent.textContent = block ? `Bloque ${block.numero}: ${block.titulo}` : "Detalle de Bloque";
  } else {
    const titles = {
      dashboard: "Resumen & Métricas",
      wizard: "Asistente Interactivo de Emisión",
      checklist: "Checklist de Requisitos Técnicos",
      "sanctions-calc": "Simulador Sancionador LOTT",
      "legal-sources": "Marco Normativo & Textos Oficiales",
      "faq-notes": "Criterios Oficiales FAQ del Ministerio",
      "search-results": `Búsqueda: "${AppState.searchQuery}"`
    };
    crumbCurrent.textContent = titles[view] || "Manual DeCA";
  }
}

// =============================================================================
// 9. VISTA DASHBOARD (PANEL PRINCIPAL)
// =============================================================================
function renderDashboardView() {
  const main = document.getElementById("main-content-view");

  // Filtrado de bloques por categoría seleccionada
  let filteredBlocks = DECA_DATA.bloques;
  if (AppState.activeCategory !== "all") {
    filteredBlocks = DECA_DATA.bloques.filter(b => b.categoria === AppState.activeCategory);
  }

  main.innerHTML = `
    <!-- Hero Banner -->
    <section class="hero-banner">
      <div class="hero-title-group">
        <span class="hero-badge">Manual Operativo Oficial consolidado</span>
        <h2>Documento Electrónico de Control Administrativo (DeCA)</h2>
        <p>
          Guía integral para transportistas, cargadores contractuales y operadores logísticos.
          Alineada con la Ley 9/2025 de Movilidad Sostenible, Orden FOM/2861/2012 y la Resolución de 5 de junio de 2026.
        </p>
      </div>

      <div class="hero-stats-grid">
        <div class="stat-card">
          <span class="stat-num">05 OCT</span>
          <span class="stat-label">Obligatoriedad DeCA 2026</span>
        </div>
        <div class="stat-card">
          <span class="stat-num">8</span>
          <span class="stat-label">Bloques Técnicos y Jurídicos</span>
        </div>
        <div class="stat-card">
          <span class="stat-num">1 AÑO</span>
          <span class="stat-label">Custodia en Repositorio</span>
        </div>
        <div class="stat-card">
          <span class="stat-num">401€ - 600€</span>
          <span class="stat-label">Sanción Grave LOTT 141.17</span>
        </div>
      </div>
    </section>

    <!-- Quick Tools Cards -->
    <div class="quick-tools-grid">
      <div class="tool-card" onclick="routeView('wizard')">
        <div>
          <div class="tool-card-icon">🧭</div>
          <h3>Asistente de Obligatoriedad</h3>
          <p>Diagnóstico en 3 pasos: averigua si tu empresa está obligada a emitir DeCA y quién responde de cada dato.</p>
        </div>
        <span class="tool-card-cta">Iniciar diagnóstico →</span>
      </div>

      <div class="tool-card" onclick="routeView('checklist')">
        <div>
          <div class="tool-card-icon">📋</div>
          <h3>Checklist de los 8 Requisitos</h3>
          <p>Valida paso a paso si tu software cumple con URLs HTTPS TLS 1.2+, código QR y trazabilidad de cambios.</p>
        </div>
        <span class="tool-card-cta">Comprobar requisitos →</span>
      </div>

      <div class="tool-card" onclick="routeView('sanctions-calc')">
        <div>
          <div class="tool-card-icon">⚖️</div>
          <h3>Simulador de Sanciones LOTT</h3>
          <p>Calcula y clasifica las cuantías aplicables por carencia de datos, falta de emisión o falsedad documental.</p>
        </div>
        <span class="tool-card-cta">Calcular sanciones →</span>
      </div>
    </div>

    <!-- Secciones del Manual Grid -->
    <div class="section-header">
      <h3>Bloques de Información del Manual (${filteredBlocks.length})</h3>
      ${AppState.activeCategory !== 'all' ? `<span class="badge">Filtrado por: ${AppState.activeCategory}</span>` : ''}
    </div>

    <div class="blocks-grid">
      ${filteredBlocks.map(b => `
        <article class="block-card">
          <div class="block-card-header">
            <span class="block-badge">Bloque ${b.numero}</span>
            <button class="icon-btn fav-btn-card" title="Marcar como favorito" onclick="toggleFavorite('${b.id}', event)">
              ${AppState.favorites.includes(b.id) ? '⭐' : '☆'}
            </button>
          </div>
          <h4>${b.titulo}</h4>
          <p class="block-card-desc">${b.lead}</p>
          <div class="block-tags-list">
            ${b.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
          </div>
          <div class="block-card-footer">
            <span class="text-subtle" style="font-size: 0.78rem;">${b.secciones.length} secciones clave</span>
            <button class="btn-primary btn-sm" onclick="routeView('block-detail', '${b.id}')">
              Consultar Bloque →
            </button>
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

// =============================================================================
// 10. VISTA DETALLE DE BLOQUE (CON ACORDEONES Y TABLAS)
// =============================================================================
function renderBlockDetailView(blockId) {
  const block = DECA_DATA.bloques.find(b => b.id === blockId);
  const main = document.getElementById("main-content-view");
  if (!block) {
    renderDashboardView();
    return;
  }

  const isFav = AppState.favorites.includes(block.id);

  main.innerHTML = `
    <div class="block-detail-view">
      <div class="detail-top-nav">
        <span class="back-link" onclick="routeView('dashboard')">
          ← Volver al panel principal
        </span>
        <div style="display: flex; gap: 8px;">
          <button class="btn-secondary btn-sm" onclick="toggleFavorite('${block.id}')">
            ${isFav ? '⭐ Guardado en Favoritos' : '☆ Guardar Bloque'}
          </button>
          <button class="btn-secondary btn-sm" onclick="copyBlockCite('${block.id}')">
            📋 Copiar Referencia
          </button>
        </div>
      </div>

      <header class="block-detail-header">
        <span class="block-badge">BLOQUE ${block.numero}</span>
        <h2>${block.titulo}</h2>
        <p class="block-lead">${block.lead}</p>
        <div class="block-tags-list" style="margin-top: 14px;">
          ${block.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
        </div>
      </header>

      <!-- Acordeones de Secciones -->
      <div class="accordion-group" id="block-accordion-group">
        ${block.secciones.map((sec, idx) => `
          <div class="accordion-item ${idx === 0 ? 'active' : ''}" id="acc-item-${idx}">
            <button class="accordion-trigger" onclick="toggleAccordion(${idx})">
              <span>${sec.subtitulo}</span>
              <span class="accordion-chevron">▼</span>
            </button>
            <div class="accordion-body" style="display: ${idx === 0 ? 'block' : 'none'};">
              ${renderSectionBody(sec)}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Navegación entre bloques inferior -->
      <div style="display: flex; justify-content: space-between; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-color);">
        ${block.numero > 1 ? `
          <button class="btn-secondary btn-sm" onclick="routeView('block-detail', 'bloque-${block.numero - 1}')">
            ← Bloque Anterior (${block.numero - 1})
          </button>
        ` : `<div></div>`}

        ${block.numero < 8 ? `
          <button class="btn-primary btn-sm" onclick="routeView('block-detail', 'bloque-${block.numero + 1}')">
            Siguiente: Bloque ${block.numero + 1} →
          </button>
        ` : `<div></div>`}
      </div>
    </div>
  `;
}

function toggleAccordion(idx) {
  const item = document.getElementById(`acc-item-${idx}`);
  if (!item) return;

  const body = item.querySelector(".accordion-body");
  const isActive = item.classList.contains("active");

  if (isActive) {
    item.classList.remove("active");
    body.style.display = "none";
  } else {
    item.classList.add("active");
    body.style.display = "block";
  }
}

// Renderizador modular de contenidos según su tipo estructurado
function renderSectionBody(sec) {
  switch (sec.tipo) {
    case "texto":
      return sec.contenido.map(p => `<p>${formatMarkdownText(p)}</p>`).join("");

    case "alerta":
      return `
        <div class="alert-box ${sec.estilo || 'info'}">
          <span class="alert-icon">${sec.estilo === 'danger' ? '⚠️' : sec.estilo === 'warning' ? '⚡' : sec.estilo === 'success' ? '✅' : 'ℹ️'}</span>
          <div>${formatMarkdownText(sec.contenido)}</div>
        </div>
      `;

    case "cita_legal":
      return `
        <blockquote style="border-left: 4px solid var(--color-primary); padding-left: 16px; margin: 16px 0; font-style: italic; color: var(--text-main);">
          ${sec.texto}
        </blockquote>
        <div class="alert-box info" style="margin-top: 10px;">
          <span class="alert-icon">ℹ️</span>
          <p>${sec.aclaracion}</p>
        </div>
      `;

    case "pasos":
      return `
        <ol style="list-style: none; counter-reset: custom-counter; padding: 0;">
          ${sec.pasos.map(p => `
            <li style="display: flex; gap: 14px; margin-bottom: 16px;">
              <span style="font-family: var(--font-mono); font-weight: 800; background: var(--color-primary-light); color: var(--color-primary); width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">${p.orden}</span>
              <div>
                <strong>${p.titulo}</strong>
                <p style="margin: 4px 0 0 0; color: var(--text-muted);">${p.detalle}</p>
              </div>
            </li>
          `).join('')}
        </ol>
      `;

    case "tabla_responsabilidad":
      return `
        <div class="table-responsive-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                ${sec.cabeceras.map(c => `<th>${c}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${sec.filas.map(f => `
                <tr>
                  <td><span class="badge-role ${f.sujeto.toLowerCase().includes('cargador') ? 'cargador' : 'transportista'}">${f.sujeto}</span></td>
                  <td>${f.datos}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        ${sec.nota ? `<p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 8px;"><strong>Efecto legal:</strong> ${sec.nota}</p>` : ''}
      `;

    case "tabla_art6":
      return `
        <div class="table-responsive-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>Ref</th>
                <th>Dato Obligatorio del Artículo 6</th>
                <th>Sujeto que responde</th>
                <th>Carácter</th>
              </tr>
            </thead>
            <tbody>
              ${sec.items.map(i => `
                <tr>
                  <td class="cell-ref">${i.ref}</td>
                  <td><strong>${i.dato}</strong></td>
                  <td>
                    <span class="badge-role ${i.sujeto.toLowerCase().includes('cargador') ? 'cargador' : i.sujeto.toLowerCase().includes('transportista') ? 'transportista' : 'ambos'}">
                      ${i.sujeto}
                    </span>
                  </td>
                  <td>
                    ${i.obligado ? '<span class="badge" style="background: var(--color-danger);">Obligatorio</span>' : `<span class="badge" style="background: var(--color-info);">${i.condicion || 'Condicional'}</span>`}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;

    case "lista_exenciones":
      return `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; margin: 14px 0;">
          ${sec.items.map(it => `
            <div style="background: var(--bg-subtle); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 12px 16px; display: flex; align-items: center; gap: 10px;">
              <span style="font-family: var(--font-mono); font-weight: 700; color: var(--color-primary); background: var(--bg-surface); padding: 4px 8px; border-radius: 4px;">${it.letra})</span>
              <span style="font-weight: 600; font-size: 0.9rem;">${it.texto}</span>
            </div>
          `).join('')}
        </div>
      `;

    case "casos_practicos":
      return `
        <div class="cases-grid">
          ${sec.casos.map(c => `
            <div class="case-card">
              <div class="case-card-header">
                <span class="alert-icon">💼</span>
                <h5>${c.titulo}</h5>
              </div>
              <div class="chain-flow">
                ${c.esquema.map((node, i) => `
                  <span class="chain-node ${i === c.esquema.length - 1 || i === c.esquema.length - 2 ? 'active-deca' : ''}">${node}</span>
                  ${i < c.esquema.length - 1 ? '<span class="chain-arrow">➔</span>' : ''}
                `).join('')}
              </div>
              <div style="font-size: 0.85rem; font-weight: 700; color: var(--color-primary); margin: 8px 0;">
                Enlace DeCA: ${c.enlace} | ${c.resultado}
              </div>
              <div class="case-resolution">
                ${c.explicacion}
              </div>
            </div>
          `).join('')}
        </div>
      `;

    case "cards_matices":
      return `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; margin: 16px 0;">
          ${sec.items.map(m => `
            <div style="background: var(--bg-subtle); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 18px;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <span style="font-size: 1.4rem;">${m.icono}</span>
                <strong style="font-size: 1rem;">${m.titulo}</strong>
              </div>
              <p style="font-size: 0.88rem; color: var(--text-main); margin-bottom: 10px;">${m.descripcion}</p>
              <div class="alert-box warning" style="margin: 0; padding: 8px 12px; font-size: 0.82rem;">
                <span>⚠️</span>
                <p>${m.aviso}</p>
              </div>
            </div>
          `).join('')}
        </div>
      `;

    case "caso_resuelto":
      return `
        <div style="background: var(--bg-subtle); border: 2px solid var(--color-primary); border-radius: var(--radius-lg); padding: 20px; margin: 16px 0;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
            <span style="font-size: 1.4rem;">💡</span>
            <h5 style="font-size: 1.05rem; font-weight: 700;">Caso Práctico Resuelto Oficial</h5>
          </div>
          <div style="margin-bottom: 14px;">
            <strong>Situación en origen:</strong>
            <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 4px;">${sec.situacion}</p>
          </div>
          <div style="background: var(--bg-surface); border-left: 4px solid var(--color-success); padding: 12px 16px; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
            <strong style="color: var(--color-success);">Solución conforme a derecho:</strong>
            <p style="margin-top: 4px; font-size: 0.9rem;">${sec.solucion}</p>
          </div>
        </div>
      `;

    case "cronograma":
      return `
        <div style="border-left: 2px solid var(--border-color); margin-left: 12px; padding-left: 20px;">
          ${sec.hitos.map(h => `
            <div style="position: relative; margin-bottom: 18px;">
              <span style="position: absolute; left: -26px; top: 3px; width: 10px; height: 10px; border-radius: 50%; background: var(--color-primary);"></span>
              <strong style="font-family: var(--font-mono); color: var(--color-primary);">${h.fecha}</strong>
              <p style="margin: 2px 0 0 0; font-size: 0.9rem;">${h.evento}</p>
            </div>
          `).join('')}
        </div>
        ${sec.nota ? `<p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 8px;"><em>${sec.nota}</em></p>` : ''}
      `;

    case "checklist_8":
      return `
        <div class="checklist-items-list">
          ${sec.items.map(it => `
            <div class="check-item ${AppState.checklistProgress[it.num] ? 'completed' : ''}" onclick="toggleChecklistProgress(${it.num}, event)">
              <div class="check-box">${AppState.checklistProgress[it.num] ? '✓' : ''}</div>
              <div class="check-content">
                <h5>${it.num}. ${it.titulo}</h5>
                <p>${it.detalle}</p>
                <span class="check-ref">${it.ref}</span>
              </div>
            </div>
          `).join('')}
        </div>
      `;

    case "comparativa_firmas":
      return `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 18px; margin: 16px 0;">
          ${sec.firmas.map(f => `
            <div style="background: var(--bg-subtle); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 20px;">
              <span class="badge" style="background: var(--color-primary); margin-bottom: 8px; display: inline-block;">${f.nivel}</span>
              <h5 style="font-size: 1.1rem; font-weight: 800; margin-bottom: 4px;">${f.nombre}</h5>
              <span style="font-family: var(--font-mono); font-size: 0.76rem; color: var(--text-muted);">${f.base}</span>
              <ul style="margin: 14px 0 14px 20px; font-size: 0.88rem;">
                ${f.requisitos.map(r => `<li>${r}</li>`).join('')}
              </ul>
              <div style="background: var(--bg-surface); padding: 10px 14px; border-radius: var(--radius-md); font-size: 0.82rem; border-left: 3px solid var(--color-primary);">
                <strong>Criterio práctico:</strong> ${f.soporte}
              </div>
            </div>
          `).join('')}
        </div>
      `;

    case "metodos_modificacion":
      return `
        <p style="margin-bottom: 16px;">${sec.intro}</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 16px; margin-bottom: 16px;">
          ${sec.metodos.map(m => `
            <div style="background: var(--bg-subtle); border: 2px solid var(--color-primary); border-radius: var(--radius-lg); padding: 20px;">
              <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 800; background: var(--color-primary); color: white; padding: 2px 8px; border-radius: 4px;">MÉTODO ${m.numero}</span>
              <h5 style="font-size: 1.1rem; font-weight: 700; margin: 8px 0;">${m.nombre}</h5>
              <p style="font-size: 0.88rem; margin-bottom: 10px;">${m.procedimiento}</p>
              <div class="alert-box success" style="margin: 0; padding: 8px 12px; font-size: 0.82rem;">
                <span>${m.ventaja ? '👍' : '⚠️'}</span>
                <p><strong>${m.ventaja ? 'Efecto URL/QR:' : 'Requisito de custodia:'}</strong> ${m.ventaja || m.obligacion}</p>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="alert-box info">
          <span>📱</span>
          <p>${sec.notaConductor}</p>
        </div>
      `;

    case "adr_analisis":
      return `
        <div class="alert-box warning">
          <span>⚡</span>
          <div>
            <strong>Incompatibilidad del ADR por defecto:</strong>
            <p>${sec.problema}</p>
          </div>
        </div>
        <h5 style="margin: 16px 0 10px 0; font-weight: 700;">Las 2 Condiciones Cumulativas Indispensables:</h5>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin-bottom: 16px;">
          ${sec.condiciones.map(c => `
            <div style="background: var(--bg-subtle); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 14px;">
              <strong style="color: var(--color-primary);">Condición ${c.num}: ${c.titulo}</strong>
              <p style="font-size: 0.85rem; margin-top: 6px;">${c.desc}</p>
            </div>
          `).join('')}
        </div>
        <div class="alert-box danger">
          <span>⚠️</span>
          <div><strong>Conclusión legal:</strong> ${sec.conclusion}</div>
        </div>
      `;

    case "esquemas_guardado":
      return `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin: 14px 0;">
          ${sec.esquemas.map(esq => `
            <div style="background: var(--bg-subtle); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 16px;">
              <span class="badge" style="background: var(--color-primary);">${esq.num}</span>
              <h5 style="margin: 8px 0 6px 0; font-size: 0.95rem; font-weight: 700;">${esq.nombre}</h5>
              <p style="font-size: 0.85rem; color: var(--text-muted);">${esq.desc}</p>
            </div>
          `).join('')}
        </div>
      `;

    case "requisitos_url":
      return `
        <ul style="margin-left: 20px; font-size: 0.92rem; line-height: 1.7;">
          ${sec.items.map(it => `<li>${formatMarkdownText(it)}</li>`).join('')}
        </ul>
      `;

    case "tabla_plazos":
      return `
        <div class="table-responsive-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>Documento</th>
                <th>Plazo Mínimo Legal de Conservación</th>
                <th>Base Normativa Reguladora</th>
              </tr>
            </thead>
            <tbody>
              ${sec.filas.map(f => `
                <tr>
                  <td><strong>${f.doc}</strong></td>
                  <td><span class="badge" style="background: var(--color-primary); font-size: 0.82rem;">${f.plazo}</span></td>
                  <td style="font-family: var(--font-mono); font-size: 0.82rem;">${f.norma}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        ${sec.nota ? `<div class="alert-box warning"><span>⚡</span><p>${sec.nota}</p></div>` : ''}
      `;

    case "cadena_normas":
      return `
        <div class="table-responsive-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>Rango</th>
                <th>Norma Oficial</th>
                <th>Qué aporta específicamente al DeCA</th>
              </tr>
            </thead>
            <tbody>
              ${sec.filas.map(r => `
                <tr>
                  <td><span class="badge-role ${r.nivel === 'Ley' ? 'cargador' : r.nivel === 'Real Decreto' ? 'transportista' : 'ambos'}">${r.nivel}</span></td>
                  <td><strong>${r.norma}</strong></td>
                  <td style="font-size: 0.86rem;">${r.aporta}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        <p style="font-size: 0.86rem; color: var(--text-muted); margin-top: 10px;">${sec.aclaracion}</p>
      `;

    case "tabla_sanciones":
      return `
        ${sec.notaPrevia ? `<div class="alert-box info" style="margin-bottom: 16px;"><span>ℹ️</span><p>${sec.notaPrevia}</p></div>` : ''}
        <div class="table-responsive-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>Gravedad</th>
                <th>Conducta Tipificada</th>
                <th>Artículo LOTT / RD</th>
                <th>Cuantía Multa</th>
              </tr>
            </thead>
            <tbody>
              ${sec.infracciones.map(inf => `
                <tr>
                  <td>
                    <span class="badge" style="background: ${inf.gravedad === 'Leve' ? 'var(--color-warning)' : inf.gravedad === 'Grave' ? 'var(--color-danger)' : '#7f1d1d'};">
                      ${inf.gravedad}
                    </span>
                  </td>
                  <td style="font-size: 0.88rem;">${inf.conducta}</td>
                  <td style="font-family: var(--font-mono); font-size: 0.82rem;">${inf.articulos}</td>
                  <td>
                    <strong style="font-family: var(--font-mono); color: var(--color-danger);">${inf.cuantia}</strong>
                    <div style="font-size: 0.75rem; color: var(--text-muted);">${inf.escalado}</div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;

    case "zonas_grises":
      return `
        <div style="display: flex; flex-direction: column; gap: 14px; margin: 14px 0;">
          ${sec.items.map(z => `
            <div style="background: var(--bg-subtle); border-left: 4px solid var(--color-warning); padding: 16px; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
              <h5 style="font-size: 0.98rem; font-weight: 700; color: var(--text-main); margin-bottom: 6px;">${z.titulo}</h5>
              <p style="font-size: 0.88rem; color: var(--text-muted); margin: 0;">${z.detalle}</p>
            </div>
          `).join('')}
        </div>
      `;

    case "bullets_resumen":
      return `
        <ul style="margin-left: 20px; font-size: 0.92rem; line-height: 1.7;">
          ${sec.items.map(it => `<li>${formatMarkdownText(it)}</li>`).join('')}
        </ul>
      `;

    default:
      return `<p>Información no disponible.</p>`;
  }
}

// Utilidad sencilla para formatear negritas y enlaces rápidos en texto
function formatMarkdownText(text) {
  if (!text) return "";
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>");
}

// =============================================================================
// 11. ASISTENTE INTERACTIVO (WIZARD "¿DEBO EMITIR DeCA?")
// =============================================================================
function renderWizardView() {
  const main = document.getElementById("main-content-view");

  const questions = [
    {
      step: 1,
      pregunta: "¿Qué tipo de transporte estás realizando?",
      ayuda: "El ámbito del DeCA se restringe exclusivamente al transporte público y cabotaje.",
      opciones: [
        { label: "Transporte Público de Mercancías por Carretera (origen y destino en España)", value: "publico_nacional" },
        { label: "Transporte de Cabotaje por territorio español", value: "cabotaje" },
        { label: "Transporte Privado Complementario (mercancías propias de la empresa)", value: "privado_complementario" },
        { label: "Transporte Internacional puro (suscrito a convenio CMR)", value: "internacional" }
      ]
    },
    {
      step: 2,
      pregunta: "¿Cuál es la naturaleza exacta del servicio?",
      ayuda: "La Orden FOM/2861/2012 establece una serie de exenciones tasadas.",
      opciones: [
        { label: "Carga general ordinaria / Granel / Frigorífico / Cisterna", value: "general" },
        { label: "Servicio de paquetería de bultos reducidos manipulables por una persona", value: "paqueteria" },
        { label: "Transporte de mudanzas o traslados de enseres", value: "mudanzas" },
        { label: "Vehículo averiado o accidentado trasladado a taller de reparación", value: "auxilio" }
      ]
    },
    {
      step: 3,
      pregunta: "¿Cuál es tu posición en la cadena de transporte?",
      ayuda: "La responsabilidad se ancla siempre al último eslabón de la contratación.",
      opciones: [
        { label: "Soy quien contrata directamente al transportista que pone el camión (Cargador Contractual / Agencia)", value: "cargador_contractual" },
        { label: "Soy el titular de la autorización de transporte que realiza el transporte físico (Transportista Efectivo)", value: "transportista_efectivo" },
        { label: "Soy el dueño inicial de la carga pero contraté a una agencia que a su vez subcontrató a otros", value: "cargador_inicial" }
      ]
    }
  ];

  const currentQ = questions.find(q => q.step === AppState.wizardStep);

  main.innerHTML = `
    <div class="wizard-container">
      <div class="wizard-header">
        <span class="badge" style="background: var(--color-primary); margin-bottom: 8px;">Asistente de Diagnóstico</span>
        <h2>¿Debo emitir el DeCA y de qué datos respondo?</h2>
        <p style="color: var(--text-muted);">Responde a 3 preguntas para determinar tus obligaciones legales y operativas.</p>
      </div>

      <div class="wizard-steps-indicator">
        ${[1, 2, 3, 4].map(s => `
          <div class="wizard-step-dot ${s === AppState.wizardStep ? 'active' : s < AppState.wizardStep ? 'completed' : ''}">
            ${s < AppState.wizardStep ? '✓' : s}
          </div>
        `).join('')}
      </div>

      ${AppState.wizardStep <= 3 ? `
        <div class="wizard-card">
          <div class="wizard-question">${currentQ.pregunta}</div>
          <div class="wizard-help">${currentQ.ayuda}</div>
          <div class="wizard-options">
            ${currentQ.opciones.map(opt => `
              <button class="wizard-option-btn" onclick="handleWizardSelection(${currentQ.step}, '${opt.value}')">
                <span>${opt.label}</span>
                <span>➔</span>
              </button>
            `).join('')}
          </div>
        </div>

        ${AppState.wizardStep > 1 ? `
          <button class="btn-secondary btn-sm" onclick="handleWizardBack()">
            ← Pregunta Anterior
          </button>
        ` : ''}
      ` : renderWizardResult()}
    </div>
  `;
}

function handleWizardSelection(step, value) {
  AppState.wizardAnswers[step] = value;
  AppState.wizardStep = step + 1;
  renderWizardView();
}

function handleWizardBack() {
  AppState.wizardStep = Math.max(1, AppState.wizardStep - 1);
  renderWizardView();
}

function resetWizard() {
  AppState.wizardStep = 1;
  AppState.wizardAnswers = {};
  renderWizardView();
}

function renderWizardResult() {
  const ans = AppState.wizardAnswers;

  let obligatoriedad = true;
  let motivoExclusion = null;
  let rol = "";
  let datos = "";
  let firma = "";

  // Evaluación de exclusiones
  if (ans[1] === "privado_complementario") {
    obligatoriedad = false;
    motivoExclusion = "Excluido por no ser transporte público. Debes portar a bordo la documentación acreditativa del art. 102.2 a, c y d de la LOTT.";
  } else if (ans[1] === "internacional") {
    obligatoriedad = false;
    motivoExclusion = "Excluido por transporte internacional. Rige la documentación de convenios internacionales (CMR), no el DeCA español.";
  } else if (ans[2] === "paqueteria" || ans[2] === "mudanzas" || ans[2] === "auxilio") {
    obligatoriedad = false;
    motivoExclusion = "Exención tasada por el art. 2 de la Orden FOM/2861/2012 (paquetería manipulable por una persona, mudanzas o traslado a taller).";
  } else if (ans[3] === "cargador_inicial") {
    obligatoriedad = false;
    motivoExclusion = "En cadenas de subcontratación quedas fuera de la obligación DeCA. La obligación recae exclusivamente en la agencia que subcontrata y en el transportista efectivo final.";
  }

  if (ans[3] === "cargador_contractual") {
    rol = "Cargador Contractual (Art. 4.b Orden FOM/2861/2012)";
    datos = "Respondes de: NIF y razón social tuya y del transportista, origen y destino, y naturaleza y peso de la mercancía.";
    firma = "Firma no obligatoria salvo que uses el documento como carta de porte (mínimo AdES).";
  } else if (ans[3] === "transportista_efectivo") {
    rol = "Transportista Efectivo (Art. 4.a Orden FOM/2861/2012)";
    datos = "Respondes de: Matrícula (tractor+remolque), fecha del transporte y autorización especial si procede. Debes entregar copia con QR al chófer.";
    firma = "Firma no obligatoria para control administrativo. Obligatorio custodiarlo 1 año.";
  }

  return `
    <div class="wizard-result-box" style="border-color: ${obligatoriedad ? 'var(--color-primary)' : 'var(--color-success)'};">
      <div class="wizard-result-title" style="color: ${obligatoriedad ? 'var(--color-primary)' : 'var(--color-success)'};">
        <span>${obligatoriedad ? '📝 OBLIGACIÓN FORMAL DE EMISIÓN DE DeCA' : '🎉 EXENTO DE EMITIR DeCA'}</span>
      </div>

      ${obligatoriedad ? `
        <p style="margin-bottom: 14px;">Tu operativa requiere formalizar un <strong>DeCA Electrónico</strong> con código QR y URL HTTPS TLS 1.2+ antes del inicio del viaje.</p>
        <div style="background: var(--bg-subtle); padding: 14px; border-radius: var(--radius-md); margin-bottom: 14px;">
          <strong>Tu rol legal asignado:</strong>
          <p style="color: var(--color-primary); font-weight: 700; margin: 4px 0;">${rol}</p>
          <strong>Tus obligaciones de contenido:</strong>
          <p style="font-size: 0.9rem; margin-top: 4px;">${datos}</p>
        </div>
        <div class="alert-box info" style="margin: 0 0 16px 0;">
          <span>✍️</span>
          <p><strong>Régimen de firma:</strong> ${firma}</p>
        </div>
      ` : `
        <div class="alert-box success" style="margin-bottom: 16px;">
          <span>✅</span>
          <p><strong>Causa de no sujeción:</strong> ${motivoExclusion}</p>
        </div>
      `}

      <div style="display: flex; gap: 10px; justify-content: flex-end;">
        <button class="btn-secondary btn-sm" onclick="resetWizard()">Repetir Asistente</button>
        <button class="btn-primary btn-sm" onclick="routeView('checklist')">Ver Requisitos Técnicos →</button>
      </div>
    </div>
  `;
}

// =============================================================================
// 12. CHECKLIST INTERACTIVO DE REQUISITOS TÉCNICOS
// =============================================================================
function renderChecklistView() {
  const main = document.getElementById("main-content-view");
  const bloque3 = DECA_DATA.bloques.find(b => b.id === "bloque-3");
  const secChecklist = bloque3.secciones.find(s => s.tipo === "checklist_8");

  const completedCount = Object.values(AppState.checklistProgress).filter(Boolean).length;
  const total = secChecklist.items.length;
  const pct = Math.round((completedCount / total) * 100);

  main.innerHTML = `
    <div class="checklist-container">
      <div style="margin-bottom: 24px;">
        <span class="badge" style="background: var(--color-primary); margin-bottom: 8px;">Auditoría Técnica</span>
        <h2 style="font-size: 1.8rem; font-weight: 800; margin-bottom: 6px;">Checklist de los 8 Requisitos del DeCA</h2>
        <p style="color: var(--text-muted);">Comprueba si tu software o proceso de gestión cumple con todas las prescripciones de la Resolución de 5-jun-2026.</p>
      </div>

      <div class="checklist-progress-card">
        <div>
          <span style="font-size: 0.8rem; text-transform: uppercase; font-weight: 700; color: var(--text-muted);">Cumplimiento Normativo</span>
          <div style="font-size: 1.8rem; font-weight: 800; font-family: var(--font-mono); color: var(--color-primary);">${pct}% (${completedCount} de ${total})</div>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width: ${pct}%;"></div>
        </div>
        <button class="btn-secondary btn-sm" onclick="resetChecklistProgress()">Reiniciar Checklist</button>
      </div>

      <div class="checklist-items-list">
        ${secChecklist.items.map(it => `
          <div class="check-item ${AppState.checklistProgress[it.num] ? 'completed' : ''}" onclick="toggleChecklistProgress(${it.num}, event)">
            <div class="check-box">${AppState.checklistProgress[it.num] ? '✓' : ''}</div>
            <div class="check-content">
              <h5>${it.num}. ${it.titulo}</h5>
              <p>${it.detalle}</p>
              <span class="check-ref">${it.ref}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function toggleChecklistProgress(num, event) {
  if (event) event.stopPropagation();
  AppState.checklistProgress[num] = !AppState.checklistProgress[num];
  localStorage.setItem("deca_checklist", JSON.stringify(AppState.checklistProgress));

  if (AppState.currentView === "checklist") {
    renderChecklistView();
  } else if (AppState.currentView === "block-detail") {
    renderBlockDetailView("bloque-3");
  }
}

function resetChecklistProgress() {
  AppState.checklistProgress = {};
  localStorage.removeItem("deca_checklist");
  renderChecklistView();
  showToast("Checklist reiniciado a 0%");
}

// =============================================================================
// 13. SIMULADOR SANCIONADOR LOTT
// =============================================================================
function renderSanctionsCalcView() {
  const main = document.getElementById("main-content-view");

  main.innerHTML = `
    <div class="sanctions-calculator">
      <div style="margin-bottom: 20px;">
        <span class="badge" style="background: var(--color-danger); margin-bottom: 8px;">Régimen LOTT</span>
        <h2 style="font-size: 1.8rem; font-weight: 800;">Simulador Sancionador de Documentación de Control</h2>
        <p style="color: var(--text-muted);">Estima la tipificación legal y los importes de multa según las circunstancias de la infracción.</p>
      </div>

      <div class="sanctions-grid">
        <div class="sanction-input-group">
          <div>
            <label style="font-weight: 700; font-size: 0.9rem; margin-bottom: 6px; display: block;">1. Selecciona la conducta cometida:</label>
            <select id="calc-conducta-select" class="custom-select" style="width: 100%; padding: 10px;" onchange="calculateSanction()">
              <option value="carencia_grave">No llevar el DeCA a bordo / Carencia total (LOTT 141.17)</option>
              <option value="falta_datos">Falta de datos esenciales del art. 6 (origen, destino, NIFs, matrícula)</option>
              <option value="no_conservacion">Falta de conservación durante 1 año en repositorio (LOTT 141.17)</option>
              <option value="papel_solo">Portar exclusivamente DCA en papel sin QR ni URL tras el 5-oct-2026</option>
              <option value="falseamiento">Falseamiento deliberado de datos esenciales (LOTT 140.9)</option>
              <option value="atenuada_leve">Falta no grave con circunstancias atenuadas justificadas (LOTT 142.19)</option>
            </select>
          </div>

          <div>
            <label style="font-weight: 700; font-size: 0.9rem; margin-bottom: 6px; display: block;">2. ¿Existe reincidencia previa en los últimos 12 meses?</label>
            <select id="calc-reincidencia-select" class="custom-select" style="width: 100%; padding: 10px;" onchange="calculateSanction()">
              <option value="no">No (Primera infracción en 12 meses)</option>
              <option value="si">Sí (Sancionado previamente por infracción análoga)</option>
            </select>
          </div>

          <div class="alert-box info">
            <span>ℹ️</span>
            <p><strong>Nota legal importante:</strong> No existe una infracción denominada "DeCA". Se aplica el régimen consolidado de la LOTT y el art. 198.21 del RD 1211/1990.</p>
          </div>
        </div>

        <div class="sanction-result-card" id="sanction-result-card">
          <!-- Populated by calculateSanction() -->
        </div>
      </div>
    </div>
  `;

  calculateSanction();
}

function calculateSanction() {
  const conductaElem = document.getElementById("calc-conducta-select");
  const reincidenciaElem = document.getElementById("calc-reincidencia-select");
  const card = document.getElementById("sanction-result-card");
  if (!conductaElem || !reincidenciaElem || !card) return;

  const conducta = conductaElem.value;
  const reincidencia = reincidenciaElem.value === "si";

  let gravedad = "Grave";
  let cuantia = "401 a 600 €";
  let articulo = "Art. 141.17 LOTT / RD 1211/1990 Art. 198.21";
  let explicacion = "Se tipifica como infracción grave por carencia, falta de datos esenciales o falta de disponibilidad de la documentación de control.";
  let responsabilidad = "Cargador contractual y Transportista efectivo solidariamente (salvo que el cargador pruebe su formalización previa).";

  if (conducta === "falseamiento") {
    gravedad = "Muy Grave";
    articulo = "Art. 140.9 LOTT";
    if (reincidencia) {
      cuantia = "6.001 a 18.000 €";
      explicacion = "Falseamiento con reincidencia agravada en los 12 meses anteriores (art. 143.1.j LOTT).";
    } else {
      cuantia = "4.001 a 6.000 €";
      explicacion = "Falseamiento de documentos de control o de sus datos esenciales (art. 143.1.i LOTT).";
    }
    responsabilidad = "Sujeto autor material del falseamiento o persona en cuyo beneficio se efectuó.";
  } else if (conducta === "atenuada_leve") {
    gravedad = "Leve";
    articulo = "Art. 142.19 LOTT";
    cuantia = "100 a 400 €";
    explicacion = "Infracción reclasificada por circunstancias atenuadas previa resolución motivada del instructor.";
    responsabilidad = "Responsable directo del defecto leve.";
  } else if (conducta === "papel_solo") {
    gravedad = "Grave (Criterio Administrativo)";
    articulo = "Art. 141.17 LOTT / Disp. Transitoria 8ª Ley 9/2025";
    cuantia = "401 a 600 €";
    explicacion = "Un papel manuscrito carente de código QR y URL no satisface la exigencia legal digital desde el 5-oct-2026. Se sanciona como no portar a bordo el documento exigible.";
    responsabilidad = "Cargador contractual y transportista efectivo.";
  }

  card.innerHTML = `
    <div>
      <span class="badge" style="background: ${gravedad.includes('Muy') ? '#7f1d1d' : gravedad.includes('Grave') ? 'var(--color-danger)' : 'var(--color-warning)'};">
        INFRACCIÓN ${gravedad.toUpperCase()}
      </span>
      <div class="sanction-amount">${cuantia}</div>
      <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--color-primary); font-weight: 700; margin-bottom: 12px;">
        ${articulo}
      </div>
      <p style="font-size: 0.9rem; margin-bottom: 12px;">${explicacion}</p>
    </div>

    <div style="background: var(--bg-surface); padding: 12px 14px; border-radius: var(--radius-md); border-left: 3px solid var(--color-primary); font-size: 0.84rem;">
      <strong>Distribución de responsabilidad:</strong>
      <p style="margin: 4px 0 0 0; color: var(--text-muted);">${responsabilidad}</p>
    </div>
  `;
}

// =============================================================================
// 14. VISTA FUENTES Y TEXTOS OFICIALES
// =============================================================================
function renderLegalSourcesView() {
  const main = document.getElementById("main-content-view");

  main.innerHTML = `
    <div class="block-detail-view">
      <header class="block-detail-header">
        <span class="block-badge">MARCO JURÍDICO</span>
        <h2>Textos Oficiales en los que se apoya el DeCA</h2>
        <p class="block-lead">Relación completa de la normativa europea y estatal consolidada utilizada para la elaboración del manual.</p>
      </header>

      <div style="display: flex; flex-direction: column; gap: 14px;">
        ${DECA_DATA.textosOficiales.map(t => `
          <div style="background: var(--bg-subtle); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 18px; display: flex; flex-direction: column; gap: 6px;">
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <strong style="font-size: 1.05rem; color: var(--text-main);">${t.norma}</strong>
              <button class="btn-secondary btn-sm" onclick="copyToClipboard('${t.norma}: ${t.detalle}')">Copiar cita</button>
            </div>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">${t.detalle}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// =============================================================================
// 15. VISTA CRITERIOS FAQ DEL MINISTERIO
// =============================================================================
function renderFaqNotesView() {
  const main = document.getElementById("main-content-view");

  const faqs = [
    {
      q: "¿El DeCA es una aplicación oficial o plataforma informática del Ministerio de Transportes?",
      a: "No. El Ministerio no dispone de ninguna plataforma de software central ni existe registro previo en ningún sitio oficial. Cada empresa transportista o cargadora debe proveerse de su propia aplicación informática o contratar un proveedor tecnológico privado."
    },
    {
      q: "¿Es obligatoria la firma electrónica en un DeCA ordinario?",
      a: "No. El DeCA es plenamente válido sin firmar. La firma solo se exige si el documento se utiliza también como carta de porte o contrato mercantil de transporte."
    },
    {
      q: "¿Se exige certificado digital cualificado a los conductores para la firma avanzada?",
      a: "No. Según la FAQ oficial del Ministerio, la firma electrónica avanzada (AdES) puede realizarse mediante mecanismos sencillos como códigos OTP vía SMS o firma biométrica en pantalla táctil, sin requerir la instalación de certificados digitales en los dispositivos móviles de los conductores."
    },
    {
      q: "¿Qué ocurre con el papel desde el 5 de octubre de 2026?",
      a: "El formato digital es obligatorio. No obstante, el conductor puede llevar a bordo una copia impresa en papel del DeCA SIEMPRE que contenga el código QR legible. Las anotaciones manuscritas sobre esa copia no tienen validez legal."
    },
    {
      q: "¿Quién debe conservar el DeCA durante 1 año?",
      a: "Ambas partes: el cargador contractual y el transportista efectivo. Puede conservarse en un repositorio común, en servidores independientes de cada empresa o mediante una plataforma de custodia habilitada."
    }
  ];

  main.innerHTML = `
    <div class="block-detail-view">
      <header class="block-detail-header">
        <span class="block-badge">CRITERIOS OFICIALES</span>
        <h2>Preguntas Frecuentes (FAQ) del Ministerio</h2>
        <p class="block-lead">Criterios interpretativos emitidos por el Ministerio de Transportes y Movilidad Sostenible (carácter meramente orientativo sin efectos normativos).</p>
      </header>

      <div style="display: flex; flex-direction: column; gap: 16px;">
        ${faqs.map((f, i) => `
          <div style="background: var(--bg-subtle); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 20px;">
            <h5 style="font-size: 1.05rem; font-weight: 700; color: var(--color-primary); margin-bottom: 8px;">
              ${i + 1}. ${f.q}
            </h5>
            <p style="font-size: 0.92rem; line-height: 1.6; margin: 0; color: var(--text-main);">${f.a}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// =============================================================================
// 16. MOTOR DE BÚSQUEDA GLOBAL EN TIEMPO REAL
// =============================================================================
function executeSearch(query) {
  const q = query.toLowerCase();
  const feedbackBar = document.getElementById("search-feedback-bar");
  const termDisplay = document.getElementById("search-term-display");
  const countBadge = document.getElementById("search-count-badge");
  const main = document.getElementById("main-content-view");

  feedbackBar.classList.remove("hidden");
  termDisplay.textContent = `"${query}"`;

  // Buscar en bloques, secciones y textos oficiales
  const results = [];

  DECA_DATA.bloques.forEach(b => {
    // Coincidencia en título o lead
    if (b.titulo.toLowerCase().includes(q) || b.lead.toLowerCase().includes(q)) {
      results.push({
        tipo: "bloque",
        bloqueId: b.id,
        titulo: `Bloque ${b.numero}: ${b.titulo}`,
        extracto: b.lead,
        bloqueNumero: b.numero
      });
    }

    // Coincidencia en secciones
    b.secciones.forEach(s => {
      let matchText = "";
      if (s.subtitulo && s.subtitulo.toLowerCase().includes(q)) {
        matchText = s.subtitulo;
      } else {
        const str = JSON.stringify(s).toLowerCase();
        if (str.includes(q)) {
          matchText = s.subtitulo || "Sección del Bloque";
        }
      }

      if (matchText) {
        results.push({
          tipo: "seccion",
          bloqueId: b.id,
          titulo: `${b.titulo} ➔ ${s.subtitulo}`,
          extracto: `Encontrado en sección temática del Bloque ${b.numero}`,
          bloqueNumero: b.numero
        });
      }
    });
  });

  // Coincidencias en textos legales
  DECA_DATA.textosOficiales.forEach(t => {
    if (t.norma.toLowerCase().includes(q) || t.detalle.toLowerCase().includes(q)) {
      results.push({
        tipo: "norma",
        bloqueId: "bloque-8",
        titulo: `Texto Oficial: ${t.norma}`,
        extracto: t.detalle,
        bloqueNumero: 8
      });
    }
  });

  countBadge.textContent = `${results.length} coincidencias`;

  AppState.currentView = "search-results";
  updateBreadcrumbs("search-results");

  if (results.length === 0) {
    main.innerHTML = `
      <div style="text-align: center; padding: 60px 20px;">
        <div style="font-size: 3rem; margin-bottom: 12px;">🔍</div>
        <h3 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 8px;">No se encontraron resultados</h3>
        <p style="color: var(--text-muted); max-width: 480px; margin: 0 auto 20px auto;">
          No hay coincidencias exactas para "${query}". Prueba con términos como <em>"ADR", "LOTT", "art. 6", "reincidencia", "plazos" o "firma"</em>.
        </p>
        <button class="btn-secondary btn-sm" onclick="resetSearch()">Restablecer búsqueda</button>
      </div>
    `;
    return;
  }

  main.innerHTML = `
    <div style="margin-bottom: 24px;">
      <h3 style="font-size: 1.3rem; font-weight: 800;">Resultados de la búsqueda (${results.length})</h3>
    </div>
    <div style="display: flex; flex-direction: column; gap: 14px;">
      ${results.map(r => `
        <div class="block-card" style="cursor: pointer;" onclick="routeView('block-detail', '${r.bloqueId}')">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <span class="block-badge">Bloque ${r.bloqueNumero}</span>
            <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-primary); font-weight: 700;">${r.tipo}</span>
          </div>
          <h4 style="margin-bottom: 6px;">${highlightTerm(r.titulo, query)}</h4>
          <p class="block-card-desc" style="margin: 0;">${highlightTerm(r.extracto, query)}</p>
        </div>
      `).join('')}
    </div>
  `;
}

function highlightTerm(text, query) {
  if (!query || !text) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, `<mark>$1</mark>`);
}

// =============================================================================
// 17. SISTEMA DE FAVORITOS (MARCADORES LOCALES)
// =============================================================================
function toggleFavorite(blockId, event) {
  if (event) event.stopPropagation();

  const idx = AppState.favorites.indexOf(blockId);
  if (idx > -1) {
    AppState.favorites.splice(idx, 1);
    showToast("Bloque eliminado de favoritos");
  } else {
    AppState.favorites.push(blockId);
    showToast("Bloque guardado en favoritos ⭐");
  }

  localStorage.setItem("deca_favorites", JSON.stringify(AppState.favorites));
  updateFavoritesBadge();

  if (AppState.currentView === "dashboard") {
    renderDashboardView();
  } else if (AppState.currentView === "block-detail") {
    renderBlockDetailView(blockId);
  }
}

function updateFavoritesBadge() {
  const badge = document.getElementById("favorites-count-badge");
  if (!badge) return;

  const count = AppState.favorites.length;
  badge.textContent = count;
  if (count > 0) {
    badge.classList.remove("hidden");
  } else {
    badge.classList.add("hidden");
  }
}

function showFavoritesModal() {
  const favBlocks = DECA_DATA.bloques.filter(b => AppState.favorites.includes(b.id));

  let bodyHtml = "";
  if (favBlocks.length === 0) {
    bodyHtml = `
      <div style="text-align: center; padding: 20px;">
        <p style="color: var(--text-muted);">No has guardado ningún bloque como favorito todavía.</p>
        <p style="font-size: 0.85rem; color: var(--text-subtle); margin-top: 6px;">Pulsa en la estrella de cualquier bloque para fijarlo aquí.</p>
      </div>
    `;
  } else {
    bodyHtml = `
      <div style="display: flex; flex-direction: column; gap: 10px;">
        ${favBlocks.map(b => `
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; background: var(--bg-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
            <div>
              <strong>Bloque ${b.numero}: ${b.titulo}</strong>
              <div style="font-size: 0.8rem; color: var(--text-muted);">${b.tags.join(' · ')}</div>
            </div>
            <button class="btn-primary btn-sm" onclick="closeModal(); routeView('block-detail', '${b.id}')">Ver →</button>
          </div>
        `).join('')}
      </div>
    `;
  }

  openModal("Bloques Guardados / Favoritos ⭐", bodyHtml);
}

// =============================================================================
// 18. MODAL Y UTILIDADES DE PORTAPAPELES / TOAST
// =============================================================================
function openModal(title, bodyHtml) {
  const modal = document.getElementById("app-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");

  if (!modal || !modalTitle || !modalBody) return;

  modalTitle.textContent = title;
  modalBody.innerHTML = bodyHtml;
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  const modal = document.getElementById("app-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
  }
}

function copyBlockCite(blockId) {
  const block = DECA_DATA.bloques.find(b => b.id === blockId);
  if (!block) return;

  const cite = `${block.titulo} — Manual DeCA Oficial (5-oct-2026). Referencias normativas: Orden FOM/2861/2012, Ley 9/2025 y Resolución de 5-jun-2026.`;
  copyToClipboard(cite);
}

function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast("Texto copiado al portapapeles 📋");
    }).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast("Texto copiado al portapapeles 📋");
  } catch (err) {
    showToast("No se pudo copiar automáticamente");
  }
  document.body.removeChild(textArea);
}

function showToast(msg) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>ℹ️</span> <span>${msg}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 200ms ease";
    setTimeout(() => toast.remove(), 200);
  }, 2800);
}
