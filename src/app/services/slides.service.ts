import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SlidesService {

  constructor( private http: HttpClient) { }

  conseguirNombre( ) {
    return this.http.get('/assets/slides/info.json');
  }

}
