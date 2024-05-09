import * as readlinesync from 'readline-sync'

let claveReal : string = "eureka";
let claveUsuario : string = readlinesync.question("Ingrese clave: ");
let contador : number = 1;
let intentos : number = 3;

while((contador <= intentos) && (claveUsuario != claveReal)){
    claveUsuario = readlinesync.question("reintente clave: ");
    contador++;
}

if(claveReal != claveUsuario){
    console.log("Sin intentos");
} else {
    console.log("clave correcta");
}
