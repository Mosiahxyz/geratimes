class Jogadores{

    nome: string
    posicao: string
    nivel: number

    constructor(_nome: string, _posicao: string, _nivel: number) {
        
        this.nome = _nome
        this.posicao = _posicao
        this.nivel = _nivel

    }
}

//Importações
//import { Jogadores } from "./Jogadores"; importação da minha classe

//-----------------------------------------------Declaração de Variaveis -----------------------------------------------//

let i: number = 0;//contador de jogadores
let njogadores = 6;//número de jogadores minimos a serem criados por padrão
let qualidade = "1";//definido um valor padrão para qualidade do jogador
let posicao = "";
let jogadores: Jogadores[] = [];//objeto do jogador

//pegando  o número de jogadores do usuario
let select: HTMLSelectElement |null = document.querySelector("#njogadores");

if(select){//pegando o valor do select e colocando no njogadores

    let opcjogadores = select.options[select.selectedIndex].value;
    njogadores = parseFloat(opcjogadores);

}


//------------------------------------------------ Adicionando Jogadores -----------------------------------------------//

function add() {//função que o HTML vai pegar
    
    //pegando o nome do jogador
    let nome: HTMLInputElement | null = document.querySelector("#nome");

    //pegando  o nivel do jogador do usuario
    let select_qualidade: HTMLSelectElement | null = document.querySelector("#qualidade");

    if(select_qualidade){ //pegando a qualidade do jogador
        qualidade = select_qualidade.options[select_qualidade.selectedIndex].value;
    }

    //pegando  a posicao do usuario
    let select_posicao: HTMLSelectElement | null = document.querySelector("#posicao");

    if(select_posicao){ //pegando a qualidade do jogador
        let posicao = select_posicao.options[select_posicao.selectedIndex].value;
    }

    //pegando os elementos do usuario
    if(nome){

        jogadores[i].nome = nome.value
        jogadores[i].nivel = parseFloat(qualidade)
        jogadores[i].posicao = posicao


    }

    if (i < njogadores) {//só cria os jogadores enqunto for menor q o limite 

        //pegando um elemento já existente
        let ul: HTMLUListElement | null =
        document.querySelector('ul')!;
    
        //criando o elemento que eu quero
        let li = document.createElement('li');

        //passando o nomea ser exibido para a tela
        let nomenatela = document.createTextNode(jogadores[i].nome);

    
        //fazendo o texto aparecer na li
        li.appendChild(nomenatela);

        //fazendo ele aparecer na DIV
        ul.appendChild(li);
        
        i++//soma jogador
            
        }

}
