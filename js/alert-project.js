function mostrarAlerta() {
  const modal = document.getElementById("miModal");
  modal.style.display = "block";
  setTimeout(cerrarAlerta, 3000); // Cierra la alerta después de 2000 milisegundos (2 segundos)
}

// Función para cerrar la alerta personalizada
function cerrarAlerta() {
  const modal = document.getElementById("miModal");
  modal.style.display = "none";
}
