import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ITask } from '../../model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  http = inject(HttpClient)

  constructor() { }
  urlTasks: string = 'http://localhost:3000/tasks'

  addTask<ITask>(inputData: ITask) {
    return this.http.post(this.urlTasks, inputData)
  }
  getAllTasks() {
    return this.http.get<ITask[]>(this.urlTasks)
  }

  removeTask(id: string) {
    return this.http.delete(this.urlTasks + '/' + id)
  }
}
