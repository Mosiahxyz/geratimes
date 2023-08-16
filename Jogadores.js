"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Times = void 0;
var Times = /** @class */ (function () {
    function Times(_jogadores) {
        this.jogadores = _jogadores;
    }
    return Times;
}());
exports.Times = Times;
var times = new Times([
    { nome: 'chinelo', posicao: 10, star: true },
    { nome: 'cobertor', posicao: 100, star: true }
]);
console.log(times.jogadores[0].posicao);
