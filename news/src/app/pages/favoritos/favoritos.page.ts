import { Component, OnInit } from '@angular/core';
import { SavenewsService } from 'src/app/services/savenews.service';
import { Article } from 'src/app/interfaces/noticia';
import { ListSavesService } from 'src/app/services/list-saves.service';
import { RemoveNewsService } from 'src/app/services/remove-news.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  array_Noticias: Article[]
  constructor( private favoritos: ListSavesService, private deleter: RemoveNewsService) { }

  ngOnInit() {

    this.deleter.setDeleter(true);
    this.favoritos.getNewsSaves().then( (val) => {
      this.array_Noticias = val;

    });


  }

  doRefresh(evento){
    this.favoritos.getNewsSaves().then( (val) => {
      this.array_Noticias = val;
      evento.target.complete();
    });

  }


}




