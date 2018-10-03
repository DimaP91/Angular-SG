import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GalleryComponent } from './gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { GalleryFormComponent } from './gallery-add-form/gallery-form.component';
import { GalleryService } from './gallery.service';

const components = [
  GalleryComponent,
  GalleryItemComponent,
  GalleryFormComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
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
