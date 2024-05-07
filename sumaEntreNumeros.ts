import * as rls from 'readline-sync'

let numeroUno : number = rls.questionInt("Escriba el primer numero: ");
let numeroDos : number = rls.questionInt("Escriba el segundo numero: ");

let suma : number = 0;

for(let entre : number = numeroUno; entre <= numeroDos; entre++){
    suma += entre;
}

console.log("La suma es: ",suma);