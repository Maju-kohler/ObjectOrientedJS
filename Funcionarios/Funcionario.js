export class Funcionario{
  constructor(nome,salario,cpf){
    this._nome = nome;
    this._salario = salario;
    this._cpf = cpf;

    this._bonificacao = 1;
    this._senha;
  }

  //getters e setter
  get senha(){
    return this._senha;
  }

  //métodos!!!
  cadastrarSenha(senha){
    this._senha = senha;
  }
}