"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_1 = require("./cliente");
var servico_1 = require("./servico");
var c1 = new cliente_1.Cliente("Erica", "erica@gmail.com", "topster", 18);
var serv1 = new servico_1.Servico("Internet", c1);
var serv2 = new servico_1.Servico("Telefone", c1);
var serv3 = new servico_1.Servico("TV a Cabo", c1);
c1.printInfo();
