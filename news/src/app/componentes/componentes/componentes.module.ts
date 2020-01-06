import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NewsComponent } from '../news/news.component';
import { NewComponent } from '../new/new.component';
import { SegmentComponent } from '../segment/segment.component';



@NgModule({
  declarations: [ NewsComponent, NewComponent, SegmentComponent ],

  exports: [NewComponent, NewsComponent, SegmentComponent],

  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentesModule { }
