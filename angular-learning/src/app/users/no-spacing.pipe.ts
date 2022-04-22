import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noSpacing'
})
export class NoSpacingPipe implements PipeTransform {

  transform(value: any): any {
    return value.replace(/\s/g, '');
  }

}
