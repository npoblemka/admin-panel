import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ITask } from '../../../model';

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
      MatCardModule],
  templateUrl: './list-tasks.component.html',
  styleUrl: './list-tasks.component.scss'
})
export class ListTasksComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  listTasks!: MatTableDataSource<ITask>;
  displayedColumns: string[] = ['number', 'title', 'didline', 'priority', 'status', 'buttons'];

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
}
