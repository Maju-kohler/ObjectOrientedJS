export class SistemadeAutenticacao{

  static login(autenticavel,senha){
    if(SistemadeAutenticacao.ehAutenticavel(autenticavel)){
      return autenticavel.autenticar(senha);
    }
    return false;
  }

  static ehAutenticavel(autenticavel){
    return "autenticar" in autenticavel && 
    autenticavel.autenticar instanceof Function;
  }
}