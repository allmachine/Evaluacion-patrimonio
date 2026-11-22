function mostrar(usuarios) {
    document.getElementById("lista").innerHTML = usuarios.map(u => `
        <tr>
            <td>${u.nombre}</td>
            <td>${u.gmail}</td>
            <td>${u["contraseña"]}</td>
        </tr>`).join("");
}

fetch("../json/datos.json")
    .then(res => res.json())
    .then(usuarios => mostrar(usuarios));