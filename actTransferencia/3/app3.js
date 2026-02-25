import ls from 'prompt-sync';
const cs = ls();

// se crea el arreglo de notas
let notas = [5.5, 5.0, 3.0, 2.5, 3.0, 2.0];

// se crea una variable acumuladora de las notas
let sumaNotas = 0;

//recorremos la lista a partir de un for donde sumamos cada iteracion a la sumanNotas
for (let i = 0; i < notas.length; i++) {
    sumaNotas += i
}

//creamos una constante para calcular el primero
const promedio = sumaNotas / notas.length


//imprimimos las notas a partir de un  for..of
console.log("Notas: ");
for (let nota of notas) {
    console.log(nota);
}
console.log("");
console.log("Promedio: "+promedio);
