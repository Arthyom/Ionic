import { Component, OnInit, Input } from '@angular/core';
import { PeliculaDetalles, Actors, Cast } from 'src/app/interfaces/interfaces';
import { MoviesServicesService } from 'src/app/services/movies-services.service';
import { ModalController, ToastController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {

  @Input() id: string;

  actores: Cast[] = [];
  detalles: PeliculaDetalles = {};

  pelSaved: PeliculaDetalles[] = []
  existe = false;
  nombreIcono = 'star-outline'
  opt = {
    slidesPerView: 3.2,
    freeMode: true,
    spaceBetweend: -5
  };

  constructor( private movies: MoviesServicesService,
    private mod: ModalController, 
    private str: StorageService,
    private tst: ToastController ) {

    }

   ngOnInit() {

    this.getSavedMovies();
    this.movies.Movies_Details(this.id).subscribe( async (data) =>{
      this.detalles = data;
      this.existe = await this.str.Storage_FindMovie(this.detalles);

      if( this.existe )
        this.nombreIcono = 'star';
      else
        this.nombreIcono = 'star-outline';

    });

    this.movies.Movies_ActorsDetails(this.id).subscribe( (data) => {
      this.actores = data.cast;
    });
    
  }

  cerrarModal() {
    this.mod.dismiss();
  }


  addFavorites() {
    if( !this.existe ){
      this.pelSaved.push(this.detalles);
      this.str.Storage_SaveMovies(this.pelSaved);
      this.showToast('Pelicula Agregada Correctamente');
      this.nombreIcono = 'star';


    }
    else{
      this.nombreIcono = 'star-outline';
      this.str.Storage_RemoveMovie( this.detalles )
      this.showToast('Se Quito De Favoritos');
    }
      
  }

  async showToast( mensaje: string ) {
    const s = await this.tst.create({
      message: mensaje,
      duration: 1500
    });
    await s.present();
  }

  async getSavedMovies() {

    this.pelSaved  = await this.str.Storage_GetMovies( );
  }

}
