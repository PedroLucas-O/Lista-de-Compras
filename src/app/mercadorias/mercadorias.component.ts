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
  quantidades : 1  
  },
{
  id:2,
  descricao : "feijão",
  quantidades : 4 
  },
  {
    id:3,
  descricao : "Oléo",
  quantidades : 10  
  }
  ]


}
