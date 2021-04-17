import { Cliente, ListCliente} from '../models/moduleCliente';
import { ClienteView, MensagemView } from '../Views/moduleView';

export class ClienteController{

    private _nome: HTMLInputElement;
    private _matricula: HTMLInputElement;
    private _dataRetirada: HTMLInputElement;
    private _nomeLivro: HTMLInputElement;
    private _nomeAutor: HTMLInputElement;
    private _listCliente = new ListCliente;
    private _clienteView = new ClienteView('tableClientes');
    private _mensagemView = new MensagemView('menssageView');

    constructor() {
        this._nome = <HTMLInputElement>document.querySelector('#nomeid');
        this._matricula = <HTMLInputElement>document.querySelector('#matriculaid');
        this._dataRetirada = <HTMLInputElement>document.querySelector('#dtretid');
        this._nomeLivro = <HTMLInputElement>document.querySelector('#nmlivid');
        this._nomeAutor = <HTMLInputElement>document.querySelector('#nmautid');

        this._clienteView.update(this._listCliente);
    }

    adiciona(event: Event) {
        // cancela a execução do evento
        event.preventDefault();

        const cliente = new Cliente (this._nome.value, 
            parseInt(this._matricula.value),
            new Date(this._dataRetirada.value.replace(/-/g, ',')),
            (this._nomeLivro.value),
            (this._nomeAutor.value));

        console.log(cliente);   

        // imprimir a Lista de cliente
        // for each - para cada (lista)
            this._listCliente.pegaLista.forEach(cliente => {
                console.log(cliente);
            }
        );
        this._clienteView.update(this._listCliente); 
    

    // adiciona a mensagem de cadastro 
    this._mensagemView.update('Cliente adicionado com sucesso!');
        }
}
