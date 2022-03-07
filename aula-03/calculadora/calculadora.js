import somar from './somar.js';

import subtrair from './subtrair';

import dividir from './dividir';

import multiplicar from './multiplicar';

function escolhaOperacao() {

    let operacao = parseInt(prompt("Qual operação deseja realizar? \n Digite 1 para somar \n Digite 2 para subtrair \n Digite 3 para dividir \n Digite 4 para multiplicar"));

    switch(operacao){
        case 1:
            somar();
            break;
        case 2:
            subtrair();
            break;
        case 3:
            dividir();
            break;
        case 4:
            multiplicar();
            break;
        default:
            alert("Por favor, escolha a operação que deseja realizar digitando um número de 1 a 4")
            escolhaOperacao();
            break;
    }
}

escolhaOperacao();
