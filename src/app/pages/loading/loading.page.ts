import { Component, OnInit } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-loading",
  templateUrl: "./loading.page.html",
  styleUrls: ["./loading.page.scss"],
})
export class LoadingPage implements OnInit {


  constructor( private loading: LoadingController ) { }

  ngOnInit() {

    this.presentarLoading();
    
    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);

    
  }

  async presentarLoading () {
    const lo = await this.loading.create({
      message: "Cargando, espere por favor...",
      duration: 4000
    });
    return await lo.present();
  }

}
