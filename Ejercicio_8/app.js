// 8. Registro de un libro: Cree un objeto llamado libro con las propiedades:
// título, autor, número de páginas y género.
// Luego imprima un mensaje descriptivo usando estas propiedades, por ejemplo:
// "El libro '___' del autor ___ pertenece al género ___."

// Creación del objeto libro con las propiedades especificadas
const libro = {
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    paginas: 412,
    genero: "Novela"
};

// Impresión del mensaje descriptivo utilizando las propiedades del objeto libro
console.log(`El libro '${libro.titulo}'`);
console.log(`del autor ${libro.autor}`);
console.log(`tiene ${libro.paginas} páginas y`);
console.log(`pertenece al género ${libro.genero}`);