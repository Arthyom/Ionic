import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { RemoveNewsService } from 'src/app/services/remove-news.service';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {



  constructor( private remover: RemoveNewsService ) { }

  ngOnInit(  ) {
    
   
  }

  set(){
    this.remover.setDeleter(false);
  }

  get(){
    this.remover.setDeleter(true);
  }
  


  

}
