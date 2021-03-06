import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { PipesModule } from '../pipes/pipes.module';
import { CompnentsModule } from '../components/compnents/compnents.module';
import { MovieDetailsComponent } from '../components/movie-details/movie-details.component';

@NgModule({
  entryComponents: [MovieDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    CompnentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
