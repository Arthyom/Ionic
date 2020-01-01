import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-infite",
  templateUrl: "./infite.page.html",
  styleUrls: ["./infite.page.scss"],
})
export class InfitePage implements OnInit {



  data: any [] =  Array(60);

  constructor() { }

  ngOnInit() {
  }

  onInfinite( event ) {
    setTimeout( () => {
        const CONS = Array(30);
        this.data.push(...CONS);

        if ( this.data.length > 290 ) {
          event.target.disabled = true;
          return;
        }

        event.target.complete();

        }, 1000
    );
  }

}
