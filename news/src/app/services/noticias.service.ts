import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../interfaces/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private news: HttpClient ) { }

  getNews() {
    const url = 'https://newsapi.org/v2/top-headlines?country=mx&apiKey=9a84832ce4964ae687fdc04adf9798a7';
    return this.news.get<Noticia>(url);
  }

  getNewsByCategory( category: string ){
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=9a84832ce4964ae687fdc04adf9798a7`
    return this.news.get<Noticia>(url);
  }


}
