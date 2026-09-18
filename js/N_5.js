import PromptSync from "prompt-sync";
const prompt = PromptSync();

let ingresos = parseFloat(prompt(" Ingrese los ingresos brutos anuales : "));
let superficie = parseFloat(prompt(" Ingrese la superficie en m2 : "));

if (ingresos <= 6000000 && superficie <= 30) {
    alert("Categoria asignada: Categoria A");
} else if (ingresos <= 12000000 && superficie <= 45) {
    alert("Categoria asignada: Categoria B");
} else if (ingresos <= 18000000 && superficie <= 85) {
    alert("Categoria asignada: Categoria C");
} else {
    alert("Categoria asignada: Regimen General");
}