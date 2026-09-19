import PromptSync from "prompt-sync";
const prompt = PromptSync();

let monto = parseFloat(prompt(" Ingrese el monto total del carrito : "));
let categoria = prompt(" Ingrese la categoria (bronce , plata , oro) : ");
let cupon = prompt(" Ingrese el codigo de descuento (DESC10, SUPER20, o ninguno) : ");

let membresia = 0;

if (categoria === "plata") {
    membresia = 0.05;
} else if (categoria === "oro") {
    membresia = 0.15;
}

let cuponP = 0;

switch (cupon) {
    case "DESC10":
        cuponP = 0.10;
        break;
        
    case "SUPER20":
        if (monto > 50000) {
            cuponP = 0.20;
        } else {
            console.log("El cupon SUPER20 solo aplica para compras mayores a $50.000 pesos.");
        }
        break;
        
    default:
        cuponP = 0;
        break;
}

let descuentoMembresia = monto * membresia;
let descuentoCupo = monto * cuponP;
let descuentos = descuentoMembresia + descuentoCupo;

let subtotal = monto - descuentos;

let costoEnvio = 0;

if (subtotal > 100000) {
    costoEnvio = 0;
} else {
    costoEnvio = 4500;
}

let totalNeto = subtotal + costoEnvio;

console.log(" Informacion de la compra");
console.log(" Monto inicial del carrito : " + monto);
console.log(" Descuento por membresia (" + categoria + "): " + descuentoMembresia);
console.log(" Descuento por cupon (" + cupon + "): " + descuentoCupon);
console.log(" Total de descuentos aplicados : " + descuentos);
console.log(" Costo de envio : " + costoEnvio);
console.log(" ================================ ");
console.log(" TOTAL NETO A PAGAR: $" + totalNeto);