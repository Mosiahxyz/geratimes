//Podemos definir como interface o contrato entre a classe e o mundo exterior.
export interface IJogadores{
    nome: string,
    posicao: number,
    star: boolean
}

export class Times{

    jogadores: IJogadores[];

    constructor(_jogadores: IJogadores[]){
        this.jogadores = _jogadores;
    }
}

let times: Times = new Times(
[
    {nome: 'chinelo', posicao: 10, star: true},
    {nome: 'cobertor', posicao: 100, star: true}
    
])



