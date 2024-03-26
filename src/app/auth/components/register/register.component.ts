import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  fb = inject(FormBuilder)
  router = inject(Router)
  authService = inject(AuthService)


  registerForm = this.fb.group({
    name: this.fb.control('', Validators.required),
    id: this.fb.control('', Validators.required),
    password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
    email: this.fb.control('', [Validators.required, Validators.email]),
    isAdminRole: this.fb.control(''),
  })
  isRegister() {
    if (this.registerForm.valid) {
      this.authService.registerUser(this.registerForm.value).subscribe(res => {
        this.router.navigate(['login'])
      })
    } else {
      console.log('error')
    }
  }
  resetRegisterForm(){
    this.registerForm.reset()
  }
}
