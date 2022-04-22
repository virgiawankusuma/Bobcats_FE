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
    return users.filter((user:any) => {
      return user[prop].replace(/\s/g, '').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(keyword.toLowerCase());
    });
  }

}
