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
    this.gelleryItems = this.galleryServise.getGalleryItems()
    this.galleryServise.galleryChenged.subscribe(
      (galleryImgs: GalleryImg[]) => {
        this.gelleryItems = galleryImgs;
      }
    );
  }

  handleDelete(imgId: number) {
    // const index = this.gelleryItems.findIndex(({ id }) => id === imgId);
    // this.galleryServise.deleteImgByIndex(index);
    
    this.galleryServise.deleteImgById(imgId);
  }
}