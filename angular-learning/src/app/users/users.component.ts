import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  classListItem = 'list-group-item d-flex justify-content-between align-items-start';

  // users:  { id:number, name:string, passport:number, age:number, gender:string, professions:string, maritalStatus:string }[]= [];
  users: any;

  constructor(
    private userService: UsersService
  ) { }

  filtered:any = '';

  // userName = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('John');
  //   }, 2000);
  // });

  ngOnInit(): void {
    this.users = this.userService.users;
  }

}
