import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  post:any
  updatePost!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.post = this.postsService.getPost(id).subscribe(post => this.post = post);
  
    this.updatePost = new FormGroup({
      'id': new FormControl(),
      'userId': new FormControl(),
      'title': new FormControl(),
      'body': new FormControl()
    });
  }

  onUpdatePost(){
  }

}
