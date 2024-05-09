import * as rls from 'readline-sync';

let nombreIngresado : string = rls.question("Ingrese su nombre: ");
let apellidoIngresado : string = rls.question("Ingrese su apellido: ");

function imprimirNombre(nombre : string, apellido : string) : string{
    let nombreApellido : string = nombre + " " + apellido;;
    console.log(nombreApellido);

    return nombreApellido
}

imprimirNombre(nombreIngresado, apellidoIngresado);