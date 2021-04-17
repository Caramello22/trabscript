class Cliente {
    constructor(nome, matricula, dataRetirada, nomeLivro, nomeAutor) {
        this._nome = nome;
        this._matricula = matricula;
        this._dataRetirada = dataRetirada;
        this._nomeLivro = nomeLivro;
        this._nomeAutor = nomeAutor;
    }
    get nome() {
        return this._nome;
    }
    get matricula() {
        return this._matricula;
    }
    get dataRetirada() {
        return this._dataRetirada;
    }
    get nomeLivro() {
        return this._nomeLivro;
    }
    get nomeAutor() {
        return this._nomeAutor;
    }

}
