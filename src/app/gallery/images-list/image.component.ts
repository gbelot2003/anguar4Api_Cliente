import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../models/image';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./images.component.css']
})
export class ImageComponent implements OnInit {
  @Input() image: Image;
  @Input('master') masterName: string;
  constructor() { }

  ngOnInit() {
  }

}
