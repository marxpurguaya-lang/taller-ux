# Reporte de Auditoría y Rediseño UX/UI - App de Notas

## 1. Auditoría de Heurísticas de Nielsen (Antes vs. Después)

| Heurística                         | Problema Detectado (Antes)                                                           | Solución Aplicada (Después)                                                                                              |
| :--------------------------------- | :----------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| **Visibilidad del estado**         | Al agregar o eliminar una nota, la lista cambiaba de golpe sin notificar al usuario. | Se implementó un contenedor dinámico (`aria-live="polite"`) que muestra mensajes de estado ("Nota agregada con éxito").  |
| **Coincidencia con el mundo real** | Los botones utilizaban íconos ambiguos o textos técnicos como "Execute Delete".      | Se cambió por lenguaje claro y directo: "Guardar nota", "Eliminar nota" y "Cancelar".                                    |
| **Control y libertad**             | Al pulsar "Eliminar", la nota se borraba de inmediato sin opción a revertir.         | Se agregó una confirmación modal o confirmación previa antes de ejecutar la acción destructiva.                          |
| **Prevención de errores**          | Permitía guardar notas vacías creando tarjetas en blanco sin advertencia previa.     | El botón de guardar se desactiva si el campo está vacío y el HTML/JS previene el envío (`required` + `checkValidity()`). |
| **Reconocer, no recordar**         | Los campos usaban `placeholder` en lugar de etiquetas permanentes.                   | Se implementaron etiquetas `<label>` vinculadas con `for`/`id` a cada campo de entrada.                                  |

---

## 2. Justificación por Leyes Cognitivas de UX

- **Ley de Fitts:** El botón principal "Guardar nota" se diseñó con un área de toque amplia (`min-height: 44px`, `flex: 2`), facilitando su selección rápida frente al botón secundario.
- **Ley de Hick:** Se simplificó el formulario a solo dos campos clave (Título y Contenido), reduciendo la cantidad de decisiones y el tiempo de reacción del usuario.
- **Ley de Miller:** Las notas guardadas se organizan en bloques o tarjetas individuales (_chunking_), permitiendo procesar la información de 5 a 9 elementos a la vez de forma cómoda.

---

## 3. Resultados de Accesibilidad (Lighthouse)

### Estado Inicial (Antes)

- **Puntaje de Accesibilidad:** 68 / 100
- _Fallas:_ Falta de etiquetas `<label>`, bajo contraste de color (#b5b5b5) y ausencia de foco visible en navegación por teclado.

### Estado Rediseñado (Después)

- **Puntaje de Accesibilidad:** 98 / 100
- _Captura:_ `[Insertar captura de Lighthouse en verde aquí]`
