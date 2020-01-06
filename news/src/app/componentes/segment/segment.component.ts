import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Noticia, Article } from 'src/app/interfaces/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss'],
})
export class SegmentComponent implements OnInit {

  @ViewChild(IonSegment, {static: true})  segmento: IonSegment;
  @Output() noticias_Salida = new EventEmitter();
  array_Noticias: Article[];

  categorias: string[ ] = [ 'general','business', 'entertainment',
   'health', 'science','sports', 'technology' ]

  constructor( private noticia: NoticiasService ) { }

  ngOnInit() {
    this.segmento.value = this.categorias[0];
    console.log( this.segmento.value)
  }

  segmentChanged( evento ){
    const categoria = evento.detail.value;
    this.noticia.getNewsByCategory(categoria).subscribe( (resp)=>{
      this.array_Noticias = resp.articles;
      this.noticias_Salida.emit({ noticias_Salida: this.noticias_Salida });
    });
  }

}
