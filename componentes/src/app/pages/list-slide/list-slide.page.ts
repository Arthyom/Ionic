import { Component, OnInit, ViewChild } from "@angular/core";
import { DataService } from "../../services/data.service"; 
import { Observable } from "rxjs";
import { IonList } from "@ionic/angular";

@Component({
  selector: "app-list-slide",
  templateUrl: "./list-slide.page.html",
  styleUrls: ["./list-slide.page.scss"],
})
export class ListSlidePage implements OnInit {

  @ViewChild("lista", {static: false}) lista: IonList;

  data: Observable<any>;

  constructor( private servicioJson: DataService ) { }

  ngOnInit() {

    this.data = this.servicioJson.getUsers();
  }

  onClick( user ) {
    console.log(user);
    this.lista.closeSlidingItems();
  }




}
