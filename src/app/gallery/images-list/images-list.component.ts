import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../models/image';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styles: []
})
export class ImagesListComponent implements OnInit {
  images: Image[] = [
    new Image('1', 'Primer Imagen', "Descripcion primera imagen", '/assets/imagenes/thum/1gal.jpg', '/assets/imagenes/1gal.jpg'),
    new Image('2', 'Segunda Imagen', "Descripcion primera imagen", '/assets/imagenes/thum/2gal.jpg', '/assets/imagenes/2gal.jpg'),
    new Image('3', 'Tercera Imagen', "Descripcion primera imagen", '/assets/imagenes/thum/3gal.jpg', '/assets/imagenes/3gal.jpg'),
    new Image('4', 'Cuarta Imagen', "Descripcion primera imagen", '/assets/imagenes/thum/4gal.jpg', '/assets/imagenes/4gal.jpg'),
    new Image('5', 'Quinta Imagen', "Descripcion primera imagen", '/assets/imagenes/thum/5gal.jpg', '/assets/imagenes/5gal.jpg'),
    new Image('6', 'Sexta Imagen', "Descripcion primera imagen", '/assets/imagenes/thum/6gal.jpg', '/assets/imagenes/6gal.jpg'),
    new Image('7', 'Septima Imagen', "Descripcion primera imagen", '/assets/imagenes/thum/7gal.jpg', '/assets/imagenes/7gal.jpg'),
    new Image('1', 'Octava Imagen', "Descripcion primera imagen", '/assets/imagenes/thum/8gal.jpg', '/assets/imagenes/8gal.jpg'),

  ];
  master = 'Master';
  constructor() { }

  ngOnInit() {
  }

}
