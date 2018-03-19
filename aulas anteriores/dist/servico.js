"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Servico = /** @class */ (function () {
    function Servico(descricao, cliente) {
        this.descricao = descricao;
        this.cliente = cliente;
    }
    Servico.prototype.printServ = function () {
        console.log("DESCRIÇÃO " + this.descricao);
        console.log("NOME " + this.cliente.nome);
        console.log("E-MAIL " + this.cliente.email);
    };
    return Servico;
}());
exports.Servico = Servico;
