import PromptSync from "prompt-sync";
const prompt = PromptSync();

let ingreso = parseFloat(prompt(" Ingrese su ingreso mensual neto : "));
let antiguedad = parseFloat(prompt(" Ingrese su antiguedad laboral en años : "));
let deudas = prompt(" ¿Tiene deudas pendientes? (si / no) : ");
let montoCredito = parseFloat(prompt(" Ingrese el credito solicitado : "));

let interes = montoCredito * 1.30;
let cuotaMensual = interes / 12;

let limiteCuota = ingreso * 0.30;

// Evaluacion de condiciones en orden
if (deudas === "si") {
    alert(" Rechazado: posee deudas pendientes.");
} else if (antiguedad < 1) {
    alert(" Rechazado: requiere al menos 1 año de antiguedad laboral.");
} else if (cuotaMensual > limiteCuota) {
    alert(" Rechazado: la cuota mensual de $" + cuotaMensual + " supera el tope permitido de " + limiteCuota);
} else {
    alert(" Pre-Aprobado! Su credito fue aceptado. Cuota mensual calculada : " + cuotaMensual);
}