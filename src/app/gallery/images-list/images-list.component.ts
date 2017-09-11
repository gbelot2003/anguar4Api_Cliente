import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../models/image';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styles: []
})
export class ImagesListComponent implements OnInit {
  image = new Image('1', 'Primer Imagen', "Descripcion primera imagen", 'assets/imagenes/thum/1gal.jpg', 'assets/imagenes/1gal.jpg');
  constructor() { }

  ngOnInit() {
  }

}
