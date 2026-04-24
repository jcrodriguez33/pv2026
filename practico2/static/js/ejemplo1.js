console.log(`Hola Mundo`);
let numero = 120.3;
let nombre = `Daniela`; 
let isVerde = false;
console.log(`El numero es: ${numero}`);
console.log(`El nombre es: ${nombre}`);
const materia = `Programacion Visual`;
function suma(a, b){
    return a + b;
}
const sumaArrow = (a, b) => a + b;
console.log(`La suma de 7 + 8 es: ${suma(7, 8)}`);
console.log(`La sumaArrow de 7 + 8 es: ${sumaArrow(7, 8)}`);

const aleatorio = (min, max) => Math.floor(Math.random() * (max - min +1)) + min;
console.log(`Valor aleatorio: ${aleatorio(100, 200)}`);

let numeros = [20, 21, 32, 80, 12, 34];
for (let i = 0; (i < numeros.length); i++){
    console.log(numeros[i]);
}
numeros.forEach(numero => console.log(numero));

let sumaNumero = 0;
let acumular = (numero) => sumaNumero = sumaNumero + numero;
numeros.forEach(acumular);
console.log(`La resultante del vector es ${sumaNumero}`);