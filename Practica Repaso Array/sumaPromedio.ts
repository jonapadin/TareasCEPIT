//Encuentra el promedio de una lista de números.
import * as rls from 'readline-sync';

//Creamos el array, la variable donde se va a almacenar la longitud del arreglo y la variable suma donde se guarda la suma de los valores del arreglo
let longitudArreglo : number = rls.questionInt("Ingrese la cantidad total de valores: ");
let arregloNumeros : number[]  = new Array (longitudArreglo);
let suma : number = 0;

// Creamos la funcion que va a recibir un arreglo y una cantidad, va a sumar los elementos de la lista y los va a guardar en suma
function sumaValores(arreglo: number[], cantidad : number){
    let i : number;
    for(i = 0; i < cantidad; i++){
        arreglo[i] = rls.questionInt(`Ingrese los valores en ${i}:` );
        suma += arreglo[i];
    }
    return suma;
}

//Creamos la funcion que va a realizar la division para calcular el promedio, va a recivir dos variables, la suma y la longitud, creamos variable para almacenar resultado y retornamos
function promedioLista(sumaLista : number, divisorPromedio : number){
    let resultadoPromedio : number = 0;
    resultadoPromedio = sumaLista / divisorPromedio;

    return resultadoPromedio;
}

//llamamos las funciones dandoles las varibles 
sumaValores(arregloNumeros, longitudArreglo);
console.log(promedioLista(suma, longitudArreglo));
