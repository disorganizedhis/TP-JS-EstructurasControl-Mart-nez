import PromptSync from "prompt-sync";
const prompt = PromptSync();

let sueldo = parseFloat(prompt(" Ingrese su sueldo : "));

let jubilacion = sueldo * 0.11;

let obraSocial = sueldo * 0.03;

let ley19032 = sueldo * 0.03;

let retencionfija = jubilacion + obraSocial + ley19032;

let netoProvi = sueldo - retencionfija;

let ganancia = 0;

if (netoProvi > 2000000) {
    let excedente = netoProvi - 2000000;
    ganancia = 1200000 + (excedente * 0.25);
} else if (netoProvi > 1200000) {
    let excedente = netoProvi - 1200000;
    ganancia = excedente * 0.15;
} 
let netoFinal = netoProvi - ganancia;

console.log(" Sueldo : " + sueldo);
console.log(" Descuento : " + retencionfija);
console.log(" Retenciones : " + ganancia);
console.log(" Sueldo Final : " + netoFinal);