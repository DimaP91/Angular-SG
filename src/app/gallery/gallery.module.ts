import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GalleryComponent } from './gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { GalleryFormComponent } from './gallery-add-form/gallery-form.component';
import { GalleryService } from './gallery.service';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryImgComponent } from './gallery-img/gallery-img.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GalleryRoutingModule,
  ],
  declarations: [
    GalleryComponent,
    GalleryItemComponent,
    GalleryFormComponent,
    GalleryImgComponent,
  ],
  providers: [
    GalleryService,
  ]
})
export class GalleryModule { }
