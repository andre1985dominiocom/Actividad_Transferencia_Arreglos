//Control de edades: Cree un arreglo con edades de cinco personas. Recorra el
//arreglo usando for...of y muestre solo las edades mayores o iguales a 18.

//creamso un arreglo qe se llama edades, y se le asingan 5 edades
const edades = [17, 3, 18, 20, 6, 10];

//con el ciclo for of la recorremos, y se almacena en una vairable llamada edad
for (const edad of edades) {
  // con la condicion if, recorremos la variable edad, y si es mayor o igual a 18 mostrar por consola
  if (edad >= 18) {
    //mostrar por consola
    console.log(`mayores de 18: ${edad}`);
    
  }

}