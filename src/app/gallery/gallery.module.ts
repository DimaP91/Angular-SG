import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { GalleryService } from './gallery.service';

const components = [
  GalleryComponent,
  GalleryItemComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ],
  providers: [
    GalleryService
  ]
})
export class GalleryModule { }
