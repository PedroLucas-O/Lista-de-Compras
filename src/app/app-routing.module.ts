import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { MercadoriasComponent } from './mercadorias/mercadorias.component';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { EditmercadoriaComponent } from './editmercadoria/editmercadoria.component';

const routes:Routes=[
  // {path:'redirectTo:'/mercadorias',pathMatch:'full'},
  {path:'pagina1',component:Pagina1Component},
  {path:'pagina2',component:Pagina2Component},
  {path:'mercadorias',component:MercadoriasComponent},
  {path:'mercadorias/edit',component:EditmercadoriaComponent}
]

@NgModule({
  declarations:[],
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule { }

