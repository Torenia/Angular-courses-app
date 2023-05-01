import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {
  private authUrl = 'http://localhost:3004/auth';
  private userData = new Subject();
  $userData = this.userData.asObservable();

  constructor(private httpClient: HttpClient) {
  }

  login(login, password): Observable<void> {
    const url = `${this.authUrl}/login`;
    return this.httpClient.post<User>(url, { login, password }).pipe(map(data => {
      localStorage.setItem('user-token', data.token);
    }));
  }

  setUserData(userData): void {
    this.userData.next(userData);
  }

  logout() {
    localStorage.removeItem('user-token');
    localStorage.removeItem('user-login');
  }

  getUserInfo(): Observable<User> {
    const token = localStorage.getItem('user-token');
    const url = `${this.authUrl}/userinfo`;
    return this.httpClient.post<User>(url, { token }).pipe(map(userData => {
      this.setUserData(userData);
      localStorage.setItem('user-login', userData.login);
      return userData;
    }));
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user-token');
  }
}
