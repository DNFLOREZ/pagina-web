function resetearDatos() {
    const formulario = document.forms["miniformulario"]; // Selecciona el formulario por su nombre
    formulario.reset(); // Resetea todos los campos del formulario

    // Opcional: limpia cualquier mensaje de error o estilos adicionales
    resetearErrores();
}

function resetearErrores() {
    const errores = document.querySelectorAll("small"); // Selecciona todos los mensajes de error (si existen)
    errores.forEach(error => error.remove()); // Elimina los mensajes de error

    const campos = document.querySelectorAll("input, select, textarea"); // Selecciona todos los campos
    campos.forEach(campo => {
        campo.style.border = "1px solid #ccc"; // Restablece los bordes al estado inicial
    });
}
