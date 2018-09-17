import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GalleryService } from './gallery.service';
import { GalleryImg } from './gallery.model';

@Component({
  selector: 'app-gallery',
  templateUrl: 'gallery.component.html'
})
export class GalleryComponent implements OnInit{
  constructor(private galleryServise: GalleryService) {}

  gelleryItems: GalleryImg[];

  ngOnInit() {
    this.gelleryItems = this.galleryServise.getGalleryItems();
  }
}