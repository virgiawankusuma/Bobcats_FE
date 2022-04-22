import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(users: any, keyword: string, prop: string): any {
    if (!users.length || !keyword) {
      return users;
    }
    const resultaArray = [];
    for (const user of users){
      if(user[prop] === keyword){
        resultaArray.push(user);
      }
    }
    return resultaArray;
  }

}
