import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserActionTypes } from './user.actions';
import * as UserActions from './user.actions';

import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../services/authorization/authorization.service';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private authorizationService: AuthorizationService,
    private router: Router,
  ) { }

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType<UserActions.Login>(UserActionTypes.USER_LOGIN),
    switchMap(({ payload }) =>
      this.authorizationService.login(payload.email, payload.password)
        .pipe(
          map(() => new UserActions.LoginSuccess()),
          catchError(err => of(new UserActions.LoginError(err))),
        ),
    ),
  );

  @Effect()
  loginSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<UserActions.LoginSuccess>(UserActionTypes.USER_LOGIN_SUCCESS),
    map(() => new UserActions.GetUserInfo()));


  @Effect()
  getUserInfo$: Observable<Action> = this.actions$.pipe(
    ofType<UserActions.GetUserInfo>(UserActionTypes.GET_USER_INFO),
    switchMap(() =>
      this.authorizationService.getUserInfo()
        .pipe(
          map((res: any) => new UserActions.GetUserInfoSuccess(res)),
          catchError(err => of(new UserActions.GetUserInfoError(err))),
        ),
    ),
  );

  @Effect({ dispatch: false })
  getUserInfoSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<UserActions.GetUserInfoSuccess>(UserActionTypes.GET_USER_INFO_SUCCESS),
    tap(() => {
      this.router.navigate(['/courses']);
    })
  );
}
