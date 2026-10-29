# Reporte de Auditoría y Rediseño UX/UI - App de Notas

Este documento registra la auditoría de usabilidad, accesibilidad y leyes cognitivas aplicada sobre la aplicación `app-notas`, detallando las mejoras respecto a la versión base.

---

## 1. Auditoría de las 5 Heurísticas de Nielsen

| Heurística                                | Problema Detectado (Antes)                                                     | Solución Aplicada (Después)                                                                                                  |
| :---------------------------------------- | :----------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| **1. Visibilidad del estado del sistema** | Al agregar o eliminar notas, la interfaz cambiaba sin notificar al usuario.    | Se añadió un área viva (`aria-live="polite"`) que despliega mensajes temporales de confirmación ("Nota agregada con éxito"). |
| **2. Coincidencia con el mundo real**     | Uso de etiquetas genéricas o textos ambiguos en los botones.                   | Se implementó lenguaje claro y directo: "Guardar nota", "Limpiar campos" y "Eliminar nota".                                  |
| **3. Control y libertad del usuario**     | La eliminación de notas era instantánea sin posibilidad de revertir la acción. | Se agregó una ventana de confirmación (`confirm()`) previa a la eliminación, permitiendo cancelar la acción destructiva.     |
| **4. Prevención de errores**              | El sistema permitía enviar notas en blanco, creando tarjetas vacías.           | Se aplicó validación previa en JS (`trim()`) y atributos HTML5 (`required`), bloqueando el envío si los campos están vacíos. |
| **5. Reconocer antes que recordar**       | Los campos dependían de placeholders invisibles al escribir.                   | Se estructuró cada campo con una etiqueta `<label>` permanente e identificadores vinculados (`for` / `id`).                  |

---

## 2. Aplicación de Leyes Cognitivas de UX

- **Ley de Fitts:** El botón principal "Guardar nota" se diseñó con una superficie de interacción amplia (`flex: 2`, `min-height: 44px`), facilitando un clic rápido y sin esfuerzo.
- **Ley de Hick:** Se redujo la cantidad de campos en el formulario a solo Título y Detalle, minimizando el tiempo de decisión del usuario para crear una nota.
- **Ley de Miller:** Las notas guardadas se agrupan en tarjetas independientes (_chunking_ visual), organizando la información en bloques digeribles.

---

## 3. Criterios de Accesibilidad (WCAG)

- **Etiquetas y estructura:** Cada campo `<input>` y `<textarea>` cuenta con su etiqueta `<label>` correspondiente.
- **Área táctil:** Todos los botones y campos interactivos cumplen con la altura mínima de `44px`.
- **Contraste de color:** Combinación de texto `#1f2933` sobre fondo blanco `#ffffff` (ratio superior a 14:1, superando el mínimo 4.5:1 de WCAG AA).
- **Navegación por teclado:** Implementación de `:focus-visible` con un borde naranja resplandeciente de 3px para resaltar el elemento enfocado al presionar `Tab`.

---

### Estado Inicial (Antes del Rediseño)

- **Puntaje de Accesibilidad:** **78 / 100**

![Lighthouse Antes](img/02-lighthouse-antes.png)

---

### Estado Final (Después del Rediseño)

- **Puntaje de Accesibilidad:** **100 / 100**

![Lighthouse Después](img/03-lighthouse-despues.png)
