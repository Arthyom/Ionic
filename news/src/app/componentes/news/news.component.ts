import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/noticia';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {

  @Input() array_Noticias: Article[];
  

  constructor( private browser: InAppBrowser ) { }

  ngOnInit() {

    
  }

  onClick( url ) {
    const instBrow = this.browser.create(url);
 
  }

}
