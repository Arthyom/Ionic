import { Component, OnInit } from '@angular/core';
import { MoviesServicesService } from '../services/movies-services.service';
import { Peliculas } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { MovieDetailsComponent } from '../components/movie-details/movie-details.component';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  constructor( private movies: MoviesServicesService, 
    private modal: ModalController ) { }

  peliculas_ideas: Peliculas[] = [];
  buscar = false;
  pelicula_seleccionada: string;
  peliculas_enc: Peliculas[] = [];


  ngOnInit() {
    this.movies.Movies_GetMovies(2020).subscribe( (data) => {

      for (let i = 0; i < data.results.length; i++) {
        const element = data.results[i];
        if ( element.title.length  <= 12 ) {
          this.peliculas_ideas.push(element);
        }
      }
    });
  }

  // buscar una pelicula
  onChange( event ) {
    const nombre: string = event.detail.value;
    
    console.log(nombre);
    if (nombre.length > 0 ) {
      this.buscar = true;
      this.movies.Movies_FindMovieByName(nombre).subscribe( (data) => {
        this.peliculas_enc = data['results'];
        this.buscar = false;
      });
    }

   
  
  }


  onClear() {
    this.peliculas_enc = [];
    this.peliculas_enc = [];
    this.buscar = false;
  }

  async seleccionar_targeta( id ) {
    const s = await this.modal.create({
      component: MovieDetailsComponent,
      componentProps: {
        id
      }
    });

    s.present();
  }

}
