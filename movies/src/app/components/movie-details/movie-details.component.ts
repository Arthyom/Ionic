import { Component, OnInit, Input } from '@angular/core';
import { PeliculaDetalles, Actors, Cast } from 'src/app/interfaces/interfaces';
import { MoviesServicesService } from 'src/app/services/movies-services.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {

  @Input() id: string;

  actores: Cast[] = [];
  detalles: PeliculaDetalles = {};
  opt = {
    slidesPerView: 3.2,
    freeMode: true,
    spaceBetweend: -5
  };

  constructor( private movies: MoviesServicesService,
    private mod: ModalController) { }

  ngOnInit() {

    this.movies.Movies_Details(this.id).subscribe( (data) =>{
      this.detalles = data;
      console.log(this.detalles);
    });

    this.movies.Movies_ActorsDetails(this.id).subscribe( (data) => {
      this.actores = data.cast;
      console.log(this.actores);
    });

  }

  cerrarModal() {
    this.mod.dismiss();
  }

}
