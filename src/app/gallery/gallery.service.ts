import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { GalleryImg } from './gallery.model';
import { LocalStorageService } from '../shared/local-storage.service';
import { FakeDataService } from '../shared/fake-data.service';


@Injectable()
export class GalleryService {
  private STORAGE_KEY = 'galleryItem';

  private galleryItems: GalleryImg[] = [];

  galleryChenged = new Subject<GalleryImg[]>();

  constructor(
    private localStorageService: LocalStorageService,
    private fakeDataService: FakeDataService) {
    this.fetchData();
  }

  setFakeGalleryItems() {
    this.fakeDataService.getGalleryItems()
      .then(
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
    this.galleryItems = this.galleryItems.filter(({ id }) => id !== imgId );
    this.galleryChenged.next(this.galleryItems.slice());
    this.saveData();
  }

  addNewImg(title: string, url: string) {
    const { id: currentLastIdCount } = this.galleryItems[this.galleryItems.length - 1];
    const newImg = new GalleryImg(currentLastIdCount + 1, title, url);
    this.galleryItems.unshift(newImg);
    this.galleryChenged.next(this.galleryItems.slice());
    this.saveData();
  }

  saveData() {
    this.localStorageService.save(this.STORAGE_KEY, this.galleryItems);
  }

  fetchData() {
    const data = this.localStorageService.get(this.STORAGE_KEY);
    data != null
      ? this.galleryItems = data
      : this.setFakeGalleryItems();
  }

  clearData() {
    this.localStorageService.clear();
    this.setFakeGalleryItems();
  }
}
