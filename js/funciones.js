$(document).ready(function () {

    $("#formulario").submit(function (e) {

        let nombre = $("#nombre").val().trim();
        let apellido = $("#apellido").val().trim();
        let email = $("#email").val().trim();
        let telefono = $("#telefono").val().trim();

        if (nombre === "") {
            alert("El nombre no puede estar vacío.");
            e.preventDefault();
            return;
        }
        if (/\d/.test(nombre)) {
            alert("El nombre no puede contener números.");
            e.preventDefault();
            return;
        }

        if (apellido === "") {
            alert("El apellido no puede estar vacío.");
            e.preventDefault();
            return;
        }
        if (/\d/.test(apellido)) {
            alert("El apellido no puede contener números.");
            e.preventDefault();
            return;
        }

        let emailLower = email.toLowerCase();
        if (!emailLower.endsWith("@gmail.com") && !emailLower.endsWith("@outlook.com")) {
            alert("El correo debe terminar en @gmail.com o @outlook.com.");
            e.preventDefault();
            return;
        }
        let telefonoLimpio = telefono.replaceAll(" ", "").replace("+", "");
        if (telefonoLimpio === "" || isNaN(telefonoLimpio)) {
            alert("El teléfono solo debe contener números.");
            e.preventDefault();
            return;
        }

        alert("Datos personales validados correctamente.");

    });

});