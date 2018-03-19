import { Post } from "./post";
import { POSTAGENS } from "./mock-post";

let posts : Post[] = POSTAGENS;

for (let post of posts){
    console.log("USUÁRIO "+ post.usuario.nome);
    console.log("DATA: "+ post.data);
    console.log(post.postagem);
    console.log();
}