import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GalleryImg } from '../gallery/gallery.model';

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {
  private galleryUrl = 'assets/fake-gallery-data.json';

  constructor(private http: HttpClient) {}

  getGalleryItems() {
    return this.http.get<GalleryImg[]>(this.galleryUrl)
      .toPromise();
  }
}
