export class Cliente{
    nome: string;
    email: string;
    senha:string;
    idade: number;

constructor(nome:string,email:string,senha:string,idade:number,){

    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.idade = idade;
}

printInfo(){
    console.log("Nome: "+this.nome);
    console.log("Email: "+this.email);
    console.log("Senha: "+this.senha);
    console.log("Idade: "+this.idade);
}
}