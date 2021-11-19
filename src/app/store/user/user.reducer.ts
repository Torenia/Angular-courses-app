import { UserActionTypes, UserActions } from './user.actions';
import { UserState, initialUserState } from './user.state';
import { User } from '../../models/user';

export function userReducer(
  state = initialUserState,
  action: UserActions,
): UserState {
  switch (action.type) {
    case UserActionTypes.USER_LOGIN:
      return {
        ...state
      };

    case UserActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state
      };

    case UserActionTypes.USER_LOGIN_ERROR:
      return {
        ...state
      };

    case UserActionTypes.GET_USER_INFO:
      return {
        ...state
      };

    case UserActionTypes.GET_USER_INFO_SUCCESS:
      const userInfo: User = action.payload;

      return {
        ...state,
        userInfo
      };

    case UserActionTypes.GET_USER_INFO_ERROR:
      return {
        ...state
      };

    default: {
      return state;
    }
  }
}
