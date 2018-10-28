import { AbstractControl } from '@angular/forms';

const URL_REGEXP = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');

export function ValidateUrl(control: AbstractControl): { [key: string]: boolean } | null {
  return URL_REGEXP.test(control.value) ? null : { validUrl: true };
}
