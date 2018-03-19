"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usuario_1 = require("./usuario");
var u = new usuario_1.Usuario("Erica", "erica@gmail", "123");
exports.POSTAGENS = [
    { usuario: u, data: "16/06/2018", postagem: "Treinando Typescript" },
    { usuario: u, data: "16/06/2018", postagem: "Orientação a Objetos" },
    { usuario: u, data: "16/06/2018", postagem: "Angular 4" },
    { usuario: u, data: "16/06/2018", postagem: "Último Post" }
];
