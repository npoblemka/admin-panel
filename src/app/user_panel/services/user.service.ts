import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ITask } from '../../model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient);
  urlUsers = 'http://localhost:3000/users';
  urlTasks = 'http://localhost:3000/tasks';

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.urlTasks);
  }

  filterTasksUser(id: string) {
    return this.getTasks().pipe(
      map((response: ITask[]) => response.filter(item => item.executor === id))
    );
  }

}
