import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  respuesta: string = null;
  constructor( private modal: ModalController) { }

  ngOnInit() {
  }

  async mostrarModal( ) {
    const mod = await this.modal.create({
      component: ModalInfoPage,
      componentProps: {
          loDiceMiPapaaa: "Que se muestre mi hijo el modal"
      }
    });

    await mod.present();

    const {data} = await mod.onDidDismiss();

    this.respuesta = data.fraseHijo;
    console.log(data);

  }

}
