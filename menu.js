
// 1) VARIABLES + OBJETOS + ARRAYS
export let menu = [
    { nombre: "Arroz con pollo", precio: 12, stock: 7 },
    { nombre: "Lomo saltado", precio: 18, stock: 3 },
    { nombre: "Sopa", precio: 8, stock: 9 },
    // 2 platos mas
    { nombre: "chaufa", precio: 12, stock: 7 },
    { nombre: "Aji de gallina", precio: 11, stock: 3 }

];

// 3) FUNCIÓN: agregar un plato demo al menú
export function agregarPlatoDemo() {
    const nuevoPlato = { nombre: "Pollo a la brasa", precio: 20, stock: 4 };
    menu.push(nuevoPlato);
}

