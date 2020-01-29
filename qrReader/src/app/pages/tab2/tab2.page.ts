import { Component } from '@angular/core';
import { RegistrosService } from 'src/app/services/registros.service';
import { Registros } from 'src/app/models/Registros';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  registros: Registros[] = []



  constructor( private Str_Reg: RegistrosService ) {}

  ionViewWillEnter() {
    this.registros = this.Str_Reg.Registros_ConseguirRegistros();
  }

  abirRegistro(registro: Registros) {
    this.Str_Reg.Registro_Ejecutar(registro);
  }

  enviar() {
    this.Str_Reg.Registro_EnviarEmail('r.csv');
  }

}
