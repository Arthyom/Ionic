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
  Movies_Unpopular: Peliculas[] = new Array();
  pagePopular = 1;
  pageUnpoplr = 1;
  pageRecents = 1;

  slideOptions = {
    freeMode: true,
    slidesPerView: 1.2
  };


  constructor( private movieColection: MoviesServicesService ) {}


  ngOnInit() {
    this.movieColection.Movies_GetMovies(2020).subscribe( (data) =>{
      this.Movies_recents = data.results;
    });

    this.movieColection.Movies_PopularFromCurrentYear( '&sort_by=popularity.des' ).subscribe( (data)=>{
      this.Movies_popular = data.results;
    });

    this.movieColection.Movies_UnPopularFromCurrentYear( '&sort_by=popularity.asc').subscribe( (data)=>{
      this.Movies_Unpopular = data.results;
    });



  }


  cargarPelicula() {
    console.log('evento personalizado');
  }

  Movies_LoadUnpopulars (){

    console.log('cargando inpopulares');
    this.pageUnpoplr++;
    this.movieColection.Movies_PopularFromCurrentYear
    ( `&sort_by=popularity.des&page=${this.pageUnpoplr}`).
    subscribe( (data)=>{
      this.Movies_Unpopular.push(... data.results);
    });

  }

  Movies_LoadPopulars (){
   console.log('cargandopopulres')
    this.pagePopular++;
    this.movieColection.Movies_UnPopularFromCurrentYear
    ( `&sort_by=popularity.asc&page=${this.pagePopular}`).
    subscribe( (data)=>{
      this.Movies_popular.push(... data.results);
    });

  }

  Movies_LoadRecents(){
    this.pageRecents++;
    this.movieColection.Movies_GetMovies
    (2020, `&page=${this.pageRecents}`)
    .subscribe( (data) =>{
      this.Movies_recents.push(... data.results);
    });

  }

}
