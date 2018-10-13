import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { GalleryImg } from '../gallery.model';
import { GalleryService } from '../gallery.service';


@Injectable()
export class GalleryCardResolver implements Resolve<Observable<Object>> {

  constructor(private galleryService: GalleryService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id');
    return this.galleryService.getImgById(+id);
  }
}
