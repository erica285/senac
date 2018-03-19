import  { Usuario } from "./usuario";


export class Post{

    postagem : string;
    data : string;
    usuario : Usuario;

    constructor(postagem : string, data: string, usuario: Usuario){
    
    this.postagem = postagem;
    this.data = data;
    this.usuario = usuario;    

}
/*
printPost(){
    console.log("Postado por "+this.usuario.nome);
    console.log("Data "+this.data);
    console.log(this.postagem);
}*/

}
