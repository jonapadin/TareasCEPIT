import * as rls from 'readline-sync'

let numeroIngresado : number = rls.questionInt("Ingrese un numero: ");

if((numeroIngresado % 2 == 0) && (numeroIngresado != 0)){
    console.log(numeroIngresado, " Es PAR");
}else if((numeroIngresado % 2 != 0) && (numeroIngresado != 0)){
    console.log(numeroIngresado, "Es IMPAR");
} else(numeroIngresado = rls.questionInt("Ingrese otro valor que no sea CERO"));