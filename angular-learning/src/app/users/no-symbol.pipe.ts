import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noSymbol'
})
export class NoSymbolPipe implements PipeTransform {

  transform(value: any): any {
    return value.replace(/[^\w\s]/gi, '');
  }

}
