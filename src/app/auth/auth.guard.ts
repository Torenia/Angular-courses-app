import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../services/authorization/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isAuthenticatedUser: boolean;

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.isAuthenticatedUser = this.authorizationService.isAuthenticated();
    if (this.isAuthenticatedUser) {
      return true;
    } else {
      this.router.navigate(['/login-page']);
    }
  }
}
