import { Component } from '@angular/core';
import { RegistrosService } from '../../services/registros.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor( private servicio: RegistrosService ) {}


  enviarCorero() {

    this.servicio.Registro_EnviarEmail('r.csv');

  }

}
