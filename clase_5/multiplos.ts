import * as rls from 'readline-sync';

let primerNumero : number = rls.questionInt("Ingrese el primer valor: ");
let segundoValor : number = rls.questionInt("Ingrese el segundo valor: ");


function esMultiplo(num1 : number, num2 : number) : boolean {
    let resultado : boolean;    
    resultado = (num1 % num2  === 0);

    return resultado
}

console.log(esMultiplo(primerNumero, segundoValor));

