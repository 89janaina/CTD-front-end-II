export default function subtrair(){
    let a = parseInt(prompt("Digite o primeiro número: "));
    let b = parseInt(prompt("Digite o segundo número: "));
    let resultado = (a - b);
    return alert("A diferença entre " + a + " e " + b + " é igual a " + resultado);
}