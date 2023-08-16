//adicionar novos jogadores ao "próximos a jogar"
function add() {
    var dialog = document.querySelector("#adcjogador");
    if (dialog)
        dialog.showModal();
}
function fecha() {
    var dialog = document.querySelector("#adcjogador");
    if (dialog)
        dialog.close();
}
var i = 0; //contador de jogadores
var input;
var njogadores = 6; //número minimo de jogadores para um 3x3
//pegando  o número de jogadores do select
var select = document.querySelector("#njogadores");
if (select) { //selecionando quantos jogadores o úsuario deseja
    var opcjogadores = select.options[select.selectedIndex].value;
    njogadores = parseFloat(opcjogadores);
}
if (i < njogadores) { //criando jogadores  do número desejado
    //pegando um elemento já existente
    var div = document.querySelector('#inputs');
    //criando o elemento que eu quero
    input = document.createElement('input');
    //fazendo ele aparecer na DIV
    div.appendChild(input);
    i++; //soma jogador
}
//isso precisa ser arrumado
function gerar() {
    //caso jogadores não sejam o suficiente
    if (i < njogadores) {
        //pegando um elemento já existente
        var erro = document.querySelector('#erro');
        var xjogadores = njogadores - i;
        var texto = ('Faltam ' + xjogadores + ' jogadores');
        //criando o elemento que eu quero
        var textoerro = document.createTextNode(texto);
        //fazendo ele aparecer na DIV
        erro.appendChild(textoerro);
        console.log("erro");
    }
}
