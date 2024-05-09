import * as rls from 'readline-sync'
// Inicializamos los contadores
let totalValores : number = 0; // Contador para el total de valores ingresados
let mayorCero : number = 0; // Contador para los valores positivos ingresados


let valorIngresado : number; // Variable para almacenar el valor ingresado por el usuario

while((valorIngresado = rls.questionFloat("Ingrese un numero: ")) != 0){ // Variable para almacenar el valor ingresado por el usuario
        totalValores++; // Incrementamos el contador de valores totales
        
        // Comprobamos si el valor ingresado es positivo y actualizamos el contador de valores positivos
        if(valorIngresado > 0){
                mayorCero++
        }
}
// Verificamos si se ingresaron valores
if (totalValores > 0){
        // Calculamos el porcentaje de valores positivos
        let poncentajePositivos : number = ((mayorCero / totalValores) * 100)

        // Mostramos los resultados
        console.log("Cantidad de valores positivos: ", totalValores);
        console.log("Porcentaje de positivos: ", poncentajePositivos,"%");
} else {
        console.log("No se ingreso ningun 0");
}
