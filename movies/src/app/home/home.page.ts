import { Component, OnInit } from '@angular/core';
import { MoviesServicesService } from '../services/movies-services.service';
import { Peliculas } from '../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  Movies_recents: Peliculas[] = new Array();
  Movies_popular: Peliculas[] = new Array();

  slideOptions = {
    freeMode: true,
    slidesPerView: 1.2
  };


  constructor( private movieColection: MoviesServicesService ) {}


  ngOnInit() {
    this.movieColection.Movies_GetMovies(2019).subscribe( (data) =>{
      this.Movies_recents = data.results;
      console.log(this.Movies_recents);
    });

    this.movieColection.Movies_PopularFromCurrentYear().subscribe( (data) =>{
      this.Movies_popular = data.results;
    });


  }

}
