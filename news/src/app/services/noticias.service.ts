import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../interfaces/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  categoria_Anterior: string;
  categoria_Page: number = 1;

  constructor( private news: HttpClient ) { }

  getNews() {
    const url = 'https://newsapi.org/v2/top-headlines?country=mx&apiKey=9a84832ce4964ae687fdc04adf9798a7';
    return this.news.get<Noticia>(url);
  }

  getNewsByCategory( category: string ){
    
    console.log('entrando en el servicio');

    

    if( category == this.categoria_Anterior )
      this.categoria_Page ++;
    else
      this.categoria_Page = 1;
    
    this.categoria_Anterior = category;

    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&page=${this.categoria_Page}&apiKey=9a84832ce4964ae687fdc04adf9798a7`
    

    console.log('categoria', this.categoria_Anterior, 'incremento', this.categoria_Page);

    return this.news.get<Noticia>(url);

  }


}
