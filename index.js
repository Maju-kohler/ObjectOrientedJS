import {Cliente} from "./Cliente.js";
import { Conta } from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

//atribuindo informações dos clientes
const cliente1 = new Cliente("Ricardo" , 11122233309);
const cliente2 = new Cliente("Alice" , 88822233309);

//atribuindo contas bancarias aos clientes
const contaCorrenteRicardo = new ContaCorrente(cliente1 , 1001);

contaCorrenteRicardo.depositar(500);
const conta2 = new ContaPoupanca(700, cliente2, 1002);
contaCorrenteRicardo.sacar(100);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(500);
contaSalario.sacar(100);

console.log(contaSalario);