import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { GalleryService } from '../gallery.service';
import { ValidateUrl } from './url.validator';

@Component({
  selector: 'app-gallery-form',
  templateUrl: 'gallery-form.component.html'
})
export class GalleryFormComponent implements OnInit {
  galleryForm: FormGroup;

  constructor(private galleryService: GalleryService,
              private router: Router,
              private route: ActivatedRoute) {}

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
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
