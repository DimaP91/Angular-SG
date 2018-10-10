import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GalleryImg } from '../gallery.model';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery-img',
  templateUrl: 'gallery-img.component.html'
})
export class GalleryImgComponent implements OnInit {
  galleryImg: GalleryImg;

  constructor(private galleryService: GalleryService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      ({ id }) => {
        this.galleryImg = this.galleryService.getImgById(+id);
      }
    );
  }

  onDelete(id: number) {
    this.galleryService.deleteImgById(id);
  }
}
