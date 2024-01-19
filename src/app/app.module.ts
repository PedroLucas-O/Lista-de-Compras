import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/Forms'

import { AppComponent } from './app.component';
import { MercadoriasComponent } from './mercadorias/mercadorias.component';
import { AppRoutingModule } from './app-routing.module';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { EditmercadoriaComponent } from './editmercadoria/editmercadoria.component';

@NgModule({
  declarations: [
    AppComponent,
    MercadoriasComponent,
    Pagina1Component,
    Pagina2Component,
    EditmercadoriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
