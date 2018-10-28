import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { GalleryComponent } from './gallery.component';
import { GalleryCardComponent } from './gallery-card/gallery-card.component';
import { GalleryFormComponent } from './gallery-form/gallery-form.component';
import { GalleryService } from './gallery.service';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryImgComponent } from './gallery-img/gallery-img.component';
import { DotsPipe } from '../shared/dots.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    ReactiveFormsModule,
    GalleryRoutingModule,
    CommonModule,
  ],
  declarations: [
    GalleryComponent,
    GalleryCardComponent,
    GalleryFormComponent,
    GalleryImgComponent,
    DotsPipe,
  ],
  providers: [
    GalleryService,
  ]
})
export class GalleryModule { }
