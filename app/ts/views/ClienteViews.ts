import { ListCliente } from '../models/ListCliente';
import { View } from './Views';

export class ClienteView extends View<ListCliente> {

template(lista: ListCliente): string {

            return   `
            <table class="table table-hover table-bordered">
            <thead>
                <tr class="text-center">
                    <th>Nome</th>
                    <th>Matricula</th>
                    <th>Data etirada</th>
                    <th>Nome do Livro</th>
                    <th>Nome do Autor</th>
                    <th colspan="2">Gerenciar</th>
                </tr>
            </thead>
            <tbody>

            ${lista.pegaLista.map(cliente => `

                <tr class="text-center">
                    <td>${cliente.nome}</td>
                    <td>${cliente.matricula}</td>
                    <td>${cliente.dataRetirada}/2021</td>
                    <td>${cliente.nomeLivro}</td>
                    <td>${cliente.nomeAutor}</td>
                    <td><a href="#"><i class="fas fa-pencil-alt"></i></a></td>
                    <td><a href="#"><i class="fas fa-trash-alt text-danger"></i></a></td>
                </tr>
                `).join('')}
            </tbody>
        </table>
            `;
    }
}