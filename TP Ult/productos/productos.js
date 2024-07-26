let productos = [
  { 
    nombre: "Leche",
    precio: 1500,
    stock: 6 
  },
  { 
    nombre: "Queso",
    precio: 1700,
    stock: 5 
  },
  { 
    nombre: "Verduras",
    precio: 1200,
    stock: 10
  },
  { 
    nombre: "Carnes",
    precio: 1900,
    stock: 15 
  },
  { 
    nombre: "Pastas",
    precio: 1000,
    stock: 9 
  },
  { 
    nombre: "Arroz",
    precio: 1150,
    stock: 10 
  },
  { 
    nombre: "Azúcar",
    precio: 1400,
    stock: 8 
  },
  { 
    nombre: "Harina",
    precio: 1250,
    stock: 6 
  },
  { 
    nombre: "Sal",
    precio: 500, 
    stock: 12 
  },
  { 
    nombre: "Aceite",
    precio: 1180,
    stock: 5 
  }
];

let cantidadComprada = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const listaProductos = document.getElementById('listaProductos');

for (let i = 0; i < productos.length; i++) {
  let producto = productos[i];

  let item = document.createElement('div');
  item.classList.add('producto');

  let nombre = document.createElement('p');
  nombre.classList.add('texto')
  nombre.innerText = `${producto.nombre}: El precio actúal por unidad es de $${producto.precio}`;

  let input = document.createElement('input');
  input.classList.add('caja')
  input.type = 'number';
  input.id = producto.nombre;
  input.min = '0';
  input.max = producto.stock.toString();
  input.value = '0';
  input.addEventListener('change', () => {
      cantidadComprada[i] = input.value;
  });

  item.appendChild(nombre);
  item.appendChild(input);
  listaProductos.appendChild(item);
}
// Función para calcular el total de la compra
function calcularTotal() {
  let total = 0;
  for (let i = 0; i < cantidadComprada.length; i++) {
      let cantidad = cantidadComprada[i]
      if (cantidad > 0 && cantidad <= productos[i].stock) {
          total += cantidad * productos[i].precio;
      }
  }
  document.getElementById('total').innerText = total;
}

// Evento para el botón de calcular total
document.getElementById('calcularTotal').addEventListener('click', calcularTotal);

// Evento para el botón de comprar
document.getElementById('comprar').addEventListener('click', () => {
  calcularTotal();
  let total = document.getElementById('total').innerText;
  if (total > 0) {
    let check = document.getElementById('check')
    check.classList.add('confirma')
    check.innerText = `¡Compra realizada con éxito! El total de tu compra es de: $${total}`;
  
  } else {
    let check = document.getElementById('check')
    check.classList.add('rechaza')
    check.innerText = "No hay productos seleccionados o la cantidad es cero.";
  }
});