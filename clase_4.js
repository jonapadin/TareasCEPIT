"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var llegadaDeColectivo;
llegadaDeColectivo = rls.question("llego el colectivo? (S/N)");
while (llegadaDeColectivo == "N") {
    console.log("Todavia no llego");
    llegadaDeColectivo = rls.question("llego el colectivo? (S/N)");
}
console.log("Llego el colectivo");
