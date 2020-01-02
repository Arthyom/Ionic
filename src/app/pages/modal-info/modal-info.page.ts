import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input()loDiceMiPapaaa; 
  loDigoYo: any;

  constructor( private modal: ModalController ) { }

  ngOnInit() {
  }

  ngModal(){

   
}


  cerrarModal() {
    this.modal.dismiss({
      dismiss: true,
      fraseHijo: "Ya le conteste a mi papa"
    });
  }
}