import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:
    [
      RouterLink,
      MatInputModule,
      MatCardModule,
      MatButtonModule,
      ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  result: any;

  loginForm = this.fb.group({
    id: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required)
  })
  isLogin() {
    if (this.loginForm.valid) {
      this.authService.getUserCode(this.loginForm.value.id!).subscribe(res => {
        this.result = res
        console.log(this.result)
        if (this.result.password === this.loginForm.value.password) {
          sessionStorage.setItem('id', this.result.id);
          sessionStorage.setItem('role', this.result.isRole);
          this.router.navigate(['user'])
        }
      })
    } else  {
      console.log('error')
    }
  }
}
