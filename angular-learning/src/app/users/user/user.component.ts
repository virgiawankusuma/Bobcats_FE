import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  // user!:  { id:number, name:string, passport:number, age:number, gender:string, professions:string, maritalStatus:string };
  user:any

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  
  onDetailUser(){
    this.router.navigate(['/users', this.user.id]);
  }
}
