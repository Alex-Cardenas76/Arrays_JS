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
    let newMensaje = { ok: true, mensaje: "" }
    let plato = menu.find(plato => plato.nombre === nombre)

    if (plato && (plato.stock) >= (cantidad)) {
        if (cantidad > 0) {
            plato.stock = plato.stock - cantidad
            newMensaje.ok = true;
            newMensaje.mensaje = "Venta realizada exitosamente"

        } else {
            newMensaje.ok = false;
            newMensaje.mensaje = "Cantidad invalidaa"
        }

    }
    else if (plato && plato.stock < cantidad) {
        newMensaje.ok = false;
        newMensaje.mensaje = "Platos insuficientes disponibles"

    } else {
        newMensaje.ok = false;
        newMensaje.mensaje = "Plato no existe"
    }

    return newMensaje

}//////
/*La B */
export async function venderPlatoAsync(nombre, cantidad) {
    const resultado = venderPlato(nombre, cantidad);

    if (!resultado.ok) {
        throw new Error(resultado.mensaje);
    }
    const respuesta = await simularRespuestaServidor(resultado.mensaje);
    return respuesta;
}




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

/*La A */
export function simularRespuestaServidor(respuesta) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const falla = Math.random() < 0.3;
            if (falla) {
                reject("Error del servidor simulado.");
            } else {
                resolve(respuesta);
            }
        }, 2000);
    });
}

