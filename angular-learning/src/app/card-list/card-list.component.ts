import { 
  Component, 
  OnInit
} from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  providers: [TasksService]
})
export class CardListComponent implements OnInit {

  tasks: {title: string, status: string}[] = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasks = this.tasksService.tasks;
  }

}
