var Jogadores = /** @class */ (function () {
    function Jogadores(_nome, _posicao, _nivel) {
        this.nome = _nome;
        this.posicao = _posicao;
        this.nivel = _nivel;
    }
    return Jogadores;
}());
//Importações
//import { Jogadores } from "./Jogadores"; importação da minha classe
//-----------------------------------------------Declaração de Variaveis -----------------------------------------------//
var i = 0; //contador de jogadores
var njogadores = 6; //número de jogadores minimos a serem criados por padrão
var qualidade = "1"; //definido um valor padrão para qualidade do jogador
var posicao = "";
var jogadores = []; //objeto do jogador
//pegando  o número de jogadores do usuario
var select = document.querySelector("#njogadores");
if (select) { //pegando o valor do select e colocando no njogadores
    var opcjogadores = select.options[select.selectedIndex].value;
    njogadores = parseFloat(opcjogadores);
}
//------------------------------------------------ Adicionando Jogadores -----------------------------------------------//
function add() {
    //pegando o nome do jogador
    var nome = document.querySelector("#nome");
    //pegando  o nivel do jogador do usuario
    var select_qualidade = document.querySelector("#qualidade");
    if (select_qualidade) { //pegando a qualidade do jogador
        qualidade = select_qualidade.options[select_qualidade.selectedIndex].value;
    }
    //pegando  a posicao do usuario
    var select_posicao = document.querySelector("#posicao");
    if (select_posicao) { //pegando a qualidade do jogador
        var posicao_1 = select_posicao.options[select_posicao.selectedIndex].value;
    }
    //pegando os elementos do usuario
    if (nome) {
        jogadores[i].nome = nome.value;
        jogadores[i].nivel = parseFloat(qualidade);
        jogadores[i].posicao = posicao;
    }
    if (i < njogadores) { //só cria os jogadores enqunto for menor q o limite 
        //pegando um elemento já existente
        var ul = document.querySelector('ul');
        //criando o elemento que eu quero
        var li = document.createElement('li');
        //passando o nomea ser exibido para a tela
        var nomenatela = document.createTextNode(jogadores[i].nome);
        //fazendo o texto aparecer na li
        li.appendChild(nomenatela);
        //fazendo ele aparecer na DIV
        ul.appendChild(li);
        i++; //soma jogador
    }
}
