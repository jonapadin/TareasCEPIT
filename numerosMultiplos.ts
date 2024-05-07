console.log("Números múltiplos de 2 , 3 o ambos entre 1 y 100:");

for (let num = 1; num <= 100; num++) {
    if (num % 2 === 0 && num % 3 === 0) {
        console.log(num, " Es multiplo de ambos");
    } else if(num % 2 === 0 || num % 3 === 0){
        if(num % 2 === 0){
            console.log(num, " Es multiplo de 2");
        }
        if(num % 3 === 0){
            console.log(num, " Es multiplo de 3")
        }
    }
}