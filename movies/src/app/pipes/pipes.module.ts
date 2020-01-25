import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesPipe } from './images.pipe';
import { ParesPipe } from './pares.pipe';
import { PosterPipe } from './poster.pipe';



@NgModule({
  declarations: [PosterPipe, ImagesPipe, ParesPipe, PosterPipe],
  exports: [PosterPipe,  ImagesPipe, ParesPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
