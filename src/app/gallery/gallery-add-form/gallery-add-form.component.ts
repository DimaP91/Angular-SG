import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { GalleryService } from "../gallery.service";

@Component({
  selector: 'app-gallery-add-form',
  templateUrl: 'gallery-add-form.component.html'
})
export class GalleryAddForm {

  constructor(private galleryService: GalleryService) {}

  onAddNewImg(form: NgForm) {
    const { value: { title, url } } = form;
    this.galleryService.addNewImg(title, url);
  }
}
