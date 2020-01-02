import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popoverinfo',
  templateUrl: './popoverinfo.component.html',
  styleUrls: ['./popoverinfo.component.scss'],
})
export class PopoverinfoComponent implements OnInit {


  data: any[] = Array(45);


  constructor( private popControl: PopoverController ) { }

  ngOnInit() {}

  onClick (elemento){

  
    this.popControl.dismiss({
      datos: elemento
    });

  }



}
