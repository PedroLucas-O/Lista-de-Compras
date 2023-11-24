import { Component } from '@angular/core';

@Component({
  selector: 'app-mercadorias',
  templateUrl: './mercadorias.component.html',
  styleUrls: ['./mercadorias.component.css']
})
export class MercadoriasComponent {
  title = "Lista de Compras";
  mercadorias = [{
  descricao : "arroz",
  quantidades : 1  
  },
{
  descricao : "feijão",
  quantidades : 4 
  },
  {
  descricao : "Oléo",
  quantidades : 10  
  }
  ]


}
