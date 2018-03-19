import { Usuario } from "./usuario";
import { Post } from "./post";
        
    let u = new Usuario("Erica","erica@gmail","123");

export const POSTAGENS : Post[] = [
    
    {usuario: u, data: "16/06/2018",postagem: "Treinando Typescript"},
    {usuario: u, data: "16/06/2018",postagem: "Orientação a Objetos"},
    {usuario: u, data: "16/06/2018",postagem: "Angular 4"},
    {usuario: u, data: "16/06/2018",postagem: "Último Post"}
]