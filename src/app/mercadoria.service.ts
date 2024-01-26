import { Injectable } from '@angular/core';
import { Mercadoria } from './mercadoria';
import { LISTAMERCADORIAS} from './base-mercadoria';

@Injectable({
  providedIn: 'root'
})
export class MercadoriaService {

  constructor() { }

  getMercadorias(id:null | any ):Mercadoria{
    return LISTAMERCADORIAS[id]
  }
}
