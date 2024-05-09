import * as rls from 'readline-sync';

let  numeroEntero : number = rls.questionInt("Ingrese un número entero: ");

function esMultiplo(num1 : number, num2 : number) : boolean {
    let resultado : boolean;    
    resultado = (num1 % num2  === 0);

    return resultado
}

function cantidadDeDivisores(numero: number): number {
    let contador: number = 0;
    for (let i = 1; i <= numero; i++) {
        if (esMultiplo(numero, i)) {
            contador++;
        }
    }
    return contador;
}

console.log("La cantidad de divisores de", numeroEntero,  "son:", cantidadDeDivisores(numeroEntero));