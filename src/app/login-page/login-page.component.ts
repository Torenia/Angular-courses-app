import { Component, OnInit } from '@angular/core';
import { UserState } from '../store/user';
import { Login } from '../store/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
  login = '';
  password = '';
  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private userStore: Store<UserState>
  ) { }

  ngOnInit() {
  }

  loginUser() {
    this.login = this.loginForm.get('login').value;
    this.password = this.loginForm.get('password').value;
    this.userStore.dispatch(new Login({
      email: this.login,
      password: this.password
    }));
  }
}
