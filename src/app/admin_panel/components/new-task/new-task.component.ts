import { Component, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports:
    [MatDialogModule,
      MatButtonModule,
      MatInputModule,
      MatIconModule,
      ReactiveFormsModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatCardModule,
      MatAutocompleteModule,
      MatCheckboxModule,
      MatRadioModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {

  fb = inject(FormBuilder);
  myControl = new FormControl('');
  options: string[] = ['User1', 'User2', 'User3'];

  newTaskForm = this.fb.group({
    executor: this.myControl,
    title: this.fb.control('', Validators.required),
    text: this.fb.control('', Validators.required),
    didline: this.fb.control(new Date(), Validators.required),
    priority: this.fb.control('false'),
    status: this.fb.control('не исполнена'),
  })

  addNewTask(){
    if (this.newTaskForm.valid) {
      console.log(this.newTaskForm)
    } else {
      console.log('error')
    }
  }
  removeText() {
    this.newTaskForm.get('text')?.setValue('');
  }

 

}
