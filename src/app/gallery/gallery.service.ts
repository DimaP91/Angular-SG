import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { GalleryImg } from './gallery.model';
import { DataStorageService } from '../shared/data-storage.service';

const API_ROUTE = 'gallery';

@Injectable()
export class GalleryService {
  private galleryItems: GalleryImg[] = [];
  galleryChenged = new Subject<GalleryImg[]>();

  constructor(private dataStorageService: DataStorageService) {
     this.fetchData();
  }

  fetchData() {
    this.dataStorageService.get(API_ROUTE)
    .subscribe(
      (res: GalleryImg[]) => {
        this.galleryItems = res;
        this.galleryChenged.next(this.galleryItems.slice());
      }
  );
  }

  getGalleryItems() {
    return this.galleryItems.slice();
  }

  deleteImgById(imgId: number) {
    this.dataStorageService.delete(API_ROUTE, imgId)
      .then(
        () => this.fetchData()
      );
  }

  addNewImg(title: string, url: string) {
    const id = this.galleryItems.length + 1;
    const newImg = new GalleryImg(id, title, url);
    this.dataStorageService.post(API_ROUTE, newImg)
      .then(
        () =>  {
          this.fetchData();
        }
      );
  }
}
