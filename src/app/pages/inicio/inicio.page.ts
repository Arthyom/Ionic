import { Component, OnInit } from "@angular/core";
import { MenuController } from "@ionic/angular";
import { MenuService } from '../../services/menu.service';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/componentes';

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.page.html",
  styleUrls: ["./inicio.page.scss"],
})
export class InicioPage implements OnInit {

  menuItems: Observable<Componente []>;

  constructor( private menu: MenuController, private menuService: MenuService ) { }



  ngOnInit() {
    this.getMenuItems();
  }

  togleMenu() {
    this.menu.toggle();
  }

  getMenuItems() {
    this.menuItems = this.menuService.getMenuData();
  }

}


