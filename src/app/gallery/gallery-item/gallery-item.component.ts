import { Component, Input } from '@angular/core';
import { GalleryImg } from '../gallery.model';

@Component({
  selector: 'app-gallery-item',
  templateUrl: 'gallery-item.component.html',
})
export class GalleryItemComponent {
  @Input() item: GalleryImg;
}
