import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GalleryComponent } from './gallery.component';
import { GalleryFormComponent } from './gallery-form/gallery-form.component';
import { GalleryImgComponent } from './gallery-img/gallery-img.component';
import { GalleryCardResolver } from './gallery-card/gallery-card.resolver';
import { GalleryResolver } from './gallery.resolver';

const galleryRoutes: Routes = [
  { path: '', component: GalleryComponent, resolve: { gallery: GalleryResolver } },
  { path: 'new', component: GalleryFormComponent },
  { path: ':id', component: GalleryImgComponent, resolve: { imgItem: GalleryCardResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(galleryRoutes)],
  exports: [RouterModule],
  providers: [
    GalleryResolver,
    GalleryCardResolver,
  ]
})
export class GalleryRoutingModule {}
