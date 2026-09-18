import PromptSync from "prompt-sync";
const prompt = PromptSync();

let rol = prompt("Ingrese su rol (admin, editor, cliente): ");
let estado = prompt("Ingrese el estado (activa, suspendida): ");
let hora = parseInt(prompt("Ingrese la hora de ingreso (0 a 23): "));

if (estado === "suspendida") {
    alert("Acceso denegado");
} else if (rol === "admin") {
    alert("Acceso permitido");
} else if (rol === "editor") {
    if (hora >= 8 && hora <= 18) {
        alert("Acceso permitido");
    } else {
        alert("Acceso denegado: fuera de horario");
    }
} else if (rol === "cliente") {
    if (estado === "activa") {
        alert("Acceso permitido");
    } else {
        alert("Acceso denegado");
    }
} else {
    alert("Rol no autorizado");
}


