import ls from 'prompt-sync';
const cs = ls();

//se crea el arreglo 
let frutas = ["manzana", "pera", "fruta"];

//con la funcion unshift se agrega banano al inicio del arreglo
frutas.unshift("banano")

//con la funcion pop se elimina el ultimo valor de un arreglo
frutas.pop();

//se recorre el arreglo con for...of y posterior a esto se imprime  
for (let fruta of frutas) {
    console.log(fruta);
}