import { Cliente } from "./cliente";

export class Servico{
    descricao : string;
    cliente : Cliente;

    constructor(descricao : string, cliente : Cliente){
    this.descricao = descricao;
    this.cliente = cliente;


}


printServ(){
    console.log("DESCRIÇÃO "+this.descricao);
    console.log("NOME "+this.cliente.nome);
    console.log("E-MAIL "+this.cliente.email);
}
}