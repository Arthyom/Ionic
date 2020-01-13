import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/noticia';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {

  @Input() array_Noticias: Article[];
  @Input() borrar: boolean;

  constructor(  ) { }

  ngOnInit() {

    console.log(this.borrar)
  }



}
