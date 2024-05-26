//Encuentra el número de veces que aparece un elemento en una lista.
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

//Creamos la funcion que va a buscar si un numero aparece en el arreglo, esta funcion va a tomar un arreglo, la longitud del arreglo y un numero ingresado para comparar. en nuestro if preguntamos si el valor en i de nuestro arreglo es igual al numero ingresado le sume uno a la variable.
function numerosAparece(arreglo: number[], cantidad: number, numeroBuscar: number){
    let i : number;
    let aparece : number = 0;
    for(i =0; i < cantidad; i++){
        if(arreglo[i]  === numeroBuscar){
            aparece++
        }
    }
    return aparece
}

//Cargamos el arreglo
console.log("llenar la lista: ");
llenarArray(arregloNumeros, longitudArreglo);

//Solicitamos que ingrese el valor que desee buscar en el arreglo
let numero : number = rls.questionInt("Ingrese el valor que desee buscar en el arreglo: ")

//Mostramos por consola la funcion que compara un numero ingresado con los valores del arreglo
console.log(`la cantidad de veces que aparece ${numero} en la lista son ${numerosAparece(arregloNumeros, longitudArreglo, numero)}`);
