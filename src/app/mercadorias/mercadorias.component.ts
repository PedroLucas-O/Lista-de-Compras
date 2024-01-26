import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-mercadorias',
  templateUrl: './mercadorias.component.html',
  styleUrls: ['./mercadorias.component.css']
})
export class MercadoriasComponent implements OnInit {
  title = "Lista de Compras";
  // mercadorias : Mercadoria[]
// newMercadoria={
//    id:0o5,
//   descricao : "sal",
//   quantidadeEstoque : 2,
//   quantidadeMinima : 3  
// }
// adicionarMercadoria(): void{
//   this.mercadorias.push({
//     id:this.newMercadoria.id,
//     descricao:this.newMercadoria.descricao,
//     quantidadeEstoque:this.newMercadoria.quantidadeEstoque,
//     quantidadeMinima:this.newMercadoria.quantidadeMinima
//   })
ngOnInit(){
  // this.getMercadorias()
}


}
// constructor(private mercadoriaService:MercadoriaService){}
  




