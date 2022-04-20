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

  addUser(name: string, passport: number, age: number, gender: string, professions: string, maritalStatus: string, addresses: string[])
  {
    this.users.push({
      id: this.users.length+1,
      name: name,
      passport: passport,
      age: age,
      gender: gender,
      professions: professions,
      maritalStatus: maritalStatus,
      addresses: addresses
    })
  }
}
