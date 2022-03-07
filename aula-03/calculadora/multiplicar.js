export default function multiplicar(){
    let a = parseInt(prompt("Digite o primeiro número: "));
    let b = parseInt(prompt("Digite o segundo número: "));
    let resultado = (a * b);

    if (a == 0 || b == 0){
        return alert("O produto entre " + a + " e " + b + " é igual a 0");
    }
    else {
        return alert("O produto entre " + a + " e " + b + " é igual a " + resultado);
    }
}