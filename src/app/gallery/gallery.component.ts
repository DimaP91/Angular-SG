import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { GalleryService } from './gallery.service';
import { GalleryImg } from './gallery.model';

@Component({
  selector: 'app-gallery',
  templateUrl: 'gallery.component.html'
})
export class GalleryComponent implements OnInit, OnDestroy {
  constructor(private galleryServise: GalleryService) {}
  gelleryItems: GalleryImg[];
  subscription: Subscription;


  ngOnInit() {
    this.gelleryItems = this.galleryServise.getGalleryItems();
    this.subscription = this.galleryServise.galleryChenged.subscribe(
      (galleryImgs: GalleryImg[]) => {
        this.gelleryItems = galleryImgs;
      }
    );
  }

  handleDelete(imgId: number) {
    this.galleryServise.deleteImgById(imgId);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
