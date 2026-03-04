// 1) VARIABLES + OBJETOS + ARRAYS
let menu = [
    { nombre: "Arroz con pollo", precio: 12, stock: 2 },
    { nombre: "Lomo saltado", precio: 18, stock: 3 },
    { nombre: "Sopa", precio: 8, stock: 1 },
    // 2 platos mas
    { nombre: "chaufa", precio: 12, stock: 7 },
    { nombre: "Aji de gallina", precio: 11, stock: 6 }

];


function contarPlatos(array) {
    let total = 0;
    total = array.length;
    return total;
}

// 2) FUNCIÓN: renderizar (mostrar) el menú en pantalla
function renderMenu() {
    const output = document.getElementById("output");
    output.innerHTML = ""; // limpiar
    let html = "<h2>Total de platos en el menú: " + contarPlatos(menu) + "</h2>";


    // crear una lista HTML simple
    html += "<ul>";

    for (let i = 0; i < menu.length; i++) {
        const plato = menu[i];
        html += `<li>${plato.nombre} — S/ ${plato.precio} — Stock: ${plato.stock}</li>`;
    }

    html += "</ul>";
    output.innerHTML = html;
}

// 3) FUNCIÓN: agregar un plato demo al menú
function agregarPlatoDemo() {
    const nuevoPlato = { nombre: "Tallarin saltado", precio: 15, stock: 2 };
    menu.push(nuevoPlato);
}

// 4) EVENTOS: conectar botones con funciones
document.getElementById("btnMostrar").addEventListener("click", () => {
    renderMenu();
});

document.getElementById("btnAgregar").addEventListener("click", () => {
    agregarPlatoDemo();
    renderMenu();
});



// FUNCIONES DE BUSQUEDA
function buscarPlatoPorNombre() {
    let nombreP = document.getElementById("inputBuscar").value
    let resultado = menu.find(plato => plato.nombre === nombreP)
    if (resultado) {
        let html = "<p>" + resultado.nombre + " - S/ " + resultado.precio + " - Stock: " + resultado.stock + "</p>"
        document.getElementById("R_Busqueda").innerHTML = html;
    }
    else {
        let html = "<p>No encontrado</p>"
        document.getElementById("R_Busqueda").innerHTML = html;
    }
}

function filtrarPlatosStockBajo() {
    let html = menu.filter(plato => plato.stock <= 3)
    document.getElementById("R_StockBajo").innerHTML = "";
    for (let i = 0; i < html.length; i++) {
        let ray = "<p>" + html[i].nombre + " - S/ " + html[i].precio + " - Stock: " + html[i].stock + "</p>"
        document.getElementById("R_StockBajo").innerHTML += ray;

    }
}


function obtenerResumenMenu() {
    const resumen = document.getElementById("R_Resumen");
    resumen.innerHTML = ""; // limpiar

    // crear una lista HTML simple
    let html = "<ul>";
    let lajija = menu.map(plato => plato.nombre + " - S/ " + plato.precio)


    for (let i = 0; i < lajija.length; i++) {
        const plato = lajija[i];
        html += `<li>${plato}</li>`;
    }

    html += "</ul>";
    resumen.innerHTML = html;

}




