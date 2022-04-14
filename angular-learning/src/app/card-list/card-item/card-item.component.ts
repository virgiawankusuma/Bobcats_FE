import { 
  Component, 
  OnInit,
  Input
} from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
})
export class CardItemComponent implements OnInit {
  
  @Input()
  task!: { title: string; status: string; };

  @Input() 
  id!: number;

  constructor(
    private tasksService: TasksService
    ) {

  }

  ngOnInit(): void {
  }

  onSetTo(taskStatus: string) {
    this.tasksService.updateStatus(this.id, taskStatus);
  }
}
