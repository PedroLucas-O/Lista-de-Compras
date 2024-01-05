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
  descricao : "oléo",
  quantidadeEstoque : 2,
  quantidadeMinima : 2
  },
  {
    id:4,
  descricao : "leite",
  quantidadeEstoque : 37 ,
  quantidadeMinima : 2
  }
  ]
newMercadoria={
   id:0o5,
  descricao : "sal",
  quantidadeEstoque : 0o2,
  quantidadeMinima : 0o1
}
adicionarMercadoria(){
  this.mercadorias.push({
    id:this.newMercadoria.id,
    descricao:this.newMercadoria.descricao,
    quantidadeEstoque:this.newMercadoria.quantidadeEstoque,
    quantidadeMinima:this.newMercadoria.quantidadeMinima
  })


}
constructor(){}
}
