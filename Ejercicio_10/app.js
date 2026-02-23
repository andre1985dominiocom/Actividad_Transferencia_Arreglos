// 10. Clasificación por tipo de estructura: Observe las siguientes situaciones y decida si debe usar arreglo u objeto.
// Justifique con una frase, luego codifique su respuesta con un ejemplo.
// a. Lista de colores favoritos.
// b. Información completa de un estudiante.
// c. Precios de diferentes camisetas.
// d. Descripción de un computador portátil.

// a. Lista de colores favoritos: Se usa un arreglo porque es una colección de elementos del mismo tipo (colores)
// y no requiere una estructura de clave-valor.

const coloresFavoritos = ["rojo", "azul", "verde", "amarillo"];
console.log("Colores favoritos:", coloresFavoritos);

// b. Información completa de un estudiante: se usa un objeto porque se necesita una estructura de clave-valor
// para almacenar diferentes atributos del estudiante (nombre, edad, grado, etc.).

const estudiante = {
    nombre: "Juan Pérez",
    edad: 20,
    grado: "Segundo semestre",
    carrera: "Ingeniería de Sistemas"
};
console.log("Información del estudiante:", estudiante);

// c.  Precios de diferentes camisetas: se usa un objeto porque se necesita una estructura de clave-valor
// para asociar cada camiseta con su precio.

const preciosCamisetas = {
    camiseta1: 15000,
    camiseta2: 20000,
    camiseta3: 25000
};
console.log("Precios de camisetas:", preciosCamisetas);

// d. Descripción de un computador portátil: se usa un objeto porque se necesita una estructura de clave-valor
// para almacenar diferentes atributos del computador (marca, modelo, procesador, etc.).

const laptop = {
    marca: "Dell",
    modelo: "XPS 13",
    procesador: "Intel Core i7",
    ram: "16GB",
    almacenamiento: "512GB SSD"
};
console.log("Descripción del computador portátil:", laptop);