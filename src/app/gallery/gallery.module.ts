import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { GalleryService } from './gallery.service';
import { GalleryAddForm } from './gallery-add-form/gallery-add-form.component';
import { FormsModule } from '@angular/forms';

const components = [
  GalleryComponent,
  GalleryItemComponent,
  GalleryAddForm,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule
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
