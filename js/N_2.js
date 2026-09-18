import PromptSync from "prompt-sync";
const prompt = PromptSync();

let edad = parseInt(prompt(" Ingrese la edad : "));
let cobertura = prompt(" Ingrese el tipo de cobertura (terceros , terceros completo , todo riesgo) : ");
let accidentes = parseInt(prompt(" Ingrese los accidentes en el ultimo año : "));

if (accidentes >= 3 && cobertura === "todo riesgo") {
    alert(" No es posible contratar la cobertura Todo Riesgo por registrar 3 o mas accidentes ");
} else {
    let tarifa = 0;

    if (cobertura === "terceros") {
        tarifa = 45000;
    } else if (cobertura === "terceros completo") {
        tarifa = 70000;
    } else if (cobertura === "todo riesgo") {
        tarifa = 110000;
    } else {
        alert("Tipo de cobertura no valida.");
    }

if (tarifa > 0) {
        let total = tarifa;

        // Recargo por edad
        if (edad < 25) {
            total = total + (tarifa * 0.20);
        }

        // Descuento por 0 accidentes
        if (accidentes === 0) {
            total = total - (tarifa * 0.10);
        }

        // Recargo por 3 o mas accidentes
        if (accidentes >= 3) {
            total = total + (tarifa * 0.30);
        }

        alert("El valor final de la poliza es: " + total + " pesos ");
    }    
}
