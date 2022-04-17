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

  tasks: {id:number; title: string, status: string, description:string}[] = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasks = this.tasksService.tasks;
  }

}
