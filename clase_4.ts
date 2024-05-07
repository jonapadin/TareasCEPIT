import * as rls from 'readline-sync'; 

let llegadaDeColectivo : string;

llegadaDeColectivo = rls.question("llego el colectivo? (S/N)");

while (llegadaDeColectivo == "N"){
    console.log("Todavia no llego");

    llegadaDeColectivo = rls.question("llego el colectivo? (S/N)");
}

console.log("Llego el colectivo");