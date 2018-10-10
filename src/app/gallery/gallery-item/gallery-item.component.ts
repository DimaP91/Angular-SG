import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GalleryImg } from '../gallery.model';

@Component({
  selector: 'app-gallery-item',
  templateUrl: 'gallery-item.component.html',
  styles: [
    '.card .card-content { min-height: 150px; }',
  ]
})
export class GalleryItemComponent {
  @Input() item: GalleryImg;
}
