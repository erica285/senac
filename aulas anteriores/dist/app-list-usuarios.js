"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mock_usuario_1 = require("./mock-usuario");
var usuarios = mock_usuario_1.USUARIOS;
for (var _i = 0, usuarios_1 = usuarios; _i < usuarios_1.length; _i++) {
    var usuario = usuarios_1[_i];
    console.log(usuario.nome);
    console.log(usuario.email);
    console.log();
}
