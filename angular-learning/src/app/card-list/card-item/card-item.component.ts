import { 
  Component, 
  OnInit,
  // EventEmitter,
  Input,
  // Output 
} from '@angular/core';
import { LoggingService } from '../logging.service';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
  // providers:[LoggingService, TasksService]
})
export class CardItemComponent implements OnInit {
  
  @Input()
  task!: { title: string; status: string; };

  @Input() 
  id!: number;

  // @Output() 
  // statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(
    // private loggingService: LoggingService,
    private tasksService: TasksService
    ) {

  }

  ngOnInit(): void {
  }

  onSetTo(taskStatus: string) {
    // this.statusChanged.emit({id: this.id, newStatus: taskStatus});
    this.tasksService.updateStatus(this.id, taskStatus);
    // this.loggingService.logStatusChange(taskStatus);
    // console.log('A task status changed, new status: ' + taskStatus);
  }
}
