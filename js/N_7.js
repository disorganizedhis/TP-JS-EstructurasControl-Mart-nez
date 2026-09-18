import PromptSync from "prompt-sync";
const prompt = PromptSync();

const saldoInicial = 250000;
let saldo = saldoInicial;

let opcion = prompt(
    "Seleccione una opcion\n" +
    "1: Consultar saldo \n" +
    "2: Extraer dinero \n" +
    "3: Despositar dinero \n" +
    "4: Salir"
);

switch (opcion) {
    case "1":
        alert(" Su saldo actual es de : " + saldo + " pesos ");
        break;
    case "2":
        let extraccion = parseFloat(prompt(" Ingrese el monto a extraer (multiplo de 1.000) : "));

        if (extraccion % 1000 !== 0) {
            alert(" Error: el monto a extraer debe ser multiplo de 1.000 ");
        } else if (extraccion > saldo) {
            alert(" El saldo es insuficiente ");
        } else {
            saldo = saldo - extraccion
            alert(" Extraccion exitosa. Retire su saldo. Su nuevo saldo es : " + saldo + " pesos ");
        }
        break;
    case "3":
        let deposito = parseFloat(prompt(" Ingrese el monto a depositar : "));

        if (deposito <= 0 || isNaN(deposito)) {
            alert(" Error: ingrese un monto valido para depositar ");
        } else {
            alert(" Deposito exitoso. Su nuevo saldo es de : " + saldo + " pesos ");
        }
        break;
    case "4":
        alert(" ¡Hasta luego! " )
        break;
    default:
        alert(" Opcion no valida. ")
        break;
}