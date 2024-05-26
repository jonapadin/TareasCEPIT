//Encuentra el número de elementos pares en una lista.
import * as rls from 'readline-sync';

//Creamos el array, la variable donde se va a almacenar la longitud del arreglo.
let longitudArreglo : number = rls.questionInt("Ingrese la cantidad total de valores: ");
let arregloNumeros : number[]  = new Array (longitudArreglo);

// Creamos la funcion que va a recibir el arreglo y una cantidad, esta funcion unicamente va a llenar la lista con numeros ingresados por el usuario
function llenarArray(arreglo: number[], cantidad: number){
    let i: number;
    for(i = 0; i < cantidad; i++){
        arreglo[i] = rls.questionInt(`Ingrese el valor en la posicion ${i}: `);         
    }
}

function numerosPares(arreglo: number[], cantidad: number){
    let i : number;
    let pares : number = 0;
    for(i =0; i < cantidad; i++){
        if(arreglo[i] % 2 === 0){
            pares++
        }
    }
    return pares
}
console.log("llenar la lista: ");
llenarArray(arregloNumeros, longitudArreglo);

console.log(`la cantidad de numeros pares de la lista son ${numerosPares(arregloNumeros, longitudArreglo)}`);
