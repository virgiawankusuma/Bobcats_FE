import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks = [
    {
      id: 0,
      title: 'Reading Book',
      status: 'Next Up',
      description: 'Read the book'
    },
    {
      id: 1,
      title: 'Sleep',
      status: 'In-Progress',
      description: 'Sleep for 8 hours'
    },
    {
      id: 2,
      title: 'Eat',
      status: 'Completed',
      description: 'Eat for 8 hours'
    }
  ];

  constructor(
    private loggingService: LoggingService
    ) { }

  getTask(id: number) {
    const task = this.tasks.find(
      (t) => {
        return t.id === id;
      }
    );
    return task;
  }

  addTask(title:string, status:string, description:string) {
    this.tasks.unshift({
      id: this.tasks.length + 1,    
      title: title,
      status: status,
      description: description
    });
    this.loggingService.logTaskAdd(title, status, description);
  }

  updateStatus(id: number, status: string) {
    this.tasks[id].status = status;
    this.loggingService.logStatusChange(status);
  }

}
