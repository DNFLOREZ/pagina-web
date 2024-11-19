document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", (event) => {
        // Validar los datos antes de enviar
        if (!validarDatos()) {
            event.preventDefault(); // Evita el envío si hay errores
            return;
        }

        // Muestra alerta de éxito
        alert("Formulario enviado correctamente. ¡Gracias por contactarnos!");
    });
});

function validarDatos() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const autoriza = document.getElementById("autoriza").checked;

    if (!nombre) {
        alert("El campo Nombre es obligatorio.");
        return false; // Evita el envío
    }

    if (!apellido) {
        alert("El campo Apellidos es obligatorio.");
        return false; // Evita el envío
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!email || !emailRegex.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false; // Evita el envío
    }

    if (!telefono || telefono.length < 7) {
        alert("El número de teléfono debe tener al menos 7 dígitos.");
        return false; // Evita el envío
    }

    if (!autoriza) {
        alert("Debe aceptar el tratamiento de datos.");
        return false; // Evita el envío
    }

    return true; // Si todo es correcto, permite el envío
}
