# Restaurante Don Pollo 🍗

¡Bienvenido al sistema del Restaurante Don Pollo! Este documento explica de manera sencilla cómo está organizado el código del proyecto web para que cualquier persona pueda entenderlo fácilmente.

## 📂 Archivos del Proyecto

El proyecto está dividido en varios archivos pequeños, cada uno con una tarea muy específica, como el personal en un restaurante real:

- **`index.html`**: Es el "Salón y Menú" visual. Es la página web en sí. Aquí están todos los elementos que ves en la pantalla: el título principal, los botones (como "Vender" o "Mostrar menú"), y el espacio donde aparecen los resultados.

- **`main.js`**: Es el "Encendedor" o interruptor principal. Su único trabajo es encender la aplicación cuando abres la página web, asegurando que todos los botones y listas estén listos para funcionar.

- **`menu.js`**: Es la "Despensa" (Datos). Aquí guardamos la información inicial de todos nuestros platos, con sus precios y la cantidad que tenemos disponible en ese momento (stock).

- **`operaciones.js`**: Es la "Calculadora" o "Administración". Se encarga de hacer el trabajo lógico: buscar si un plato existe, revisar cuáles platos están por agotarse, calcular el resumen general del menú y registrar las ventas para descontar stock cuando un cliente compra.

- **`ui.js`**: Es el "Decorador y Conectador" (Interfaz de Usuario). Tiene dos trabajos principales: primero, tomar la información de los platos y mostrarla de forma presentable en la pantalla (con colores para platos agotados o bajos de stock); segundo, conectar nuestros botones de la pantalla con las operaciones matemáticas.

---

**¿Por qué lo separamos así?**
Si algún día queremos cambiar el diseño visual, solo tocamos `ui.js` o `index.html`. Si los precios cambian, vamos a `menu.js`. ¡Esto mantiene todo increíblemente ordenado y fácil de mantener!
