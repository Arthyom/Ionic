import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverinfoComponent } from 'src/app/componentes/popoverinfo/popoverinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( private popOver: PopoverController ) { }

  elemento: string;
  ngOnInit() {
  }

  async mostrarPopOver( evento ) {

    const pop = await  this.popOver.create({
      component: PopoverinfoComponent,
      mode: 'ios',
      event: evento,
      backdropDismiss: false
    });

    await pop.present();

    const {data} = await pop.onDidDismiss();

    console.log(data.datos);
    this.elemento = data.datos;
    
    

   


  }

}
