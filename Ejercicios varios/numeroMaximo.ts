import * as rls from 'readline-sync'

// Definimos las variables maximos y minimos
let maximos : number; // Se guardaran valores maximos ingresados
let minimo : number; // Se guardaran los valores minimos ingresados

//Primer valor ingresado
let valorIngresado : number = rls.questionFloat("Ingrese un numero: ")
//Asignamos primer valor a maximos y minimo
maximos = valorIngresado;
minimo = valorIngresado;

//mientras el valorIngresado sea distinto a 0...
while(valorIngresado!= 0){
    valorIngresado = rls.questionFloat("Ingrese un numero: "); // Variable para almacenar el valor ingresado por el usuario

    // Si el valor ingresado es mayor que maximos, actualizamos maximos
    if(valorIngresado > maximos){
        maximos = valorIngresado;
    }
    // Si el valor ingresado es menor que minimo y distinto a cero, actualizamos minimo

    if(valorIngresado < minimo && valorIngresado != 0){
        minimo = valorIngresado;
    }
}
// Mostramos los resultados
console.log("El máximo de los numeros introducidos es: " + maximos);
console.log("El mínimo de los numeros introducidos es: " + minimo);

