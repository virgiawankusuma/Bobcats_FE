import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  rootUrl = 'https://jsonplaceholder.typicode.com';
  posts!:Observable<any>;

  constructor(
    private http: HttpClient,
  ) { }

  fetchPosts(){
    this.posts = this.http.get(this.rootUrl + '/posts');
    return this.posts;
  }
  
  getPost(id:number){
    this.posts = this.http.get(this.rootUrl + '/posts/'+id);
    return this.posts;
  }

  addPost(post:Post){
    this.posts = this.http.post(this.rootUrl + '/posts', post);
    return this.posts;
  }

  updatePost(id:number,post:Post){
    this.posts = this.http.put(this.rootUrl + '/posts/'+id, post);
    return this.posts;
  }

  deletePost(id:number){
    this.posts = this.http.delete(this.rootUrl + '/posts/'+id);
    return this.posts;
  }
}
