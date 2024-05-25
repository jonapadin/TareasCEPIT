import * as rls from 'readline-sync'

let v1 : number[] = new Array(6);
let v2 : number[] = new Array(6);
let vSuma : number[] = new Array(6);
let indice : number;

for(indice = 0; indice > 6; indice++){
    v1[indice] =rls.questionInt(`Ingrese valor de v1: [${indice}]`);
}

