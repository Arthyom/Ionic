import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor( private toast: ToastController) { }

  ngOnInit() {
  }

  async simpleToast() {
    const ts = await this.toast.create({
      message: 'Este es un siemple toast',
      duration: 2000,
      mode: 'ios',
      header: 'Encavezado',
      color: 'primary'
    });

    await ts.present();
  }

  async optionToast() {

    const ts = await this.toast.create({
      duration: 2000,
      mode: 'md',
      color: 'tertiary',
      showCloseButton: true,
      buttons: [
        {
          icon: 'star',
          side: 'start',
          text: 'favoritos'
        },

        {
          icon: 'share',
          side: 'end',
          role: 'Cancel',
          text: 'hecho',
        }
      ]
    });

    await ts.present();

  }

}
