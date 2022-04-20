import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users = [
    {
      id: 0,
      name: 'John Doe',
      passport: 123456789,
      age: 30,
      gender: 'Male',
      professions: 'Sailorman',
      maritalStatus: 'Maried',
      addresses: [
        'asss', 'asasass'
      ]
    },
    {
      id: 1,
      name: 'Harmonie',
      passport: 876545678,
      age: 21,
      gender: 'Female',
      professions: 'College Student',
      maritalStatus: 'Single',
      addresses: [
        'asss', 'asasass'
      ]
    }
  ]

  constructor() { }

  getUser(id: number){
    const user = this.users.find(
      (u) => {
        return u.id === id
      }
    );
    return user;
  }

  addUser(user: any)
  {
    this.users.push(user);
  }
}
