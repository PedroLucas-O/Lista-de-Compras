import { Component } from '@angular/core';

@Component({
  selector: 'app-mercadorias',
  templateUrl: './mercadorias.component.html',
  styleUrls: ['./mercadorias.component.css']
})
export class MercadoriasComponent {
  title = "Lista de Compras";
  mercadorias = [{
    id:1,
  descricao : "arroz",
  quantidadeEstoque : 1,
  quantidadeMinima : 2
  },
{
  id:2,
  descricao : "feijão",
  quantidadeEstoque : 5,
  quantidadeMinima : 3
  },
  {
    id:3,
  descricao : "Oléo",
  quantidadeEstoque : 2,
  quantidadeMinima : 2
  }
  ]


}
