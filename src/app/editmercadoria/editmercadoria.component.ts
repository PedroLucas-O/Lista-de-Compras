import { Component, OnInit } from '@angular/core';
import { MercadoriaService } from '../mercadoria.service';
import { Mercadoria } from '../mercadoria';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-editmercadoria',
  templateUrl: './editmercadoria.component.html',
  styleUrls: ['./editmercadoria.component.css']
})
export class EditmercadoriaComponent implements OnInit{
  
  mercadoria: Mercadoria 

constructor(
  private mercadoriaService:MercadoriaService,
  private route: ActivatedRoute,
  
){}

  ngOnInit(){
    this.getMercadoria();
  }

  getMercadoria():void{
    const id=this.route.snapshot.paramMap.get('id')
    this.mercadoria=this.mercadoriaService.getMercadorias(id)
  }
  
}
