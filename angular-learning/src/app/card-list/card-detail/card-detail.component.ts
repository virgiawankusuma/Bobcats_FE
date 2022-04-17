import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  task!: {id:number; title: string; status: string; description:string};

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.task = {
      id: +this.route.snapshot.params['id'],
      title: this.route.snapshot.params['title'],
      status: this.route.snapshot.params['status'],
      description: this.route.snapshot.params['description']
    }
  }

}
