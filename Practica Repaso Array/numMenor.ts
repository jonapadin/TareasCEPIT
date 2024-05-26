//Encuentra el número más grande en una lista.

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

//Creamos una funcion para comparar los elementos y buscar el menor, a menor le doy el valor del numero que se encuentra en la primera posicion del arreglo, en el for igualo a i en 1 para que empiece a comparar con el segundo valor de la lista, entonces, en el if pregunto si mi segundo num es menor al valor que se encuentra en menor, en este caso va a ser el primer valor de la lista y lo guardo en menor,retornando el num menor
function numMenor(arreglo: number[], cantidad: number){
let i: number;
let menor : number = arreglo[0];
for(i = 1; i < cantidad; i++){   
    if(arreglo[i] < menor ){
        menor = arreglo[i];
    }
    } 
    return menor;
}

//llenamos el arreglo y mostramos por consola el numero menor
llenarArray(arregloNumeros, longitudArreglo);
console.log(numMenor(arregloNumeros, longitudArreglo));