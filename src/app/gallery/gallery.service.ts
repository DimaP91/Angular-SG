import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';

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
          this.galleryItems = res.reverse();
          this.galleryChenged.next(this.galleryItems.slice());
        }
    );
  }

  getGalleryItems() {
    return this.dataStorageService.get(API_ROUTE);
  }

  getImgById(Imgid: number) {
    return this.dataStorageService.getById(API_ROUTE, Imgid);
  }

  deleteImgById(imgId: number) {
    this.dataStorageService.delete(API_ROUTE, imgId)
      .subscribe(
        () => this.fetchData()
      );
  }

  addNewImg(title: string, url: string) {
    const { id } = this.galleryItems[0];
    const newImg = new GalleryImg(id + 1, title, url);
    this.dataStorageService.post(API_ROUTE, newImg)
      .subscribe(
        () =>  {
          this.fetchData();
        }
      );
  }
}
