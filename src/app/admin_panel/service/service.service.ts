import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ITask, User } from '../../model';
import { map, Observable } from 'rxjs';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  http = inject(HttpClient)

  constructor() { }
  urlTasks: string = 'http://localhost:3000/tasks';
  urlUsers: string = 'http://localhost:3000/users';

  addTask<ITask>(inputData: ITask): Observable<ITask> {
    return this.http.post<ITask>(this.urlTasks, inputData)
  }
  getAllTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.urlTasks)
  }
  removeTask(id: string): Observable<ITask> {
    return this.http.delete<ITask>(this.urlTasks + '/' + id)
  }
  updateTask<ITask>(id: string, inputData: ITask) {
    return this.http.put<ITask>(this.urlTasks + '/' + id, inputData)
  }
  getTaskByCode(id: string) {
    return this.http.get<ITask>(this.urlTasks + '/' + id)
  }

  getAllUsersId(): Observable<string[]> {
    return this.http.get<User[]>(this.urlUsers).pipe(
      map((response: User[]) => response.map(item => item['id']))
    )
  }

}
