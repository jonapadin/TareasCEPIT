//Definir las varibles donde se almacenan los productos, precios, la cantidad que disponemos y la cantidad que el usuario quiere comprar
let productos = ["leche", "queso", "verduras", "carnes", "pastas", "arroz", "azucar", "harina", "sal", "aceite"];
let precios = [500, 700, 800, 900, 1000, 150, 200, 250, 50, 180];
let cantidadDisponible = [1, 2, 3, 4, 5, 10, 8, 6, 12, 5];
let cantidadComprada = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Función para calcular el total de la compra
function calcularTotal() {
    let total = 0

    for (let i = 0; i < productos.length; i++) {
        let input = document.getElementById(productos[i]);
        cantidadComprada[i] = input.value;

        if (cantidadComprada[i] > 0 && cantidadComprada[i] <= cantidadDisponible[i]) {
            total += cantidadComprada[i] * precios[i];
        } else if (cantidadComprada[i] > cantidadDisponible[i]) {
            alert(`No hay suficiente stock para ${productos[i]}`);
        }
    }
    document.getElementById('total').innerText = total;
}

// definimos que va a hacer el botón de calcular total
document.getElementById('calcularTotal').addEventListener("click", () => {
    calcularTotal();
});

// Evento para el botón de comprar
document.getElementById('comprar').addEventListener("click", () => {
    calcularTotal();

    let total = parseInt(document.getElementById('total').innerText);

    if (total > 0) {
        alert(`¡Compra realizada con éxito! El total de tu compra es: $ ${total}`);
    } else {
        alert("No hay productos seleccionados o la cantidad es cero.");
    }
});
