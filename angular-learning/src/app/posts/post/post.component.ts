import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post:any

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
  }

  onEditPost(){
    this.router.navigate(['/posts', this.post.id]);
  }

  onDeletePost(id:number){
    // sweetalert confirm delete
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.postsService.deletePost(id).subscribe((res) => {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.router.navigate(['/posts']);
        });
      }
    })
  }
}
