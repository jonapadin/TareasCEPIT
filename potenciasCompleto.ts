//Importamos la libreria
import * as rls from 'readline-sync';

//Definimos la variable
let base : number = rls.questionInt("Ingrese la base de su potencia: ");
let exponente : number = rls.questionInt("Ingrese el exponente de su potencia: ");
let resultado : number;

//Definimos la funcion para calcular la potencia, que toma dos parámetros: basePotencia y exponentePotencia
function calcularPotencia(basePotencia : number, exponentePotencia: number){
    let resultadoCalculo: number = 1; // Inicializamos el resultado como 1, ya que al iniciar la multiplicacion si es 0 se termina el ciclo en cero
    
    // Iniciamos un bucle que se repetirá 'exponentePotencia' veces
    for(let i = 0; i < exponentePotencia; i++){
        resultadoCalculo *= basePotencia; // Multiplicamos el resultadoCalculo actual por la base y lo asignamos nuevamente al resultadoCalculo con *=
    }
    return(resultadoCalculo); // Devolvemos el resultado después de completar el bucle
}

//Definimos la funcion para saber si el numero ingresado es menor a 0
function MenorCero(numeroIngresado:number) : boolean{
    return numeroIngresado < 0;
}

//Calculamos si el exponente ingresado es menor a 0 y si no lo es realiza la funcion y mostramos por consola el resultado
if(MenorCero(exponente)){
    console.log("Ingresa un valor que sea Mayor o Igual a 0")
} else {
    resultado = calcularPotencia(base, exponente);
    console.log("El resultado de la potencia:", base, "elevado a", exponente, "es",  resultado);
}