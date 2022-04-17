import { 
  Component, 
  OnInit
} from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css'],
})
export class CardAddComponent implements OnInit {

  constructor(
    private tasksService: TasksService
  ) {}

  ngOnInit(): void {
  }
   onCreateTask(taskTitle: string, taskStatus: string, taskDescription:string) {
    this.tasksService.addTask(taskTitle, taskStatus, taskDescription);
  }

}
