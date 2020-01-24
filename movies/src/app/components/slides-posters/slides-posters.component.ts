import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Peliculas, PeliculaDetalles, Actors } from 'src/app/interfaces/interfaces';
import { MoviesServicesService } from 'src/app/services/movies-services.service';
import { ModalController } from '@ionic/angular';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-slides-posters',
  templateUrl: './slides-posters.component.html',
  styleUrls: ['./slides-posters.component.scss'],
})
export class SlidesPostersComponent implements OnInit {

  @Input()slidesMovies: Peliculas[];

  @Output()cargarPelicula = new EventEmitter();

  detallesMov: PeliculaDetalles = {};
  detallesAct: Actors[] = [];

  slidesOptions = {
    freeMode: true,
    slidesPerView: 3.3
  };


  constructor( private movies: MoviesServicesService,
     private modal: ModalController ) {

   }

  ngOnInit() {

  }

  emitir(){
    console.log('emitir');
    this.cargarPelicula.emit();
  }

  async Movies_Details(id: string) {


    const md = await this.modal.create({
      component: MovieDetailsComponent,
      componentProps: {
        id
      }
    });

    md.present();


  }

}
