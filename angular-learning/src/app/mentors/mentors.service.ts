import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorsService {

  rootURL = 'https://my-json-server.typicode.com/zettacamp-virgiawan-kusuma/fake-api-user/mentor';
  mentors!:Observable<any>;

  coba = [
    {
      _id: '1',
      email: 'johndoe@mail.com',
      civility: 'MR',
      first_name: 'john',
      last_name: 'doe',
      date_of_birth: '01/01/1990',
      gender: 'male',
      user_status: 'active'
    }
  ]

  cobaBaru = new BehaviorSubject<any>(this.coba);
  cobaBaru$ = this.cobaBaru.asObservable();
  

  constructor(
    private http: HttpClient
  ) { }

  getMentors() {
    this.mentors = this.http.get(this.rootURL);
    return this.mentors;
  }

  addUser(user: any) {
    return this.http.post(this.rootURL, user);
  }

  addCobaBaru(data: any){
    this.coba.splice(0, 0, data);
    this.cobaBaru.next(this.coba);
  }

}
