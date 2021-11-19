import { User } from '../../models/user';

export interface UserState {
  readonly userInfo: User;
}

export const initialUserState: UserState = {
  userInfo: null
};
