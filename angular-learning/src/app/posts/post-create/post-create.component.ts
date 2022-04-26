import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  addPost!: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router,
    private postsService: PostsService
  ) { }

  posts = this.postsService.fetchPosts();

  ngOnInit(): void {
    const id = new FormControl(101);

    this.addPost = new FormGroup({
      'userId': new FormControl(1),
      'id': id,
      'title': new FormControl('', Validators.required),
      'body': new FormControl('', Validators.required)
    });
  }

  onSubmit(){
    if(this.addPost.valid){
      this.postsService.addPost(this.addPost.value).subscribe(
        (response) => {
          Swal.fire({
            title: 'Success!',
            text: `Your post "${response.title}" has been added!`,
            icon: 'success',
            confirmButtonText: 'Cool'
          });
          this.router.navigate(['/posts']);
        }
      );
    }
  }

}
