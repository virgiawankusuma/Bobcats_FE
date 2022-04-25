import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  rootUrl = 'https://jsonplaceholder.typicode.com';
  posts!:Observable<Post[]>;

  constructor(
    private http: HttpClient,
  ) { }

  fetchPosts(){
    this.posts = this.http.get<Post[]>(this.rootUrl + '/posts');
    return this.posts;
  }
  
  getPost(id:number){
    this.posts = this.http.get<Post[]>(this.rootUrl + '/posts/'+id);
    return this.posts;
  }

  deletePost(id:number){
    this.posts = this.http.delete<Post[]>(this.rootUrl + '/posts/'+id);
    return this.posts;
  }
}
