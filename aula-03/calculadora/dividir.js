export default function dividir(){
    let a = parseInt(prompt("Digite o primeiro número: "));
    let b = parseInt(prompt("Digite o segundo número: "));
    let resultado = (a / b);

    if (a == 0 || b == 0) {
        return alert("Não se pode dividir por zero");
    }
    else {
        return alert("O quociente entre " + a + " e " + b + " é igual a " + resultado);
    }
}