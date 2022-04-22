import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filter: string, name: string): any {
    if (!value.length || !filter) {
      return value;
    }
    const resultaArray = [];
    for (const item of value){
      if(item[name] === filter){
        resultaArray.push(item);
      }
    }
    return resultaArray;
  }

}
