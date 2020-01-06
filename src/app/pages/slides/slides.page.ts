import { Component, OnInit } from '@angular/core';
import { SlidesService } from 'src/app/services/slides.service';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  sinfo: Observable<any>;

  constructor( private slideInfo: SlidesService, private nav: NavController ) { }

  ngOnInit() {

    this.sinfo = this.slideInfo.conseguirNombre();
  }

  onClick() {
    this.nav.navigateBack('/');
  }


}
