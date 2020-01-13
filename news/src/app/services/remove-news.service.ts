import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/noticia';
import { SavenewsService } from './savenews.service';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoveNewsService {

  borrar = false;
  constructor( private removerNews: Storage, private saverNews: SavenewsService ) { }

  removeNews( index: number, noticias: Article[ ] ) {

    console.log(index);
    console.log(noticias);
    delete noticias[index] 
    console.log(noticias);

    const filtered = noticias.filter( (el) => {
      return el != undefined;
    })

    this.saverNews.saveNew(filtered);
  }

  setDeleter ( state: boolean ){
    this.borrar = state;
  }

  getDeleter (  ){
    return this.borrar ;
  }

}
