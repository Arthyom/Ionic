import { Component, OnInit } from "@angular/core";
import { ActionSheetController } from "@ionic/angular";

@Component({
  selector: "app-action-sheet",
  templateUrl: "./action-sheet.page.html",
  styleUrls: ["./action-sheet.page.scss"],
})
export class ActionSheetPage implements OnInit {

  constructor( public actionSheet: ActionSheetController ) { }

  async mostrarAction (){
    const ACTOBJ = await this.actionSheet.create({
      header: "Action-sheet",
      buttons:[{
        text: "Gatishi",
        role: "ishy",
        icon: "ishy",
        handler: ()=>{
          console.log("Se oprimio gatishy");
        }
      }]
    });

    await  ACTOBJ.present();
  }

  ngOnInit() {
  }

}
