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
    this.dataStorageService.delete(API_ROUTE, imgId).subscribe();
    this.galleryChenged.next(this.galleryItems.slice());

  }

  addNewImg(title: string, url: string) {
    const { id: currentLastIdCount } = this.galleryItems[this.galleryItems.length - 1];
    const newImg = new GalleryImg(currentLastIdCount + 1, title, url);
    this.dataStorageService.post(API_ROUTE, newImg)
      .subscribe(
        res => console.log(res),
        e => console.log(e)
      );
    this.galleryChenged.next(this.galleryItems.slice());
  }
}
