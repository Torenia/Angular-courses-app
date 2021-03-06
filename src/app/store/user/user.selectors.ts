import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.state';

export const getUserState = createFeatureSelector<UserState>('user');

export const getUserInfo = createSelector(getUserState, (state: UserState) => state.userInfo);
