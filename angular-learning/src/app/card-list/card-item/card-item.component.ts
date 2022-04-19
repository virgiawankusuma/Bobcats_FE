import { 
  Component, 
  OnInit,
  Input,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
})
export class CardItemComponent implements OnInit {
  
  @Input()
  task!: {id:number; title: string; status: string; description:string};

  // @Input() 
  // id!: number;

  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute,
    private router: Router
    ) {

  }

  ngOnInit(): void {
  }

  onSetTo(taskStatus: string) {
    this.tasksService.updateStatus(this.task.id, taskStatus);
  }

  onDetailTask(){
    this.router.navigate([this.task.id], {relativeTo: this.route});
  }
}
