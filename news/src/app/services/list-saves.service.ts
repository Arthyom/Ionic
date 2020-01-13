import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/noticia';

@Injectable({
  providedIn: 'root'
})
export class ListSavesService {

  constructor( private saves: Storage ) { }

  getNewsSaves() {
    return this.saves.get('favoritos');
  }
}
