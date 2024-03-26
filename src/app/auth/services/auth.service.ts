import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient)
  urlUser = 'http://localhost:3000/users';

  registerUser<User>(inputData: User) {
    return this.http.post<User>(this.urlUser, inputData)
  }
  getUserCode(id: string) {
    return this.http.get<User>(this.urlUser + '/' + id)
  }
  isLoggedIn() {
    return sessionStorage.getItem('id') != null;
  }
  getRole(){
    return sessionStorage.getItem('role');
  }

}
