import { Component, ViewChild, inject } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ITask } from '../../../model';
import { RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { app } from '../../../../../server';
import { NewTaskComponent } from '../new-task/new-task.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-list-tasks',
  standalone: true,
  imports:
    [MatFormFieldModule,
      MatInputModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatButtonModule,
      MatCardModule,
      RouterLink,
      MatDialogModule,
      NewTaskComponent,
      MatNativeDateModule],
  templateUrl: './list-tasks.component.html',
  styleUrl: './list-tasks.component.scss',
})
export class ListTasksComponent {
  service = inject(ServiceService)
  dialog = inject(MatDialog)
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  listTasks!: MatTableDataSource<ITask>

  displayedColumns: string[] = ['number', 'executor', 'title', 'didline', 'priority', 'status', 'buttons'];

  ngOnInit() {
    this.getTasks()
  }
  ngAfterViewInit() {
    this.listTasks.paginator = this.paginator;
    this.listTasks.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listTasks.filter = filterValue.trim().toLowerCase();

    if (this.listTasks.paginator) {
      this.listTasks.paginator.firstPage();
    }
  }
  openDialog() {
    this.dialog.open(NewTaskComponent);
  }

  getTasks() {
    this.service.getAllTasks().subscribe(res => { 
      // this.listTasks.data = res
      this.listTasks = new MatTableDataSource(res);
    })
  }
}
