import { Component, Input } from '@angular/core';
import { GalleryImg } from '../gallery.model';

@Component({
  selector: 'app-gallery-card',
  templateUrl: 'gallery-card.component.html',
  styles: [
    '.card .card-image img { height: 170px; }',
    '.card-content { min-height: 92px; }'
  ]
})
export class GalleryCardComponent {
  @Input() item: GalleryImg;
}
