export class Cliente {

    // declaração das propriedades (atributos) da classe
    // private Stting_nome; -- Java
    private _nome: string;
    private _matricula: number;
    private _dataRetirada: Date;
    private _nomeLivro: string;
    private _nomeAutor: string;

    constructor(nome: string, matricula: number, dataRetirada: Date, nomeLivro: string, nomeAutor: string) {

        this._nome = nome;
        this._matricula = matricula;
        this._dataRetirada = dataRetirada;
        this._nomeLivro = nomeLivro;
        this._nomeAutor = nomeAutor;
    }

    get nome(): string {
        return this._nome;
    }

    get matricula(): number {
        return this._matricula;
    }

    get dataRetirada(): Date {
        return this._dataRetirada;
    }

    get nomeLivro(): string {
        return this._nomeLivro;
    }

    get nomeAutor(): string {
        return this._nomeAutor;
    }

}