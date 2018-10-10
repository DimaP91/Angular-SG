import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GalleryComponent } from './gallery.component';
import { GalleryFormComponent } from './gallery-add-form/gallery-form.component';
import { GalleryImgComponent } from './gallery-img/gallery-img.component';

const galleryRoutes: Routes = [
  { path: 'gallery', children: [
    { path: '', component: GalleryComponent },
    { path: 'new', component: GalleryFormComponent },
    { path: ':id', component: GalleryImgComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(galleryRoutes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule {}
