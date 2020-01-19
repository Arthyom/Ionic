import { Component, OnInit, Input } from '@angular/core';
import { Peliculas } from 'src/app/interfaces/interfaces';
import { MoviesServicesService } from 'src/app/services/movies-services.service';

@Component({
  selector: 'app-slides-posters',
  templateUrl: './slides-posters.component.html',
  styleUrls: ['./slides-posters.component.scss'],
})
export class SlidesPostersComponent implements OnInit {

  @Input()slidesMovies: Peliculas[] = new Array();

  slidesOptions = {
    freeMode: true,
    slidesPerView: 3.3
  };


  constructor( private movies: MoviesServicesService ) {
    this.movies.Movies_PopularFromCurrentYear().subscribe( (data)=>{

      this.slidesMovies = data.results;
    });
   }

  ngOnInit() {
    
  }

}
