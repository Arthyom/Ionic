import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideMoviesComponent } from '../slide-movies/slide-movies.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SlidesPostersComponent } from '../slides-posters/slides-posters.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';



@NgModule({
  declarations: [SlideMoviesComponent, SlidesPostersComponent, MovieDetailsComponent],
  exports: [ SlideMoviesComponent, SlidesPostersComponent, MovieDetailsComponent],
  imports: [
    IonicModule,
    PipesModule,
    CommonModule
  ]
})
export class CompnentsModule { }
