import { Component, OnInit } from '@angular/core';
import { MoviesServicesService } from '../services/movies-services.service';
import { Genre, Peliculas, PeliculaDetalles } from '../interfaces/interfaces';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  genres: Genre[] = [];
  mov: PeliculaDetalles [] = [];
  peliculasCategoria = [{
    genero: "",
    peliculas: [] 
  }];
  
  constructor( private store: StorageService,
     private movies : MoviesServicesService ) { }

  ngOnInit() {

    this.movies.Movies_Genres().subscribe(  async(data) => {
      this.genres = data['genres'];
      this.mov = await this.conseguirPeliculas();
      this.peliculasPorGenero();

      console.log(this.peliculasCategoria)
   
    });

  }

  peliculasPorGenero() {

    this.peliculasCategoria = [];
    this.genres.forEach( genero => {
      this.peliculasCategoria.push( {
        genero: genero.name,
        peliculas: 
          this.mov.filter( pelicula =>{
            return pelicula.genres.find( g => g.id === genero.id );
          })
      });
    });
  }

  async conseguirPeliculas() {
   this.mov = await this.store.Storage_GetMovies();
   return this.mov;
  }

  doRefresh( event ){

    this.movies.Movies_Genres().subscribe( async (data) => {
      this.genres = data['genres'];
      this.mov = await this.conseguirPeliculas();
      
      this.peliculasPorGenero();
      event.target.complete();

    });

    

  }

}
