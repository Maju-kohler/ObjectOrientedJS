import {Cliente} from "./Cliente.js";
import {SistemadeAutenticacao} from "./SistemadeAutenticacao.js"
import {Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"

//definindo funcionários
const diretor = new Diretor("Rodrigo", 10000, 12345678900);
const gerente = new Gerente("Manuel", 50000, 12345678901);

//interagindo com as variáveis:
diretor.cadastrarSenha("123456789");

const estaLogado = SistemadeAutenticacao.login(diretor, "123456789");

console.log(estaLogado);