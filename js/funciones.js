$(document).ready(function () {

    $("#formulario").submit(function (e) {

        let nombre = $("#nombre").val().trim();
        let apellido = $("#apellido").val().trim();
        let email = $("#email").val().trim().toLowerCase();
        let telefono = $("#telefono").val().trim();

        if (nombre.length < 3 || /\d/.test(nombre)) {
            alert("El nombre debe tener al menos 3 caracteres y no contener números.");
            e.preventDefault();
            return;
        }

        if (apellido.length < 3 || /\d/.test(apellido)) {
            alert("El apellido debe tener al menos 3 caracteres y no contener números.");
            e.preventDefault();
            return;
        }

        if (!/^[^\s@]+@(gmail|outlook)\.com$/.test(email)) {
            alert("El correo debe ser válido y terminar en @gmail.com o @outlook.com.");
            e.preventDefault();
            return;
        }

        let telefonoLimpio = telefono.replace(/[\s+]/g, "");
        if (!/^\d{9,11}$/.test(telefonoLimpio)) {
            alert("El teléfono debe tener entre 9 y 11 dígitos.");
            e.preventDefault();
            return;
        }

        alert("Datos validados correctamente.");
    });
});