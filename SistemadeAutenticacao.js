export class SistemadeAutenticacao{
  static login(autenticavel,senha){
    return autenticavel.autenticar(senha);
  }
}