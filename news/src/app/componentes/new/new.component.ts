import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/noticia';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { SavenewsService } from 'src/app/services/savenews.service';
import { ListSavesService } from 'src/app/services/list-saves.service';
import { RemoveNewsService } from 'src/app/services/remove-news.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {

  @Input() noticia: Article;
  @Input() indice: number;
  @Input() url: string;
  @Input() borrar: boolean;

  salvados: Article[] ;
  boton = {};


  constructor( private browser: InAppBrowser,
               private action: ActionSheetController,
               private share: SocialSharing,
               private toast: ToastController,
               private saveNews: SavenewsService,
               private listNews: ListSavesService,
               private removerNews: RemoveNewsService,
               private deleter: RemoveNewsService ) { }

  onClick( url ) {
    const instBrow = this.browser.create(url);
    
  }

  moreClick() {
    this.action_Present();
  }

  ngOnInit() {

    this.mostrarBoton();

    this.listNews.getNewsSaves().then( (saved) => {
      if(saved != null || saved != undefined)
        this.salvados = saved;
        else
        this.salvados = new Array();

    })
  }


  async compartir( url: string ){
    this.share.shareWithOptions(  {
    } );
  }

  async action_Present() {
    const act = await this.action.create({  header: 'Opciones', buttons: [
      {
        icon: 'share',cssClass: 'action-dark',
        text: 'Compartir',
        handler: ( () => {
          this.share.share(
            this.noticia.title,
            this.noticia.url,
            null,
            this.noticia.url
          ).then( () =>  this.presentarToast( 'Compartido') );
        })
      },
      this.boton
    ]});

    await act.present();

  }

  async presentarToast( mensaje ) {
    const resultado = await this.toast.create(
      {
        message: mensaje,
        color: 'dark',
        duration: 1500,
        translucent: true,
        closeButtonText: 'Ok'
      }
    );
    await resultado.present();
  }

  mostrarBoton() {
    if(this.removerNews.getDeleter() ){
      this.boton = {
        icon: 'close',cssClass: 'action-dark',
        text: 'Quitar',
        handler: () => {
          this.removerNews.removeNews( this.indice, this.salvados);
        }
      }
    }
    else{
      this.boton = {
        icon: 'star',cssClass: 'action-dark',
        text: 'Favorito',
        handler: () => {
          console.log(this.noticia);
          
          let s = new Array();
          s.push(...new Array(this.noticia));
         
          this.salvados.unshift( this.noticia );
        
          this.saveNews.saveNew( this.salvados );
          this.presentarToast('Guardado');
        }
      }
    }
  }

}
