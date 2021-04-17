import { Cliente } from './Cliente';

export class ListCliente {
    //private _aclientes: Cliente[] = [];
    private _clientes: Array<Cliente> = [];

    adiciona(cliente: Cliente): void {
        this._clientes.push(cliente);
    }
    get pegaLista(): Cliente[] {
        //return this._alunos;
        return [].concat(this._clientes);
    }
}