class Cliente {

    // declaração das propriedades (atributos) da classe
    private _nome;
    private _matricula;
    private _dataRetirada;
    private _nomeLivro;
    private _nomeAutor;

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

    get dataNascimento() {
        return this._dataRetirada;
    }

    get primeiraNota() {
        return this._nomeLivro;
    }

    get segundaNota() {
        return this._nomeAutor;
    }

}