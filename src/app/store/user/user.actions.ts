import { Action } from '@ngrx/store';

import { User } from '../../models/user';

export class UserActionTypes {
  static readonly USER_LOGIN = '[User] USER_LOGIN';
  static readonly USER_LOGIN_SUCCESS = '[User] USER_LOGIN_SUCCESS';
  static readonly USER_LOGIN_ERROR = '[User] USER_LOGIN_ERROR';
  static readonly GET_USER_INFO = '[User] GET_USER_INFO';
  static readonly GET_USER_INFO_SUCCESS = '[User] GET_USER_INFO_SUCCESS';
  static readonly GET_USER_INFO_ERROR = '[User] GET_USER_INFO_ERROR';
}

export class Login implements Action {
  readonly type = UserActionTypes.USER_LOGIN;
  constructor(public payload: { email: string, password: string }) { }
}

export class LoginSuccess implements Action {
  readonly type = UserActionTypes.USER_LOGIN_SUCCESS;
  constructor() { }
}

export class LoginError implements Action {
  readonly type = UserActionTypes.USER_LOGIN_ERROR;
  constructor(public payload: Error | string) { }
}

export class GetUserInfo implements Action {
  readonly type = UserActionTypes.GET_USER_INFO;
  constructor() { }
}

export class GetUserInfoSuccess implements Action {
  readonly type = UserActionTypes.GET_USER_INFO_SUCCESS;
  constructor(public payload: User) { }
}

export class GetUserInfoError implements Action {
  readonly type = UserActionTypes.GET_USER_INFO_ERROR;
  constructor(public payload: Error | string) { }
}

export type UserActions
  = Login
  | LoginSuccess
  | LoginError
  | GetUserInfo
  | GetUserInfoSuccess
  | GetUserInfoError;
