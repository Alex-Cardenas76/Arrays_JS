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