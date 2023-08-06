//contador p/ numero de jogadores de futebol
var i = 0;
var nomes = [];
var input;
var njogadores = 6;
//adicionar novos jogadores ao "próximos a jogar"
function add() {
    //pegando  o número de jogadores do select
    var select = document.querySelector("#njogadores");
    if (select) {
        var opcjogadores = select.options[select.selectedIndex].value;
        njogadores = parseFloat(opcjogadores);
    }
    if (i < njogadores) {
        //pegando um elemento já existente
        var div = document.querySelector('div');
        //criando o elemento que eu quero
        input = document.createElement('input');
        //fazendo ele aparecer na DIV
        div.appendChild(input);
        i++; //soma jogador
    }
}
function gerar() {
    //adiciona itens no array
    for (var cont = 0; cont < i; cont++) {
        nomes[cont] = input.value;
    }
    //pegando um elemento já existente
    var timeA = document.querySelector('#timeA');
    for (var cc = 0; cc < i; cc++) {
        //criando o elemento que eu quero
        var jogadorA = document.createTextNode(nomes[cc]);
        //fazendo ele aparecer na DIV
        timeA.appendChild(jogadorA);
        console.log(jogadorA);
    }
}
