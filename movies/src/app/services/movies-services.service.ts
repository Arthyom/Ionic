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

  Movies_GetMovies( year: number, querry: string='' ): Observable<Respuesta> {
    const url = this.Movies_CreateQuerry(year, querry);
    console.log(url)
    return this.Movies_ExecuteQuerry(url);

  
  }

  Movies_CreateQuerry( year: number, popularity: string = '' ) {
    const url = `${environment.Movies_GeneralURL}&primary_release_year=${year}${popularity}`;
    return url;
  }

  Movies_ExecuteQuerry( QuerryString: string ): Observable<Respuesta> {
    return this.movies.get<Respuesta>(QuerryString);
  }

  Movies_PopularFromCurrentYear( querry: string ): Observable<Respuesta> {
    const year = new Date().getFullYear();
    const url = this.Movies_CreateQuerry(year, querry );
    return this.Movies_ExecuteQuerry(url);
  }

  Movies_UnPopularFromCurrentYear( querry: string ): Observable<Respuesta> {
    const year = new Date().getFullYear();
    const url = this.Movies_CreateQuerry(year, querry );
    console.log('url ', url);

    return this.Movies_ExecuteQuerry(url);
  }

  Movies_ExecuteVoidQuerry(url: string): Observable<any>{
    return this.movies.get(url);
  }

  Movies_Details( id: string ) {
    const url = environment.Movies_DetailURL.replace( '{idmovie}', id);
    return this.Movies_ExecuteVoidQuerry(url);
  }

  Movies_ActorsDetails( idActor: string ) {
    const url = environment.Credits_DetailURL.replace( '{idmovie}', idActor);
    return this.Movies_ExecuteVoidQuerry(url);
  }

  Movies_FindMovieByName( name: string ) {
    const url = environment.Movies_FindURL.replace( '{movie}', name);
    return this.Movies_ExecuteVoidQuerry(url);
  }


}
