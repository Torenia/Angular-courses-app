import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization/authorization.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  login: string;

  constructor(private authorizationService: AuthorizationService) {
  }

  ngOnInit() {
    this.authorizationService.$userData.subscribe((data: User) => this.login = data.login);
    if (!this.login) {
      this.login = localStorage.getItem('user-login');
    }
  }
}
