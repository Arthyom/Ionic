import { Component, OnInit, Input } from '@angular/core';
import { Peliculas } from 'src/app/interfaces/interfaces';
import { MoviesServicesService } from 'src/app/services/movies-services.service';

@Component({
  selector: 'app-slide-movies',
  templateUrl: './slide-movies.component.html',
  styleUrls: ['./slide-movies.component.scss'],
})
export class SlideMoviesComponent implements OnInit {

  @Input() slidesMovies: Peliculas[];
  @Input()slidesOptions;

  constructor( private movies: MoviesServicesService) { }

  ngOnInit() {}

  Movies_Details(id: string) {
    this.movies.Movies_Details(id).subscribe( (data) => {
      console.log(data);
    });
    console.log(id);
  }

}
