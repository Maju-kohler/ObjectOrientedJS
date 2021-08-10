import {Cliente} from "./Cliente.js";
import {SistemadeAutenticacao} from "./SistemadeAutenticacao.js"
import {Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"

//definindo funcionários
const diretor = new Diretor("Rodrigo", 10000, 12345678900);
const gerente = new Gerente("Manuel", 50000, 12345678901);
const cliente = new Cliente("Roberto", 12345678902, "112233445566");

//interagindo com as variáveis:
diretor.cadastrarSenha("123456789");
gerente.cadastrarSenha("12345678901")

const diretorEstaLogado = SistemadeAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado = SistemadeAutenticacao.login(gerente, "12345678901");

console.log(diretorEstaLogado, gerenteEstaLogado);

const clienteEstaLogado =  SistemadeAutenticacao.login(cliente,"456");

console.log(clienteEstaLogado)