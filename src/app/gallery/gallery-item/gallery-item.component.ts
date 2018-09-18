import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GalleryImg } from '../gallery.model';

@Component({
  selector: 'app-gallery-item',
  templateUrl: 'gallery-item.component.html',
})
export class GalleryItemComponent {
  @Input() item: GalleryImg;
  @Output() delete = new EventEmitter<number>();

  onClick(id: number) {
    this.delete.emit(id);
  }
}
