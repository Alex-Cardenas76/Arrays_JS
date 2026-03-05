// 1) VARIABLES + OBJETOS + ARRAYS
let menu = [
    { nombre: "Arroz con pollo", precio: 12, stock: 7 },
    { nombre: "Lomo saltado", precio: 18, stock: 3 },
    { nombre: "Sopa", precio: 8, stock: 9 },
    // 2 platos mas
    { nombre: "chaufa", precio: 12, stock: 7 },
    { nombre: "Aji de gallina", precio: 11, stock: 0 }

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
        let estado = " "
        if (plato.stock == 0) {
            estado = "agotado";

        } else if (plato.stock <= 3) {
            estado = "bajo";

        } else {
            estado = "normal";

        }
        html += `<li class="${estado}">${plato.nombre} — S/ ${plato.precio} — Stock: ${plato.stock} - ${estado}</li>`;
    }

    html += "</ul>";
    output.innerHTML = html;
    return html;
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

document.getElementById("btnResumen").addEventListener("click", () => {
    obtenerResumenMenu();

});

document.getElementById("btnBuscar").addEventListener("click", () => {
    buscarPlatoPorNombre();

});

document.getElementById("btnStockBajo").addEventListener("click", () => {
    filtrarPlatosStockBajo();

});

document.getElementById("btnVender").addEventListener("click", () => {
    let nombre = document.getElementById("inputBuscar").value
    let cantidad = document.getElementById("inputCantidad").value
    let mensaje = venderPlato(nombre, cantidad);
    let menu = renderMenu();
    document.getElementById("output").innerHTML = menu + mensaje;


});





// FUNCIONES DE BUSQUEDA
function buscarPlatoPorNombre() {
    let nombreP = document.getElementById("inputBuscar").value
    let resultado = menu.find(plato => plato.nombre === nombreP)
    if (resultado) {
        //sin map
        let resultadoTexto = [resultado.nombre + " - S/ " + resultado.precio + " - Stock: " + resultado.stock]
        renderLista("Plato encontrado", resultadoTexto)
    }
    else {
        let html = "<p>No encontrado</p>"
        document.getElementById("R_Busqueda").innerHTML = html;
    }
}

function filtrarPlatosStockBajo() {
    let html = menu.filter(plato => plato.stock <= 3)
    let erre = html.map(plato => plato.nombre + " - S/ " + plato.precio + " - Stock: " + plato.stock)
    renderLista("Platos con stock bajo", erre)


}


function obtenerResumenMenu() {
    let lajija = menu.map(plato => plato.nombre + " - S/ " + plato.precio)
    renderLista("Resumen del Menu", lajija)

}


//PARTE C
function renderLista(titulo, listaDeTextos) {
    const contenedor = document.getElementById("output");
    contenedor.innerHTML = "";

    let html = "<h2>" + titulo + "</h2>";
    html += "<ul>";
    for (let i = 0; i < listaDeTextos.length; i++) {
        html += "<li>" + listaDeTextos[i] + "</li>";
    }
    html += "</ul>";
    contenedor.innerHTML = html;
}

//USANDO EL CEREBRO


function venderPlato(nombre, cantidad) {
    let mensaje = ""
    let plato = menu.find(plato => plato.nombre === nombre)

    if (plato && (plato.stock) >= (cantidad) && cantidad > 0) {
        plato.stock = plato.stock - cantidad
        mensaje = "Venta realizada exitosamente"
    } else {
        mensaje = "No hay stock suficiente"
    }
    return mensaje

}
