import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  logTaskAdd(taskTitle:string, taskStatus: string, taskDescription:string) {
    console.log(`A new task added, title: ${taskTitle}, status: ${taskStatus}, description: ${taskDescription}`);
  }
  logStatusChange(taskStatus: string) {
    console.log(`A task status changed, new status: ${taskStatus}`);
  }
  logTaskUpdate(taskTitle:string, taskStatus: string, taskDescription:string) {
    console.log(`A task updated, title: ${taskTitle}, status: ${taskStatus}, description: ${taskDescription}`);
  }

  constructor() { }
}
