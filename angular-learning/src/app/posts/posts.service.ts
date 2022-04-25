import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './post.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient,
  ) { }

  createAndStorePost(title: string, body:string){
    const postData: Post = {title: title, body: body};
    this.http
      .post<{ name: string }>(
        'https://jsonplaceholder.typicode.com/posts',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  fetchPosts(){
    return this.http
      .get<{ [key: string]: Post }>(
        'https://jsonplaceholder.typicode.com/posts'
      )
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      )
  }
}
