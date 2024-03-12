import { Component, inject } from '@angular/core';
import { ITask } from '../../../model';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-task-detalis',
  standalone: true,
  imports:
    [CommonModule,
      MatCardModule,
      MatListModule],
  templateUrl: './task-detalis.component.html',
  styleUrl: './task-detalis.component.scss'
})
export class TaskDetalisComponent {
  route = inject(ActivatedRoute)
  service = inject(ServiceService)
  task!: ITask;
  id!: string;

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.getDataTask()
  }

  getDataTask() {
    this.service.getTaskByCode(this.id).subscribe(res => {
      this.task = res
    })
  }

}
