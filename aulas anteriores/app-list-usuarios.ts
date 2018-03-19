import { Usuario } from "./usuario";
import { USUARIOS } from "./mock-usuario";

let usuarios: Usuario[] = USUARIOS;

for(let usuario of usuarios){
    console.log(usuario.nome);
    console.log(usuario.email);
    console.log();
}