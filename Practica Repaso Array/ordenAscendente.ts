//Ordena una lista de números de forma ascendente.

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

//funcion
function ordenarAscendente(v : number[], cantidad : number){
    let aux : number;
    let indiceIzq : number = 0;
    let indiceDer : number = cantidad;
    while(indiceIzq < indiceDer){
        aux = v[indiceIzq];
        v[indiceIzq] = v[indiceDer];
        v[indiceDer] = aux;
        indiceIzq++;
        indiceDer--;
    }   
    
}


console.log("Llenar arreglo ")
llenarArray(arregloNumeros, longitudArreglo);
ordenarAscendente(arregloNumeros, longitudArreglo);

console.log("Los elementos ordenados de manera ascendentes  son:" + arregloNumeros);
