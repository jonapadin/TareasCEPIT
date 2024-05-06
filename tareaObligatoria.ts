import * as rls from 'readline-sync';

//Solicitar ingreso de número
let numeroIngresado : number = rls.questionInt("Escriba su número: ");

//Calcular si es 0, par o impar
if(numeroIngresado == 0){
    console.log("El número ingresado es CERO");
} else if (numeroIngresado % 2 == 0){
    console.log("El número ingresado es PAR");
} else {
    console.log("El número ingresado es IMPAR");
}
 