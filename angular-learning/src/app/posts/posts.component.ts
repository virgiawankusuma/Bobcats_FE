import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './post.model';
import { PostsService } from './posts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
    ) {}

  ngOnInit() {
    this.posts =  this.postsService.fetchPosts();
  }
  
  onFetchPosts() {
    this.posts = this.postsService.fetchPosts();
  }

  onAddPost() {
    
  }
}
