import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Peliculas, Respuesta } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesServicesService {

  constructor( private movies: HttpClient ) { }

  Movies_GetMovies( year: number ): Observable<Respuesta> {
    const url = this.Movies_CreateQuerry( year );
    console.log('movies from year', url);
    return this.Movies_ExecuteQuerry(url);
  }

  Movies_CreateQuerry( year: number, popularity?: string ) {
    const url = `${environment.Movies_GeneralURL}${year}&${popularity}`;
    return url;
  }

  Movies_ExecuteQuerry( QuerryString: string ): Observable<Respuesta> {
    return this.movies.get<Respuesta>(QuerryString);
  }

  Movies_PopularFromCurrentYear(): Observable<Respuesta> {
    const year = new Date().getFullYear();
    const url = this.Movies_CreateQuerry(year, 'sort_by=popularity.asc' );
    return this.Movies_ExecuteQuerry(url);
  }
}
