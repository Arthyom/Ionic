import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Peliculas } from 'src/app/interfaces/interfaces';
import { MoviesServicesService } from 'src/app/services/movies-services.service';

@Component({
  selector: 'app-slides-posters',
  templateUrl: './slides-posters.component.html',
  styleUrls: ['./slides-posters.component.scss'],
})
export class SlidesPostersComponent implements OnInit {

  @Input()slidesMovies: Peliculas[];

  @Output()cargarPelicula = new EventEmitter();

  slidesOptions = {
    freeMode: true,
    slidesPerView: 3.3
  };


  constructor( private movies: MoviesServicesService ) {

   }

  ngOnInit() {

  }

  emitir(){
    console.log('emitir');
    this.cargarPelicula.emit();
  }

}
