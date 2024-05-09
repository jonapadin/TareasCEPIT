import * as rls from 'readline-sync'

let numero : number = rls.questionInt("Ingrese su numero: ");
let hasta : number = rls.questionInt("Ingrese hasta que numero: ");

for(let inicial : number = 1; inicial <= hasta; inicial++){
    console.log(numero, " * ", inicial, " = ", (numero * inicial));
}
