"use strict";

let btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function(e){
    mostrar(div)
})

let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function(e){
    mostrar(div)
})


function mostrar(div) {
    let div1 = document.getElementById('btn1');
    let div2 = document.getElementById('btn2');

    if (div == 'btn1') {
        div1.style.visibility = 'hidden';
        div2.style.visibility = 'visible';
    } else {
        div1.style.visibility = 'visible';
        div2.style.visibility = 'hidden';
    }
}
