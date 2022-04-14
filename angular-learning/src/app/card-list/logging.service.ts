import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  logTaskAdd(taskTitle:string, taskStatus: string) {
    console.log(`A new task added, title: ${taskTitle}, status: ${taskStatus}`);
  }
  logStatusChange(taskStatus: string) {
    console.log(`A task status changed, new status: ${taskStatus}`);
  }

  constructor() { }
}
