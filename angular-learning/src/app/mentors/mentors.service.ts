import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorsService {

  rootURL = 'https://my-json-server.typicode.com/zettacamp-virgiawan-kusuma/fake-api-user/mentor';
  mentors!:Observable<any>;

  constructor(
    private http: HttpClient
  ) { }

  getMentors() {
    this.mentors = this.http.get(this.rootURL);
    return this.mentors;
  }

}
