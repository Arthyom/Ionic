import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { RegistrosService } from 'src/app/services/registros.service';
import { Registros } from 'src/app/models/Registros';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  textoEscaneo = '';


  opciones = {

    allowSlidePrev: false,
    allowSlideNext: false
  };

  constructor( private lector: BarcodeScanner, private alm: RegistrosService ) {}

  async escanear() {
    this.lector.scan().then(suc => {
      const texto =  suc.text;
      const formato = suc.format;

      const nuevoRegistro: Registros = new Registros(texto, formato);
      this.alm.RegistrosS_GuardarObjeto(nuevoRegistro);
      this.alm.Registro_Ejecutar(nuevoRegistro);

    }).catch( err => {
      console.log(err);
    });



  }




}
