import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/componentes';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor( private httpCliente: HttpClient ) { }

  getMenuData() {
    return this.httpCliente.get<Componente[]> ('/assets/data/menu.json');
  }
}
