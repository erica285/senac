"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mock_post_1 = require("./mock-post");
var posts = mock_post_1.POSTAGENS;
for (var _i = 0, posts_1 = posts; _i < posts_1.length; _i++) {
    var post = posts_1[_i];
    console.log("USUÁRIO " + post.usuario.nome);
    console.log("DATA: " + post.data);
    console.log(post.postagem);
    console.log();
}
