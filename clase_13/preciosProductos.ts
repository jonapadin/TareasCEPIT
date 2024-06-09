import fs from 'node:fs';

const precios: number[] = [525, 3500, 400, 1999];
let contenido: string = "";

for(let i : number = 0; i < precios.length; i++){
    contenido += `${precios[i]} `;
}

fs.writeFileSync('./precios.txt', contenido);
console.log("Cargando los precios...")


const datos: string = fs.readFileSync('./precios.txt', 'utf8');
const datos2: string = datos.trim();
const preciosArray: string[] = datos2.split(" ");
console.log(preciosArray)

const producto: string[] = ["Leche", "Galletitas", "Harina","Queso"];
let contenido2: string = "";

for(let i : number = 0; i < producto.length; i++){
    contenido2 += `${producto[i]} `;
}

fs.writeFileSync('./productos.txt', contenido2);
console.log("Cargando los productos...")


const datos3: string = fs.readFileSync('./productos.txt', 'utf8');
const datos4: string = datos3.trim();
const productosArray: string[] = datos4.split(" ");
console.log(productosArray)
console.log("Finalizado")