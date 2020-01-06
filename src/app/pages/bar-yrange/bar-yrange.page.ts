import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-yrange',
  templateUrl: './bar-yrange.page.html',
  styleUrls: ['./bar-yrange.page.scss'],
})
export class BarYrangePage implements OnInit {

  rango: number;
  tipoBarra: string;

  buf: number;
  rango2: number;
  tipoBarra2: string;

  constructor() { }

  ngOnInit() {
  }

  rangeChange( event ) {

    this.rango = event.detail.value/100;
    this.tipoBarra = "default";
  }

  rangeChange2( event ) {

    this.rango2 = event.detail.value/100;
    this.buf = event.detail.value/100 + .2 ;
    this.tipoBarra2 = "default";
  }

  

}
