import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery/gallery-item/gallery-item.component';
import { GalleryService } from './gallery/gallery.service';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GalleryItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
