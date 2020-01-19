import { Component, OnInit, Input } from '@angular/core';
import { Peliculas } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slide-movies',
  templateUrl: './slide-movies.component.html',
  styleUrls: ['./slide-movies.component.scss'],
})
export class SlideMoviesComponent implements OnInit {

  @Input() slidesMovies: Peliculas[];
  @Input()slidesOptions;
  constructor() { }

  ngOnInit() {}

}
