import ls from 'prompt-sync'
const cs = ls();


//se crea el arreglo de 5 aprendices 
let aprendices = ["Andy", "Daiana", "sebas", "Orly", "Mateo"];

//con la funcion push se agrea un nuevo aprendiz al final del arreglo
aprendices.push("Yuya");

//con la funcion shift se elimina el el primer elemento del aprendiz 
//en este caso se elimina Andy de la lista
aprendices.shift();

//se imprimen el arreglo actualizado
console.log(aprendices);
