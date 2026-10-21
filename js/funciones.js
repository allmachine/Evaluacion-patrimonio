$(document).ready(function () {

    // ---- Métodos personalizados ----
    $.validator.addMethod("soloLetras", function (value, element) {
        return this.optional(element) || /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s'-]+$/.test(value);
    }, "Solo se permiten letras, sin números.");

    $.validator.addMethod("correoPermitido", function (value, element) {
        return this.optional(element) || /^[^\s@]+@(gmail|outlook)\.com$/i.test(value);
    }, "El correo debe terminar en @gmail.com o @outlook.com.");

    $.validator.addMethod("telefonoValido", function (value, element) {
        let limpio = value.replace(/[\s+]/g, "");
        return this.optional(element) || /^\d{9,11}$/.test(limpio);
    }, "El teléfono debe tener entre 9 y 11 dígitos.");

    $.validator.addMethod("maxTamano", function (value, element, mb) {
        if (this.optional(element)) return true;
        return element.files[0].size <= mb * 1024 * 1024;
    }, $.validator.format("El archivo no puede superar los {0} MB."));

    // ---- Validación del formulario ----
    $("#formulario").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 3,
                maxlength: 30,
                soloLetras: true,
                normalizer: function (v) { return $.trim(v); }
            },
            apellido: {
                required: true,
                minlength: 3,
                maxlength: 30,
                soloLetras: true,
                normalizer: function (v) { return $.trim(v); }
            },
            email: {
                required: true,
                email: true,
                correoPermitido: true
            },
            telefono: {
                required: true,
                telefonoValido: true
            },
            fecha: { required: true },
            Region: { required: true },
            estudios: { required: true },
            "Carrera-int": { required: true },
            curriculum: { maxTamano: 5 }
        },
        messages: {
            nombre: {
                required: "El nombre no puede estar vacío.",
                minlength: "El nombre debe tener al menos 3 caracteres."
            },
            apellido: {
                required: "El apellido no puede estar vacío.",
                minlength: "El apellido debe tener al menos 3 caracteres."
            },
            estudios: "Selecciona tu nivel educacional.",
            Region: "Selecciona una región.",
            "Carrera-int": "Selecciona una carrera."
        },
        submitHandler: function (form) {
            alert("Datos validados correctamente.");
            form.submit();
        }
    });

});