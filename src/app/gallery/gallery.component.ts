import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { GalleryService } from './gallery.service';
import { GalleryImg } from './gallery.model';

@Component({
  selector: 'app-gallery',
  templateUrl: 'gallery.component.html',
})
export class GalleryComponent implements OnInit, OnDestroy {
  constructor(private galleryServise: GalleryService,
              private route: ActivatedRoute) {}
  gelleryItems: GalleryImg[];
  subscription: Subscription;


  ngOnInit() {
    this.gelleryItems = this.route.snapshot.data.gallery;
    this.subscription = this.galleryServise.galleryChenged.subscribe(
      (galleryImgs: GalleryImg[]) => {
        this.gelleryItems = galleryImgs;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
