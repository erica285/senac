"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usuario_1 = require("./usuario");
var post_1 = require("./post");
var user = new usuario_1.Usuario("Erica", "erica@gmail.com", "topster");
var post1 = new post_1.Post("Treinando Typescript no Senac Campo Grande", "16/06/2018 20:00", user);
post1.printPost();
console.log(); // pular linha
var post2 = new post_1.Post("Está na hora do intervalo", "16/06/2018 20:00", user);
post2.printPost();
