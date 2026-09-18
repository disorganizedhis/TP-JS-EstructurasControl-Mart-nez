import PromptSync from "prompt-sync";
const prompt = PromptSync();

let distancia = parseFloat(prompt(" Ingrese la distancia (KM) : "));
let tiempo = parseFloat(prompt(" Ingrese el tiempo (MIN) : "));
let demanda = prompt(" Ingrese la demanda (baja , media , alta): ");


let bajada = 800;
let costoKm = 350;
let costoMinuto = 80;

let multiplicador = 1.0;

switch (demanda) {
    case "baja":
        multiplicador = 1.0;
        break;
    case "media":
        multiplicador = 1.3;
        break;
    case "alta":
        multiplicador = 1.8;
        break;

    default:
        console.log(" Nivel de demanda no valido ");
        console.log(" Se usara el factor 1.0 de forma predeterminada ");
        multiplicador = 1.0;
        break;
}

let costoDistancia = distancia * costoKm;
let costoTiempo = tiempo * costoMinuto;
let neto = (bajada + costoDistancia + costoTiempo ) * multiplicador;

let adicional = 0;

if (distancia > 20) {
    adicional = 1500;
}

let total = adicional + neto;

console.log(" El precio final es de : " + total + " pesos ");