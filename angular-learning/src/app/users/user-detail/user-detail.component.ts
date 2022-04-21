import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: any

  constructor(
    private usersService : UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.user = this.usersService.getUser(id);
    this.route.params.subscribe(
      (params: Params) => {
        this.user = this.usersService.getUser(+params['id']);
      }
    )
  }

  onEdit(user:any){
    console.log(user);
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
