import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.page.html",
  styleUrls: ["./alert.page.scss"],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor( private alerta: AlertController ) { }

  async mostrarAlerta (){
    const ALRT = await this.alerta.create({

      header: "titulo",
      subHeader: "subtitulo",
      message: "mensaje",
      buttons: ["Cancel", "Open Modal", "Delete"]
    });

    await ALRT.present();
  }

  async mostrarConfirm (){
    const CONF = await this.alerta.create({

      header: "titulo",
      subHeader: "subtitulo",
      message: "mensaje",
      buttons: [
        {
          text: "conf1",
          role: "Cancel",
          handler: ()=>{
            console.log("se preciono confirm 1");
          }
        },

        {
          text: "conf2",
          role: "ok",
          handler: ()=>{
            console.log("se preciono confirm 2");
          }

        }]
    });

    await CONF.present();
  }

  async mostrarPromp(){

    const PRMP = await this.alerta.create({
      header: "Prompt",

      buttons: [
        {
          
          text: "Aceptar", 
          role: "Ok",
          handler: (data)=>{
            console.log(data);
            this.titulo = data.entrada1;
          }
        },

        {
          text: "Cancelar",
          role: "Cancel",
          handler: ()=>{
            console.log("Cancelado!");
          }
        }

      ],


      inputs: [
        {
          name: "entrada1",
          type: "text",
          label: "Entrada 1",
          placeholder: "Escriba la entrada 1",
          id: "entrada1"
        },

        {
          name: "entrada2",
          type: "text",
          label: "Entrada 2",
          placeholder: "Escriba la entrada 2",
          id: "entrada2"
        },

      ]
    });

    await PRMP.present();
  }

  ngOnInit() {
  }

}
