document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario-notas");
  const tituloInput = document.getElementById("titulo-nota");
  const contenidoInput = document.getElementById("contenido-nota");
  const mensaje = document.getElementById("mensaje");
  const listaNotas = document.getElementById("lista-notas");

  function mostrarNotificacion(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.className = "mensaje visible " + tipo;
    setTimeout(() => {
      mensaje.className = "mensaje";
    }, 3000);
  }

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    // Prevención de errores: No permite guardar si los campos están vacíos
    if (!tituloInput.value.trim() || !contenidoInput.value.trim()) {
      mostrarNotificacion(
        "Completa todos los campos antes de guardar la nota.",
        "error",
      );
      if (!tituloInput.value.trim()) tituloInput.focus();
      else contenidoInput.focus();
      return;
    }

    // Creación de elemento visual
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta-nota";
    tarjeta.innerHTML = `
      <h3>${tituloInput.value.trim()}</h3>
      <p>${contenidoInput.value.trim()}</p>
      <button class="btn btn-eliminar">Eliminar nota</button>
    `;

    // Acción destructiva con opción de cancelación
    const btnEliminar = tarjeta.querySelector(".btn-eliminar");
    btnEliminar.addEventListener("click", function () {
      if (confirm("¿Estás seguro de que deseas eliminar esta nota?")) {
        tarjeta.remove();
        mostrarNotificacion("Nota eliminada con éxito.", "exito");
      } else {
        mostrarNotificacion("Eliminación cancelada.", "error");
      }
    });

    listaNotas.appendChild(tarjeta);
    mostrarNotificacion("Nota agregada con éxito.", "exito");
    formulario.reset();
  });
});
