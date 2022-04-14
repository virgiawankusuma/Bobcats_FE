import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks = [
    {
      title: 'Reading Book',
      status: 'Next Up'
    },
    {
      title: 'Sleep',
      status: 'In-Progress'
    },
    {
      title: 'Eat',
      status: 'Completed'
    }
  ];

  constructor(
    private loggingService: LoggingService
    ) { }

  addTask(title:string, status:string) {
    this.tasks.unshift({
      title: title,
      status: status
    });
    this.loggingService.logTaskAdd(title, status);
  }

  updateStatus(id: number, status: string) {
    this.tasks[id].status = status;
    this.loggingService.logStatusChange(status);
  }

}
