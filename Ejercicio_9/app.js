// 9. Arreglo de objetos (integración): Cree un arreglo llamado productos que contenga tres objetos.
// Cada objeto debe representar un producto con propiedades como nombre, precio y disponibilidad.
// Recorra el arreglo y muestre solo el nombre de cada producto.

// Arreglo de objetos que representa diferentes productos con sus propiedades: nombre, precio y disponibilidad.
const productos = [
    {
        nombre: "Laptop",
        precio: 2000000,
        disponibilidad: true
    },
    {
        nombre: "Smartphone",
        precio: 900000,
        disponibilidad: false
    },
    {
        nombre: "Tablet",
        precio: 500000,
        disponibilidad: true
    }
];

// Recorre el arreglo de productos y muestra solo el nombre de cada producto utilizando el método forEach.
productos.forEach(producto => {
    console.log(producto.nombre);
});