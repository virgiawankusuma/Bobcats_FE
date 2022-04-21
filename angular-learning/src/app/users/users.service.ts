import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users = [
    {
      id: 0,
      name: 'John Doe',
      email: 'johndoe@mail.com',
      phoneNumber: '081098765432',
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
      email: 'harmonie@gmail.com',
      phoneNumber: '081234123476',
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

  constructor(
    private loggingService: LoggingService
  ) { }

  getUser(id: number){
    const user = this.users.find(
      (u) => {
        return u.id === id
      }
    );
    return user;
  }

  addUser(user: any){
    this.users.push(user);
    this.loggingService.logUserAdded(user);
  }

  updateUser(user: any){
    this.users[user.id] = user;
    this.loggingService.logUserUpdated(user);
  }
}
