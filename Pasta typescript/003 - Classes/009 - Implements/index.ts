abstract class Pessoa {
    protected abstract nome: string;
    protected abstract idade: number;
    abstract enabled(): boolean;
  }
  
  class Sergio implements Pessoa {
    private _nome: string = "Sergio";
    private _idade: number = 31;
  
    enabled(): boolean {
      return false;
    }
  
    get nome() {
      return this._nome;
    }
  
    set nome(valor: string) {
      this._nome = valor;
    }
  
    get idade() {
      return this._idade;
    }
  
    set idade(valor: number) {
      this._idade = valor;
    }
  }