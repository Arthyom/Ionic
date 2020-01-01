import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.page.html",
  styleUrls: ["./calendar.page.scss"],
})
export class CalendarPage implements OnInit {

  fecha: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

  onChange(event) {

    console.log("fecha como value", this.fecha );
    console.log(this.fecha);
    console.log(event);
    console.log("fecha", new Date (event.detail.value ));
  }

}
