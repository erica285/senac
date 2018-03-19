"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente = /** @class */ (function () {
    function Cliente(nome, email, senha, idade) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.idade = idade;
    }
    Cliente.prototype.printInfo = function () {
        console.log("Nome: " + this.nome);
        console.log("Email: " + this.email);
        console.log("Senha: " + this.senha);
        console.log("Idade: " + this.idade);
    };
    return Cliente;
}());
exports.Cliente = Cliente;
