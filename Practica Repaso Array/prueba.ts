let texto : string = "examen conceptos fundamentales de programacion";

function buscarLetras(palabras:string){
    let cantidadA : number = 0;
    let cantidadE : number = 0;
    let cantidadO : number = 0;
    let i : number;
    for(i=0;i<palabras.length;i++){

        if(palabras[i] === "a"){
            cantidadA++;
        } else if(palabras[i] === "e"){
            cantidadE++;
        } else if(palabras[i] === "o"){
            cantidadO++;
        }
    }
    let suma : number[] = [cantidadA, cantidadE, cantidadO];
    return suma;
}

console.log(`La cantidad de letras a, e y o en el texto "${texto}" son de ${buscarLetras(texto)}`);

