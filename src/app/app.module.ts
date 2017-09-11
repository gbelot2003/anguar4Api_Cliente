import { routes } from "./app.routes";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageService } from './services/image/image.service';
import { HttpModule } from "@angular/http"

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImagesListComponent } from './gallery/images-list/images-list.component';
import { ImageComponent } from './gallery/images-list/image.component';
import { ImageDetailComponent } from './gallery/image-detail/image-detail.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImagesListComponent,
    ImageComponent,
    ImageDetailComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    routes,
    BrowserModule,
    HttpModule,
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
