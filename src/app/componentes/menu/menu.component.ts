import { Component, OnInit } from "@angular/core";
import { MenuService } from 'src/app/services/menu.service';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/componentes';

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {

  menuItems: Observable<Componente[]>;

  constructor( private servicio: MenuService ) { }

  ngOnInit() { 
    this.getMenuItems();
  }

  getMenuItems() {
    this.menuItems =  this.servicio.getMenuData();
  } 

}
