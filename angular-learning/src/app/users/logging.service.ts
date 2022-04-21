import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  logUserAdded(user: any){
    // console.log(`A new user added, name: ${user.name}, email: ${user.email}`);
    Swal.fire(
      'User successfully added!',
      `A new user added, name: ${user.name}, email: ${user.email}`,
      'success'
    )
  }

  logUserUpdated(user: any){
    // console.log(`User ${user.name} updated`);
    Swal.fire(
      'User successfully updated!',
      `User ${user.name} updated`,
      'success'
    )
  }
  
  logUserDeleted(user: any){
    console.log(`User ${user.name} deleted`);
  }

  constructor() { }
}
