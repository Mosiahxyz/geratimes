
let i: number = 0;//contador de jogadores

var input: HTMLInputElement;

let njogadores = 6;//número minimo de jogadores para um 3x3

 
     //pegando  o número de jogadores do select
    let select: HTMLSelectElement |null = document.querySelector("#njogadores");

    if(select){//selecionando quantos jogadores o úsuario deseja

        let opcjogadores = select.options[select.selectedIndex].value;
        njogadores = parseFloat(opcjogadores);

    }

    if (i < njogadores) {//criando jogadores  do número desejado

    //pegando um elemento já existente
    let div: HTMLDivElement | null =
    document.querySelector('#inputs')!;

    //criando o elemento que eu quero
    input = document.createElement('input');

    //fazendo ele aparecer na DIV
    div.appendChild(input);
    
    i++//soma jogador
        
    }

 //isso precisa ser arrumado
function gerar(){
    
    //caso jogadores não sejam o suficiente
    

    }
}
