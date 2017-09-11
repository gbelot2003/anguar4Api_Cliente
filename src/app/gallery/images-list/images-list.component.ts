import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../models/image';
import { ImageService } from '../../services/image/image.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styles: []
})
export class ImagesListComponent implements OnInit {

  images: Observable<Image[]>;
  selectedImage: Image;

  constructor(private imageService:ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

  onSelect(image: Image){
    this.selectedImage = image;
  }

}
