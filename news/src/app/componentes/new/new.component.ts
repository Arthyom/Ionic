import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/noticia';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {

  @Input() noticia: Article;
  @Input() indice: number[];
  @Input() url: string;

  constructor() { }

  ngOnInit() {}

}
