import * as readlineSync from 'readline-sync';
let dimensionArreglo: any = readlineSync.questionInt("Ingrese la cantidad de jugadores: ");
let edadesNinios: number[] = new Array(dimensionArreglo);
function cargarJugadores (edadesNinios: number[], dimensionArreglo: number) {
    let i: number = 0;
    for (i; i < edadesNinios.length; i++) {
        edadesNinios[i] = Aleatorio(3,7);
    }
}
function Aleatorio(menorValor: number, mayorValor: number): number {
    let numeroADevolver: number = 0;
    numeroADevolver = Math.floor(Math.random() * (mayorValor - menorValor + 1) + menorValor);
    return numeroADevolver;
}
function mostrarJugadores (edadesNinios: number[], dimensionArreglo: number) {
    let i: number = 0;
    let jugadores: string = "";
    for (i; i < edadesNinios.length; i++) {
        jugadores += edadesNinios[i] + " - ";
    }
    console.log(`Los jugadores son ${jugadores}`);
}
function obtenerPromedioEdadesJugadores (edadesNinios: number[], dimensionArreglo: number): number {
    let suma: number = 0;
    let i: number = 0;
    let promedio: number = 0;
    for (i; i < dimensionArreglo; i++) {
        suma += edadesNinios[i];
    }
    promedio = suma / dimensionArreglo;
    return promedio;
}
cargarJugadores(edadesNinios, dimensionArreglo);
mostrarJugadores(edadesNinios, dimensionArreglo);
console.log(`El promedio de las edades ${obtenerPromedioEdadesJugadores(edadesNinios, dimensionArreglo)}`);