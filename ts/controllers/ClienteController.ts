class ClienteController{

    private _nome: HTMLInputElement;
    private _matricula: HTMLInputElement;
    private _dataRetirada: HTMLInputElement;
    private _nomeLivro: HTMLInputElement;
    private _nomeAutor: HTMLInputElement;

    constructor() {
        this._nome = <HTMLInputElement>document.querySelector('#nomeid');
        this._matricula = <HTMLInputElement>document.querySelector('#matriculaid');
        this._dataRetirada = <HTMLInputElement>document.querySelector('#dtretid');
        this._nomeLivro = <HTMLInputElement>document.querySelector('#nmlivid');
        this._nomeAutor = <HTMLInputElement>document.querySelector('#nmautid');
    }

    adiciona(event: Event) {
        // cancela a execução do evento
        event.preventDefault();

        const cliente = new Cliente(this._nome.value, 
            
            parseInt(this._matricula.value), 
            // por padrão o chrome 2021-04-12
            new Date(this._dataRetirada.value.replace(/-/g, ',')),
            (this._nomeLivro.value),
            (this._nomeAutor.value));

        console.log(cliente);   
    }
}