import { menu } from "./menu.js";
import { renderLista } from "./ui.js";

// FUNCIONES DE BUSQUEDA
export function buscarPlatoPorNombre() {
    let nombreP = document.getElementById("inputBuscar").value
    let resultado = menu.find(plato => plato.nombre === nombreP)
    if (resultado) {
        //sin map
        let resultadoTexto = [resultado.nombre + " - S/ " + resultado.precio + " - Stock: " + resultado.stock]
        renderLista("Plato encontrado", resultadoTexto)
    }
    else {
        let html = "<p>No encontrado</p>"
        document.getElementById("output").innerHTML = html;
    }
}

export function filtrarPlatosStockBajo() {
    let html = menu.filter(plato => plato.stock <= 3)
    let erre = html.map(plato => plato.nombre + " - S/ " + plato.precio + " - Stock: " + plato.stock)
    renderLista("Platos con stock bajo", erre)


}


export function obtenerResumenMenu() {
    let lajija = menu.map(plato => plato.nombre + " - S/ " + plato.precio)
    renderLista("Resumen del Menu", lajija)

}


export function venderPlato(nombre, cantidad) {
    let mensaje = ""
    let plato = menu.find(plato => plato.nombre === nombre)

    if (plato && (plato.stock) >= (cantidad)) {
        if (cantidad > 0) {
            plato.stock = plato.stock - cantidad
            mensaje = "Venta realizada exitosamente"

        } else { mensaje = "Cantidad invalida" }

    }
    else if (plato && plato.stock < cantidad) {
        mensaje = "Platos insuficientes disponibles"

    } else { mensaje = "Plato no existe" }

    return mensaje

}//////

export function verificarEstadoGeneral() {
    let cagotado = 0
    let cstockbajo = 0
    let cnormal = 0
    for (let i = 0; i < menu.length; i++) {
        const plato = menu[i];

        if (plato.stock === 0) { cagotado++ }

        else if (plato.stock <= 3) { cstockbajo++ }

        else { cnormal++ }
    }

    let mensaje = "";

    if (cagotado > 0) {
        mensaje = "Hay platos agotados";
    } else if (cstockbajo > 0) {
        mensaje = "Hay platos con stock bajo";
    } else {
        mensaje = "Todo disponible";
    }

    return mensaje;
}
console.log(verificarEstadoGeneral())

export function contarPlatos(array) {
    let total = 0;
    total = array.length;
    return total;
}