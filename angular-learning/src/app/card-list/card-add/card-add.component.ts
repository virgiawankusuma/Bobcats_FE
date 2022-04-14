import { 
  Component, 
  OnInit,
  // EventEmitter,
  // Output
} from '@angular/core';
import { LoggingService } from '../logging.service';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css'],
  // providers:[LoggingService, TasksService]
})
export class CardAddComponent implements OnInit {
  // @Output() taskAdded = new EventEmitter<{title: string, status: string}>();

  constructor(
    // private loggingService: LoggingService, 
    private tasksService: TasksService
  ) {}

  ngOnInit(): void {
  }
   onCreateTask(taskTitle: string, taskStatus: string) {
    // this.taskAdded.emit({
    //   title: taskTitle,
    //   status: taskStatus
    // });
    this.tasksService.addTask(taskTitle, taskStatus);
    // this.loggingService.logTaskAdd(taskTitle,taskStatus);
    // const service = new LoggingService();
    // service.logStatusChange(taskStatus);
    // console.log('A task added, title: ' + taskTitle + ', status: ' + taskStatus);
  }

}
