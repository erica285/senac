import { Usuario } from "./usuario";
import { Post } from "./post";


let user = new Usuario ("Erica","erica@gmail.com","topster");

let post1 = new Post (
"Treinando Typescript no Senac Campo Grande",
"16/06/2018 20:00",
user);

post1.printPost();

console.log() // pular linha

let post2 = new Post(
    "Está na hora do intervalo",
    "16/06/2018 20:00", 
    user);

post2.printPost();