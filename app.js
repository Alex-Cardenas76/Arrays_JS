// 1) VARIABLES + OBJETOS + ARRAYS
let menu = [
    { nombre: "Arroz con pollo", precio: 12, stock: 5 },
    { nombre: "Lomo saltado", precio: 18, stock: 3 },
    { nombre: "Sopa", precio: 8, stock: 10 },
    { nombre: "ceviche", precio: 10, stock: 6 },
    { nombre: "chicharron", precio: 15, stock: 4 }

];

function ContarPlatos(menux) {
    let total = 0;
    total = menux.length;
    return total;
}

// 2) FUNCIÓN: renderizar (mostrar) el menú en pantalla
function renderMenu() {
    const output = document.getElementById("output");
    output.innerHTML = ""; // limpiar

    let total = ContarPlatos(menu)
    let html = "<h1>Platos disponibles:" + total + "</h1>"

    // crear una lista HTML simple
    html += "<ul>";

    for (let i = 0; i < menu.length; i++) {
        const plato = menu[i];
        html += `<li>${plato.nombre} — S/ ${plato.precio} — Stock: ${plato.stock}</li>`;
        let precio = 1
        precio += 2
    }

    html += "</ul>";
    output.innerHTML = html;
}

// 3) FUNCIÓN: agregar un plato demo al menú
function agregarPlatoDemo() {
    const nuevoPlato = { nombre: "Lomo Saltado", precio: 20, stock: 4 };
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



ContarPlatos(menu)