import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dots'
})
export class DotsPipe implements PipeTransform {
  transform(value: string, maxLength: number): string {
    return value.length > maxLength ? `${value.slice(0, maxLength)}...` : value;
  }
}
