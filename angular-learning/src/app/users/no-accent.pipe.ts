import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noAccent'
})
export class NoAccentPipe implements PipeTransform {

  transform(value: any): any {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // src https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
  }
}
