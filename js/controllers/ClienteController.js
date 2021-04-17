class ClienteController {
    constructor() {
        this._nome = document.querySelector('#nomeid');
        this._matricula = document.querySelector('#matriculaid');
        this._dataRetirada = document.querySelector('#dtretid');
        this._nomeLivro = document.querySelector('#nmlivid');
        this._nomeAutor = document.querySelector('#nmautid');
    }
    adiciona(event) {
        // cancela a execução do evento
        event.preventDefault();
        const cliente = new Cliente(this._nome.value, this._matricula.value, this._dataRetirada.value, this._nomeLivro.value, this._nomeAutor.value);
        console.log(cliente);
    }
}
