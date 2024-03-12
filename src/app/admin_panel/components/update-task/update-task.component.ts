import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { ServiceService } from '../../service/service.service';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ITask } from '../../../model';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports:
    [MatDialogModule,
      MatButtonModule,
      MatInputModule,
      ReactiveFormsModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatCardModule,
      MatAutocompleteModule,
      MatRadioModule,
    ],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.scss'
})
export class UpdateTaskComponent {
  fb = inject(FormBuilder);
  service = inject(ServiceService)
  myControl = new FormControl('', Validators.required);

  options: string[] = ['User1', 'User2', 'User3'];
  task!: any;
  dialog = inject(DialogRef)
  data = inject(MAT_DIALOG_DATA)

  updateForm = this.fb.group({
    id: this.fb.control(''),
    executor: this.myControl,
    title: this.fb.control('', Validators.required),
    text: this.fb.control('', Validators.required),
    didline: this.fb.control(new Date(), Validators.required),
    priority: this.fb.control(false),
    status: this.fb.control('не исполнена'),
  })


  ngOnInit(): void {

    if (this.data.id != '' && this.data.id != null) {
      this.loadTaskData(this.data.id);
    }

    console.log(this.data.id)
  }

  loadTaskData(code: any) {
    this.service.getTaskByCode(code).subscribe((res => {
      this.task = res;
      this.updateForm.setValue({
        id: this.task.id,
        executor: this.task.executor,
        title: this.task.title,
        text: this.task.text,
        didline: this.task.didline,
        priority: this.task.priority,
        status: this.task.status
      })
    }))
  }

  updateTask() {
    this.service.updateTask(this.data.id, this.updateForm.value).subscribe(res => {
      this.dialog.close()
      location.reload()
    });
  }
}
