import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import Swal from 'sweetalert2';
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
      'userId': new FormControl(this.post.userId),
      'id': new FormControl(this.post.id),
      'title': new FormControl(this.post.title, Validators.required),
      'body': new FormControl(this.post.body, Validators.required)
    });

    // this.postsService.getPost(id).subscribe(post => this.post = post).add(() => 
    // this.updatePost = new FormGroup({
    //   'userId': new FormControl(this.post.userId),
    //   'id': new FormControl(this.post.id),
    //   'title': new FormControl(this.post.title, Validators.required),
    //   'body': new FormControl(this.post.body, Validators.required)
    // }));
  }

  onUpdatePost(){
    if(this.updatePost.valid){
      this.postsService.updatePost(this.post.id,this.updatePost.value).subscribe(
        (response) => {
          Swal.fire({
            title: 'Success!',
            text: `Your post "${response.title}" has been updated!`,
            icon: 'success',
            confirmButtonText: 'Cool'
          });
          this.router.navigate(['/posts']);
        }
      );
    }
  }

  onBack(){
    this.router.navigate(['/posts']);
  }

}
