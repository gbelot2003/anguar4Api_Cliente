import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImagesListComponent } from './gallery/images-list/images-list.component';
import { ImageComponent } from './gallery/images-list/image.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImagesListComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
