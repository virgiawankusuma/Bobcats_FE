import { 
  Component, 
  OnInit 
} from '@angular/core';
import { 
  ActivatedRoute, 
  Params 
} from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent implements OnInit {

  task : any;

  allowEdit = false;

  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.task = this.tasksService.getTask(id);
    this.route.params.subscribe(
      (params : Params) => {
        this.task = this.tasksService.getTask(+params['id']);
      }
    )
  }

  onUpdateTask(taskUpdateTitle: string, taskUpdateStatus: string, taskUpdateDescription:string) {
    this.tasksService.updateTask(this.task.id, taskUpdateTitle, taskUpdateStatus, taskUpdateDescription);
  }

}
