import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideMoviesComponent } from '../slide-movies/slide-movies.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SlidesPostersComponent } from '../slides-posters/slides-posters.component';



@NgModule({
  declarations: [SlideMoviesComponent, SlidesPostersComponent],
  exports: [ SlideMoviesComponent, SlidesPostersComponent],
  imports: [
    IonicModule,
    PipesModule,
    CommonModule
  ]
})
export class CompnentsModule { }
