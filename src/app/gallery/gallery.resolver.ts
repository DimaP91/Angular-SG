import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GalleryService } from './gallery.service';

@Injectable()
export class GalleryResolver implements Resolve<Observable<Object>> {
  constructor(private galleryService: GalleryService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.galleryService.getGalleryItems();
  }
}
