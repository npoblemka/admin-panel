import { Component, inject } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserService } from '../../services/user.service';
import { ITask } from '../../../model';
import { DatePipe } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [
    MatTableModule,
    DatePipe,
    MatButtonModule
  ],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.scss'
})
export class AllTasksComponent {
  userService = inject(UserService)

  user = sessionStorage.getItem('id');
  tasks: any;
  allTasksTable = new MatTableDataSource<ITask>()
  displayedColumns: string[] = ['#', 'title', 'didline','button']

  ngOnInit() {
    this.getTasksUser()


  }

  getTasksUser() {
    this.tasks = this.userService.filterTasksUser(this.user!);
    this.allTasksTable = this.tasks
  }
}


