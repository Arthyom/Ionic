import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {

  constructor( private clienteHtpp: HttpClient ) { }


  getUsers( ) {

    return this.clienteHtpp.get("https://jsonplaceholder.typicode.com/users");

  }

}
