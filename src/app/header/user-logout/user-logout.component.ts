import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.scss']
})
export class UserLogoutComponent implements OnInit {

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logoutUser() {
      this.authorizationService.logout();
      this.router.navigate(['/login-page']);
  }
}
