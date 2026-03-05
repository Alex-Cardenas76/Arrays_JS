let menu = [
    { nombre: "Arroz con pollo", precio: 12, stock: 7 },
    { nombre: "Lomo saltado", precio: 18, stock: 3 },
    { nombre: "Sopa", precio: 8, stock: 9 },
    // 2 platos mas
    { nombre: "chaufa", precio: 12, stock: 7 },
    { nombre: "Aji de gallina", precio: 11, stock: 3 }

];

function agregarPlatoDemo() {
    const nuevoPlato = { nombre: "Tallarin saltado", precio: 15, stock: 2 };
    menu.push(nuevoPlato);
}

function actualizarStock(nombre, nuevoStock) { // checkear
 for (let i = 0; i < menu.length; i++) {
   if (menu[i].nombre.toLowerCase() === nombre.toLowerCase()) {
     menu[i].stock = nuevoStock;
     return true;
   }
 }
 return false;
}
