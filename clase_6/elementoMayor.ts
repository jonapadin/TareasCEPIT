import * as rls from 'readline-sync'
//Creamos el array y la variable donde se va a almacenar el bucle cuando un numero sea mayor al otro
let arregloNumeros : number[]  = new Array (4,7,9,3,1,45,67,23,29,78,11,16);
let numeroMayor : number = arregloNumeros[0];

//creamos un bucle
for(let i = 0; i < 12; i++){
    if (arregloNumeros[i] > numeroMayor){
        numeroMayor = arregloNumeros[i]
    }
}
 
//Funcion para saber y retornar si un numero es par o impar
function parImpar(numero: number): string {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Impar";
    }
}

//Mostramos por consola
console.log("El numero mas grande del arreglo es:", numeroMayor, " y es", parImpar(numeroMayor));
