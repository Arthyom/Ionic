import { Injectable } from '@angular/core';

import {  PeliculaDetalles, Peliculas } from '../interfaces/interfaces';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor( private storage: Storage ) { }

  Storage_SaveMovies ( movies: PeliculaDetalles[] ) {
    this.storage.set('peliculas', movies);
  }

  async Storage_RemoveMovie( movie: PeliculaDetalles ){
    let l: PeliculaDetalles [] = await this.Storage_GetMovies();
    const f: PeliculaDetalles = l.find( data => data.id === movie.id)
    
    const s = l.indexOf(f);
    console.log(s);
    l[s]= null;
    l = l.filter( e=> e);

    console.log('borrado', l);
    this.Storage_SaveMovies(l);

    console.log('guardado', l);
    return l;
  }

  Storage_GetMovies ( ): Promise<PeliculaDetalles[]>{
    return this.storage.get('peliculas');
  }

  async Storage_FindMovie( movie: PeliculaDetalles ) {
    
    const l: PeliculaDetalles [] = await this.Storage_GetMovies();
    for (let i = 0; i < l.length; i++) {
      const element = l[i];

      if( element.id === movie.id)
        return true;
    }
    return false;
  }

}
