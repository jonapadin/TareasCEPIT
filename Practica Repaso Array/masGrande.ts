//Encuentra el número más grande en dos listas.

import * as rls from 'readline-sync';

//Creamos el array, la variable donde se va a almacenar la longitud del arreglo.
let longitudArreglo : number = rls.questionInt("Ingrese la cantidad total de valores: ");
let arreglo1: number[] = new Array(longitudArreglo);
let arreglo2: number[] = new Array(longitudArreglo);

// Creamos la funcion que va a recibir el arreglo y una cantidad, esta funcion unicamente va a llenar la lista con numeros ingresados por el usuario
function llenarArray(arreglo: number[], cantidad: number){
    let i: number;
    for(i = 0; i < cantidad; i++){
        arreglo[i] = rls.questionInt(`Ingrese el valor en la posicion ${i}: `);         
    }
}

//Creamos la funcion que va a comparar los numeros en 2 arreglos distintos, si el valor enarray1[i] es mayor a el valor en array2[i], va a guardar el valor de array1 en un arreglo nuevo, si no es mayor guarda el valor de arreglo2 en el nuevo arreglo
function masGrande(array1: number[], array2: number[], cantidad : number){
    let grande : number[] = new Array(cantidad);
    let i : number;
    for(i = 0; i < cantidad; i++){
        if(array1[i] > array2[i]){
            grande[i] = array1[i];
        } else{
            grande[i] = array2[i];
        }
    }
    return grande;
}

//Llenamos los arreglos y mostramos la funcion por consola
console.log("Llenar arreglo 1")
llenarArray(arreglo1, longitudArreglo);
console.log("Llenar arreglo 2")
llenarArray(arreglo2, longitudArreglo);

console.log(`Los elementos mas grandes entre los valores en ${arreglo1} y ${arreglo2} son: ${masGrande(arreglo1,arreglo2, longitudArreglo)}`);

