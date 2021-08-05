import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";

//atribuindo informações dos clientes
const cliente1 = new Cliente("Ricardo" , 11122233309);
const cliente2 = new Cliente("Alice" , 88822233309);

//atribuindo contas bancarias aos clientes
const contaCorrenteRicardo = new ContaCorrente(cliente1 , 1001);

contaCorrenteRicardo.depositar(500);
const conta2 = new ContaPoupanca(700, cliente2, 1002);

console.log(contaCorrenteRicardo);
console.log(conta2);