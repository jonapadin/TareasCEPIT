//Calcula la suma de dos arreglos elemento por elemento.
import * as rls from 'readline-sync';

//Creamos variables y arrays
let longitudArreglo: number= rls.questionInt("Ingrese la longitud del arreglo: ");
let arreglo1: number[] = new Array(longitudArreglo);
let arreglo2: number[] = new Array(longitudArreglo);

//Funcion para llenar los arreglos
function llenarArray(arreglo: number[], cantidad: number) {
    let i: number;
    for (i = 0; i < cantidad; i++) {
        arreglo[i] = rls.questionInt(`Ingrese el valor en ${i} :` );
    }
}

// creamos la funcion para sumar los valores de los arreglos en su posicion i, va tomar los 2 arrays y la longitud del arreglo, a los resultados los vamos a guardar individualmente en un nuevo arreglo y los retornamos
function sumaArreglos(array1 : number[], array2 : number[], cantidad : number){
    let suma : number[] = new Array(cantidad);
    let i : number;
    for(i = 0; i < cantidad; i++){
        suma[i] = + (array1[i] + array2[i]);
    }
    return suma;
}

//llenamos los arreglos y mostramos por consola la suma
console.log("Llenar arreglo 1")
llenarArray(arreglo1, longitudArreglo);
console.log("Llenar arreglo 2")
llenarArray(arreglo2, longitudArreglo);

console.log(sumaArreglos(arreglo1,arreglo2, longitudArreglo));
