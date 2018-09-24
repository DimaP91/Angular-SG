import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { GalleryService } from "../gallery.service";
import { ValidateUrl } from "./url.validator";

@Component({
  selector: 'app-gallery-add-form',
  templateUrl: 'gallery-add-form.component.html'
})
export class GalleryAddForm implements OnInit {
  galleryForm: FormGroup;

  constructor(private galleryService: GalleryService) {}

  ngOnInit() {
    this.galleryForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'url': new FormControl(null, [Validators.required, ValidateUrl])
    });
  }

  onSubmit() {
    const { value: { title, url } } = this.galleryForm;
    this.galleryService.addNewImg(title, url);
    this.galleryForm.reset();
  }
}
