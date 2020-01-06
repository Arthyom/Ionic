import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-check",
  templateUrl: "./check.page.html",
  styleUrls: ["./check.page.scss"],
})
export class CheckPage implements OnInit {


  checks = [
    {
      color: "primary",
      selected: true
    },

    {
      color: "secondary",
      selected: false
    },

    {
      color: "light",
      selected: false
    }
  ];


  onClick( ch ){
    console.log(ch);
  }

  constructor() { }

  ngOnInit() {
  }

}
