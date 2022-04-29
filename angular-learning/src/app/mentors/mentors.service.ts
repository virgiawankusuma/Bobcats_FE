import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorsService {

  rootURL = 'https://my-json-server.typicode.com/zettacamp-virgiawan-kusuma/fake-api-user/mentor';
    
  mentors = [
    {
      "_id": "1",
      "email": "frederic.feldesi@yopmail.com",
      "civility": "MR",
      "first_name": "Frédéric",
      "last_name": "FELDESI",
      "date_of_birth": "19/02/1961",
      "gender": "Male",
      "company": {
        "name": "Company",
        "user_type": "Mentor"
      },
      "user_status": "pending"
    },
    {
      "_id": "2",
      "email": "nadia.bonomally@yopmail.com",
      "civility": "MRS",
      "first_name": "Nadia",
      "last_name": "BONOMALLY",
      "date_of_birth": "01/01/1978",
      "gender": "Female",
      "company": {
        "name": "Company",
        "user_type": "Mentor"
      },
      "user_status": "active"
    },
    {
      "_id": "3",
      "email": "dominique.monachon@yopmail.com",
      "civility": "MR",
      "first_name": "Dominique",
      "last_name": "MONACHON",
      "date_of_birth": "01/01/1978",
      "gender": "Male",
      "company": {
        "name": "Company",
        "user_type": "Mentor"
      },
      "user_status": "pending"
    },
    {
      "_id": "4",
      "email": "annie.massard@yopmail.com",
      "civility": "MRS",
      "first_name": "Annie",
      "last_name": "MASSARD",
      "date_of_birth": "01/01/1978",
      "gender": "Female",
      "company": {
        "name": "Company",
        "user_type": "Mentor"
      },
      "user_status": "pending"
    },
    {
      "_id": "5",
      "email": "remi.colindre@yopmail.com",
      "civility": "MR",
      "first_name": "Rémi",
      "last_name": "COLINDRE",
      "date_of_birth": "01/01/1978",
      "gender": "Non-binary/non-conforming",
      "company": {
        "name": "Company",
        "user_type": "Mentor"
      },
      "user_status": "active"
    },
    {
      "_id": "6",
      "email": "nancy.leo@yopmail.com",
      "civility": "MRS",
      "first_name": "Nancy",
      "last_name": "LEO",
      "date_of_birth": "19/02/1961",
      "gender": "Female",
      "company": {
        "name": "Company",
        "user_type": "Mentor"
      },
      "user_status": "active"
    },
    {
      "_id": "7",
      "email": "amine.daha@yopmail.com",
      "civility": "MR",
      "first_name": "Amine",
      "last_name": "DAHA",
      "date_of_birth": "19/02/1961",
      "gender": "Female",
      "company": {
        "name": "Company",
        "user_type": "Mentor"
      },
      "user_status": "pending"
    },
    {
      "_id": "8",
      "email": "cedric.beyhurst@yopmail.com",
      "civility": "MR",
      "first_name": "Cédric",
      "last_name": "BEYHURST",
      "date_of_birth": "19/02/1961",
      "gender": "Non-binary/non-conforming",
      "company": {
        "name": "Company",
        "user_type": "Mentor"
      },
      "user_status": "pending"
    },
    {
      "_id": "9",
      "email": "pierre-alain.bony@yopmail.com",
      "civility": "MR",
      "first_name": "Pierre-Alain",
      "last_name": "BONY",
      "date_of_birth": "12/12/1991",
      "gender": "Prefer not to respond",
      "company": {
        "name": "Company",
        "user_type": "Mentor"
      },
      "user_status": "active"
    },
    {
      "_id": "10",
      "email": "laurent.melisse@yopmail.com",
      "civility": "MR",
      "first_name": "Laurent",
      "last_name": "MELISSE",
      "date_of_birth": "12/12/1991",
      "gender": "Female",
      "company": {
        "name": "Company",
        "user_type": "Mentor"
      },
      "user_status": "pending"
    },
    {
      "_id": "11",
      "email": "patrick.pagonis@yopmail.com",
      "civility": "MR",
      "first_name": "Patrick",
      "last_name": "PAGONIS",
      "date_of_birth": "12/12/1991",
      "gender": "Male",
      "company": {
        "name": "Company",
        "user_type": "Mentor"
      },
      "user_status": "active"
    },
    {
      "_id": "12",
      "email": "patrick.pagonis@yopmail.com",
      "civility": "MR",
      "first_name": "Patrick",
      "last_name": "PAGONIS",
      "date_of_birth": "12/12/1991",
      "gender": "Male",
      "company": {
        "name": "Company",
        "user_type": "Mentor"
      },
      "user_status": "pending"
    },
    {
      "_id": "13",
      "email": "anne-laure.collard@yopmail.com",
      "civility": "MR",
      "first_name": "Pierrick",
      "last_name": "MESSON",
      "date_of_birth": "22/01/1992",
      "gender": "Female",
      "company": {
        "name": "Company",
        "user_type": "Mentor"
      },
      "user_status": "pending"
    },
    {
      "_id": "14",
      "email": "sylvie.dupin@yopmail.com",
      "civility": "MRS",
      "first_name": "Sylvie",
      "last_name": "DUPIN",
      "date_of_birth": "22/01/1992",
      "gender": "Prefer not to respond",
      "company": {
        "name": "Company",
        "user_type": "Mentor"
      },
      "user_status": "pending"
    },
    {
      "_id": "15",
      "email": "lionel.darve@yopmail.com",
      "civility": "MR",
      "first_name": "Lionel",
      "last_name": "DARVE",
      "date_of_birth": "10/01/1992",
      "gender": "Male",
      "company": {
        "name": "Company",
        "user_type": "Mentor"
      },
      "user_status": "pending"
    }
  ];
  
  mentorsNew = new BehaviorSubject<any>(this.mentors);
  mentorsNew$ = this.mentorsNew.asObservable();

  constructor(
    private http: HttpClient,
  ) { }

  getMentors() {
    return this.mentorsNew$;
  }

  addUser(data: any) {
    this.mentors.push(data);
    this.mentorsNew.next(this.mentors);
  }

}
