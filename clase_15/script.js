"use strict";

function cambiarTexto(){
    let titulo = document.querySelector("#inpText").value;
    document.getElementById("titulo").innerText = titulo;
}



/*# para id y . para clase, igual que en css
/* console,log(document.getElementsByName("entradaDetexto"));
/* console.log(document.getElementsByTagName("input"))

/* document.querySelector("#titulo"); // Si se trata de un ID se usa #
document.getElementById(".titulo"); // Así para encontrar un elemento de tipo clase (con el .) */
