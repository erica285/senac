import { Cliente } from "./cliente";
import  { Servico } from "./servico";

let c1 = new Cliente ("Erica","erica@gmail.com","topster",18);
let serv1 = new Servico ("Internet", c1);
let serv2 = new Servico ("Telefone", c1);
let serv3 = new Servico ("TV a Cabo", c1);

c1.printInfo();