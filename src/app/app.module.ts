import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ImageService} from './services/image/image.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImagesListComponent } from './gallery/images-list/images-list.component';
import { ImageComponent } from './gallery/images-list/image.component';
import { ImageDetailComponent } from './gallery/image-detail/image-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImagesListComponent,
    ImageComponent,
    ImageDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
