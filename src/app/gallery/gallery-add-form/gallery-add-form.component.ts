import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-gallery-add-form',
  templateUrl: 'gallery-add-form.component.html'
})
export class GalleryAddForm {

  onAddNewImg(form: NgForm) {
    const { value: { title, url } } = form;
    console.log(
      'titleInput:', title,
      'urlInput:', url
    )
  }
}
