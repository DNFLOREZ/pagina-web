function validarDatos() {
  // Obtener los campos del formulario
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const edad = document.getElementById("edad");
  const fecha = document.getElementById("fecha");
  const email = document.getElementById("email");
  const telefono = document.getElementById("telefono");
  const tipoTelefono = document.getElementById("tipo_telefono");
  const genero = document.querySelector('input[name="genero"]:checked');
  const mensaje = document.getElementById("mensaje");
  const autoriza = document.getElementById("autoriza");

  // Bandera para saber si hay errores
  let esValido = true;

  // Resetear estilos
  resetearErrores();

  // Validar campos requeridos
  if (!nombre.value.trim()) {
      mostrarError(nombre, "El nombre es obligatorio.");
      esValido = false;
  }
  if (!apellido.value.trim()) {
      mostrarError(apellido, "El apellido es obligatorio.");
      esValido = false;
  }
  if (!edad.value || edad.value < 10 || edad.value > 100) {
      mostrarError(edad, "La edad debe estar entre 10 y 100.");
      esValido = false;
  }
  if (!fecha.value) {
      mostrarError(fecha, "La fecha de nacimiento es obligatoria.");
      esValido = false;
  }
  if (!email.value.trim()) {
      mostrarError(email, "El correo electrónico es obligatorio.");
      esValido = false;
  }
  if (!telefono.value.trim() || !/^\d{7,}$/.test(telefono.value)) {
      mostrarError(telefono, "El número telefónico debe tener al menos 7 dígitos.");
      esValido = false;
  }
  if (!tipoTelefono.value) {
      mostrarError(tipoTelefono, "Debes seleccionar un tipo de teléfono.");
      esValido = false;
  }
  if (!genero) {
      alert("Debes seleccionar un género.");
      esValido = false;
  }
  if (!autoriza.checked) {
      alert("Debes aceptar el tratamiento de datos.");
      esValido = false;
  }

  return esValido; // Si no hay errores, permite el envío del formulario
}

function mostrarError(campo, mensaje) {
  campo.style.border = "2px solid red";
  const error = document.createElement("small");
  error.style.color = "red";
  error.textContent = mensaje;
  campo.parentElement.appendChild(error);
}

function resetearErrores() {
  const errores = document.querySelectorAll("small");
  errores.forEach(error => error.remove());

  const campos = document.querySelectorAll("input, select, textarea");
  campos.forEach(campo => {
      campo.style.border = "1px solid #ccc";
  });
}




