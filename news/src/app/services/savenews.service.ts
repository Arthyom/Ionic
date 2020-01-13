import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/noticia';

@Injectable({
  providedIn: 'root'
})
export class SavenewsService {

  constructor( private saveNews: Storage ) { }

  saveNew( noticias: Article[] ){
    console.log('guadado dentro del serviico de almacen', noticias);
    this.saveNews.set( 'favoritos', noticias );
  }

  

}
