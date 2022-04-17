import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  task: any;

  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.task =  this.tasksService.getTask(id);
    this.route.params.subscribe(
      (params : Params) => {
        this.task = this.tasksService.getTask(+params['id']);
      }
    )
  }

}
