import PromptSync from "prompt-sync";
const prompt = PromptSync();

let respiracion = prompt("¿Tiene dificultad para respirar? (si / no):");
let dolor = parseInt(prompt("Ingrese el nivel de dolor (1 a 10):"));
let presion = parseInt(prompt("Ingrese la presion arterial sistolica (mm Hg):"));

if (respiracion === "si" || presion > 180) {
    alert(" TRIAjE ROJO (Atencion Inmediata)\n");
    alert(" Tiempo maximo de espera: Atencion inmediata sin demora.");
} 
else if (dolor >= 7 || (presion >= 140 && presion <= 180)) {
    alert(" TRIAjE AMARILLO (Urgencia Media)\n");
    alert(" Tiempo maximo de espera: Hasta 30 minutos.");
} 
else {
    alert(" TRIAjE VERDE (Consulta Baja Prioridad)\n");
    alert(" Tiempo maximo de espera: Hasta 120 minutos.");
}