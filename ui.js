import { menu, agregarPlatoDemo } from "./menu.js";
import { buscarPlatoPorNombre, filtrarPlatosStockBajo, obtenerResumenMenu, ErrorNegocio } from "./operaciones.js";
import { contarPlatos } from "./operaciones.js";
import { venderPlatoAsync } from "./operaciones.js";

// 2) FUNCIÓN: renderizar (mostrar) el menú en pantalla
export function renderMenu() {
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

//PARTE C
export function renderLista(titulo, listaDeTextos) {
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


export function conectarEventos() {
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

    document.getElementById("btnVender").addEventListener("click", async () => {


        let nombre = document.getElementById("inputBuscar").value
        let cantidad = document.getElementById("inputCantidad").value
        try {
            mostrarMensaje("espera", "Procesando pedido...");
            const mensaje = await venderPlatoAsync(nombre, cantidad);

            mostrarMensaje("exito", mensaje);
        } catch (error) {
            if (error.name === "ErrorNegocio") {
                mostrarMensaje("error", "Advertencia: " + error.message);
            } else {
                mostrarMensaje("error", "Error del sistema: " + error.message);

            }
        }


    });
    function mostrarMensaje(estado, texto) {
        const contenedor = document.getElementById("output");
        renderMenu();
        contenedor.innerHTML += `<p class="${estado}">${texto}</p>`
    }
}