import { Injectable } from '@angular/core';
import { Registros } from '../models/Registros';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { File } from '@ionic-native/file/ngx';



@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  Lecturas: Registros [] = [];


  constructor( private storage: Storage,
  private browser: InAppBrowser,
  private navCtrl: NavController,
  private email: EmailComposer,
  private archivo: File) {
    this.RegistrosS_ListarGuardados();
  }

  RegistrosS_GuardarRegistro( texto: string, formato: string ) {
    const nuevoRegistro: Registros = new Registros(texto, formato);
    this.Lecturas.unshift(nuevoRegistro);
    this.storage.set('Registros', this.Lecturas);
  }

  RegistrosS_GuardarObjeto( registro: Registros ) {
    const nuevoRegistro: Registros = registro;
    this.Lecturas.unshift(nuevoRegistro);
    this.storage.set('Registros', this.Lecturas);
  }




  async RegistrosS_ListarGuardados( ) {
    let registros: Registros[] = await this.storage.get('Registros');
    if(registros != null)
      this.Lecturas = registros;
    else
      this.Lecturas = [];
  }

  Registros_ConseguirRegistros() {
        return this.Lecturas;
  }

  Registro_Ejecutar( registro: Registros ) {

    switch (registro.type) {
      case 'http':
        this.browser.create(registro.text, '_system');
      break;

      case 'map':
        const geo = registro.text.substr(5).split(',');
        const url = `/tabs/historial/mapdetails/:${geo}`;
        this.navCtrl.navigateForward(url);
      break;

      default:
        break;
    }

  }

  Registro_FormatearCSV() {
    const temp: string [] = [];

    this.Lecturas.forEach( lectura => {
      const linea = `${lectura.frmt}, ${lectura.type}, ${lectura.date}, ${lectura.text.replace(',', ' ')} \n`;
      temp.push(linea);
    });

    console.log('fomato', temp);


  }

  Registro_CrearArchivo( texto: string) {

    this.archivo.checkDir( this.archivo.dataDirectory, 'r.csv' )
    .then( existe => {
      this.Registro_EscribirArchivo( texto );

    })
    .catch( err => {
      this.archivo.createFile(this.archivo.dataDirectory,
        'r.csv',false);
        this.Registro_EscribirArchivo(texto);
    });

  }

  async Registro_EscribirArchivo( texto: string ) {

    await this.archivo.writeExistingFile( this.archivo.dataDirectory, 'r.csv',
    texto
  );
  }

  Registro_EnviarEmail( nombreArchivoContenido: string ) {
    let email = {
      attachments: [nombreArchivoContenido],

      subject: 'Escaneos en CSV',
      body: 'Escaneos'
    }

    this.email.open(email);
  }






}
