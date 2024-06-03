import * as rls from 'readline-sync'

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

//creamos la funcion donde utilizaremos el metodo burbuja, va a recibir como parametros un arreglo y una cantidad(longitud del arreglo en este caso)
function burbuja(arreglo: number[], cantidad : number){
    for(let i = 0; i < (cantidad -1); i++){
        for(let j = 0; j < (cantidad - 1 - i); j++){
            if(arreglo[j] < arreglo[j +1]){
            let aux: number;
            aux = arreglo[j]
            arreglo[j] = arreglo[j + 1];
            arreglo[j + 1] = aux;  
            }
            
        }
    }
    return arreglo;
}

//Pedimos llenar el arreglo y lo mostramos por consola en orden descendente
console.log("Llenar arreglo: ");
llenarArray(arregloNumeros, longitudArreglo);
console.log(`Los valores del arreglo en forma descendente son: ${burbuja(arregloNumeros, longitudArreglo)}`);
