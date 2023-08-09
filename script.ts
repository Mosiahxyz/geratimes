
//contador p/ numero de jogadores de futebol
let i: number = 0;
let c: number = 0;

let nomes: string[] = []

var input: HTMLInputElement;

let njogadores = 6;


//adicionar novos jogadores ao "próximos a jogar"
function add(){

    //pegando  o número de jogadores do select
    let select: HTMLSelectElement |null = document.querySelector("#njogadores");

    if(select){

        let opcjogadores = select.options[select.selectedIndex].value;
        njogadores = parseFloat(opcjogadores);

    }

    if(i < njogadores){

    //pegando um elemento já existente
    let div: HTMLDivElement | null =
    document.querySelector('div')!;

    //criando o elemento que eu quero
    input = document.createElement('input');

    //fazendo ele aparecer na DIV
    div.appendChild(input);
    
    i++//soma jogador

    }
}

function gerar(){
    

    //adiciona itens no array
    for (let cont = 0; cont < i; cont++) { nomes[cont] = input.value;}

        //pegando um elemento já existente
        let timeA: HTMLDivElement | null =
        document.querySelector('#timeA')!;

        for (let cc = 0; cc < i; cc++) {
          
        //criando o elemento que eu quero
         let jogadorA = document.createTextNode(nomes[cc]);

        //fazendo ele aparecer na DIV
        timeA.appendChild(jogadorA);

        
        console.log(jogadorA)
        console.log(nomes)

                
        }   
        

}