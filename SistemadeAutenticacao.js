export class SistemadeAutenticacao{
  static login(funcionario, senha){
    return funcionario.senha == senha;
  }
}