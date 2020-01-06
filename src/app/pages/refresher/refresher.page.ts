import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  datos: any [] = Array(0);

  constructor() { }

  ngOnInit() {
  }


  doRefresh( evento ){

    
    setTimeout(() => {

      this.datos.push(... new Array(30) );
      
      
    }, 1000);
    evento.target.complete();
  

  }

}
